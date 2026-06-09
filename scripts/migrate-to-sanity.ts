/**
 * One-off migration: import the hardcoded articles in lib/articles.tsx into Sanity.
 *
 * For each article it:
 *   - uploads featuredImage, body images, and audio to Sanity as assets
 *     (cached by file path so the same file is never uploaded twice),
 *   - converts each JSX text block to Portable Text via renderToStaticMarkup +
 *     @sanity/block-tools (htmlToBlocks), preserving the original block order
 *     (which is also the intended mobile order),
 *   - writes a document with a deterministic _id (`article-<slug>`) using
 *     createOrReplace, so re-running is idempotent and never duplicates.
 *
 * Usage:
 *   npx tsx scripts/migrate-to-sanity.ts --dry   # preview only — no writes, no uploads
 *   npx tsx scripts/migrate-to-sanity.ts         # perform the migration
 *
 * Imports use relative paths (not @/ aliases) so the script resolves cleanly
 * under `npx tsx`. The lib/articles.tsx import chain (-> ./types -> react) uses
 * no @/ aliases itself, so nothing in the chain needs path-mapping at runtime.
 */
import { readFileSync, existsSync } from 'node:fs'
import { basename, dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import { config as loadEnv } from 'dotenv'
import { createClient } from '@sanity/client'
import { Schema } from '@sanity/schema'
import { htmlToBlocks, normalizeBlock, randomKey } from '@sanity/block-tools'
import { JSDOM } from 'jsdom'
import { renderToStaticMarkup } from 'react-dom/server'
import type React from 'react'

import { articles, type ArticleData } from '../lib/articles'
import type { ContentBlock } from '../lib/types'

// --- Load env from .env.local (must happen before reading any Sanity vars). ---
const __dirname = dirname(fileURLToPath(import.meta.url))
const PROJECT_ROOT = resolve(__dirname, '..')
loadEnv({ path: join(PROJECT_ROOT, '.env.local') })

const DRY = process.argv.includes('--dry')

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-06-09'
const token = process.env.SANITY_API_WRITE_TOKEN

if (!projectId || !dataset) {
  throw new Error(
    'Missing NEXT_PUBLIC_SANITY_PROJECT_ID / NEXT_PUBLIC_SANITY_DATASET in .env.local'
  )
}
// Fail loudly if the write token is missing for a live run.
if (!DRY && !token) {
  throw new Error(
    'Missing SANITY_API_WRITE_TOKEN in .env.local — required to write to Sanity.\n' +
      'Run with --dry to preview without a token.'
  )
}

// --- Write client: same project/dataset/apiVersion, write token, no CDN. ---
const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
})

// --- Block content type, mirroring the `body` field in
// sanity/schemaTypes/article.ts (styles: normal + h2; default marks for
// strong/em and links). Defined inline so we don't import the heavy `sanity`
// package (which expects a browser environment) into this Node script. ---
const compiledSchema = Schema.compile({
  name: 'migration',
  types: [
    {
      name: 'body',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Paragraph', value: 'normal' },
            { title: 'Subheader', value: 'h2' },
          ],
          lists: [],
        },
      ],
    },
  ],
})
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const blockContentType = (compiledSchema as any).get('body') as Parameters<
  typeof htmlToBlocks
>[1]

// ------------------------------------------------------------------
// Asset uploads (cached by absolute file path)
// ------------------------------------------------------------------

interface AssetResolution {
  ref: string
  abs: string
  exists: boolean
  cached: boolean
}

const assetCache = new Map<string, string>() // absolute path -> Sanity asset _id

/** Resolve a public-relative url ('/images/x.jpg') to a Sanity asset reference. */
async function resolveAsset(
  urlPath: string,
  kind: 'image' | 'file'
): Promise<AssetResolution> {
  const abs = join(PROJECT_ROOT, 'public', urlPath.replace(/^\//, ''))
  const exists = existsSync(abs)
  const cached = assetCache.has(abs)

  if (DRY) {
    // Don't touch disk contents or the network — just report intent.
    return { ref: `DRY::${urlPath}`, abs, exists, cached }
  }

  if (!exists) {
    throw new Error(`Asset file not found on disk: ${abs} (referenced as "${urlPath}")`)
  }
  if (cached) {
    return { ref: assetCache.get(abs)!, abs, exists, cached: true }
  }

  const asset = await client.assets.upload(kind, readFileSync(abs), {
    filename: basename(abs),
  })
  assetCache.set(abs, asset._id)
  return { ref: asset._id, abs, exists, cached: false }
}

// ------------------------------------------------------------------
// Body conversion
// ------------------------------------------------------------------

/** Convert a single JSX text block to an array of Portable Text blocks. */
function textToPortableText(content: React.ReactNode) {
  const html = renderToStaticMarkup(content as React.ReactElement)
  const raw = htmlToBlocks(html, blockContentType, {
    parseHtml: (h) => new JSDOM(h).window.document as unknown as Document,
  })
  // normalizeBlock ensures each block (and its children) has a stable _key.
  return raw.map((b) => normalizeBlock(b))
}

type ImageBlock = Extract<ContentBlock, { type: 'image' }>

/** Build a Portable Text image object from an image block. */
async function imageToPortableText(block: ImageBlock) {
  const res = await resolveAsset(block.url, 'image')
  const obj: Record<string, unknown> = {
    _type: 'image',
    _key: randomKey(12),
    asset: { _type: 'reference', _ref: res.ref },
    alt: block.alt,
  }
  if (block.caption) obj.caption = block.caption
  if (block.spacing) obj.spacing = block.spacing
  return { obj, res }
}

interface AssetLogEntry {
  role: string
  urlPath: string
  abs: string
  exists: boolean
}

/** Fallback for deprecated content/images fields (no `blocks`). */
function legacyToBlocks(article: ArticleData): ContentBlock[] {
  const out: ContentBlock[] = []
  if (article.content) out.push({ type: 'text', content: article.content })
  for (const img of article.images ?? []) {
    out.push({ type: 'image', url: img.url, alt: img.alt })
  }
  return out
}

/** Walk an article's blocks in order, building the Portable Text body array. */
async function buildBody(article: ArticleData) {
  const body: unknown[] = []
  const assetLog: AssetLogEntry[] = []
  const blocks = article.blocks ?? legacyToBlocks(article)

  for (const block of blocks) {
    if (block.type === 'image') {
      const { obj, res } = await imageToPortableText(block)
      assetLog.push({ role: 'body image', urlPath: block.url, abs: res.abs, exists: res.exists })
      body.push(obj)
    } else {
      for (const ptBlock of textToPortableText(block.content)) {
        body.push(ptBlock)
      }
    }
  }

  return { body, assetLog }
}

/** Coerce an arbitrary date string to a valid 'YYYY-MM-DD' string. */
function coerceDate(input: string): string {
  const d = new Date(input)
  if (Number.isNaN(d.getTime())) {
    console.warn(`  ⚠ invalid publishDate "${input}" — defaulting to today`)
    return new Date().toISOString().slice(0, 10)
  }
  return d.toISOString().slice(0, 10)
}

/** Build the full Sanity document for an article. */
async function buildDocument(article: ArticleData) {
  const { body, assetLog } = await buildBody(article)

  const featured = await resolveAsset(article.featuredImage, 'image')
  assetLog.unshift({
    role: 'featuredImage',
    urlPath: article.featuredImage,
    abs: featured.abs,
    exists: featured.exists,
  })

  let audio: AssetResolution | null = null
  if (article.audioSrc) {
    audio = await resolveAsset(article.audioSrc, 'file')
    assetLog.push({
      role: 'audio',
      urlPath: article.audioSrc,
      abs: audio.abs,
      exists: audio.exists,
    })
  }

  const doc: Record<string, unknown> = {
    _id: `article-${article.slug}`,
    _type: 'article',
    title: article.title,
    slug: { _type: 'slug', current: article.slug },
    publishDate: coerceDate(article.publishDate),
    author: article.author,
    entity: article.entity,
    featuredImage: {
      _type: 'image',
      asset: { _type: 'reference', _ref: featured.ref },
    },
    body,
  }
  if (audio) {
    doc.audio = { _type: 'file', asset: { _type: 'reference', _ref: audio.ref } }
  }

  return { doc, assetLog }
}

function indent(text: string, spaces: number): string {
  const pad = ' '.repeat(spaces)
  return text
    .split('\n')
    .map((l) => pad + l)
    .join('\n')
}

// ------------------------------------------------------------------
// Main
// ------------------------------------------------------------------

async function main() {
  console.log(
    `\n=== Sentieri → Sanity migration ${DRY ? '(DRY RUN — no writes, no uploads)' : '(LIVE)'} ===`
  )
  console.log(`projectId=${projectId}  dataset=${dataset}  apiVersion=${apiVersion}`)

  let missingFiles = 0

  for (const article of articles) {
    console.log('\n──────────────────────────────────────────────────────────')
    console.log(`Article: "${article.title}"  (slug: ${article.slug})`)

    const { doc, assetLog } = await buildDocument(article)

    console.log(`  _id:         ${doc._id}`)
    console.log(`  title:       ${doc.title}`)
    console.log(`  author:      ${doc.author}`)
    console.log(`  entity:      ${doc.entity}`)
    console.log(`  publishDate: ${doc.publishDate}  (from "${article.publishDate}")`)
    console.log(`  slug:        ${JSON.stringify(doc.slug)}`)
    console.log(`  has audio:   ${doc.audio ? 'yes' : 'no'}`)
    console.log(`  body items:  ${(doc.body as unknown[]).length} portable-text entries`)

    console.log('  Assets (file it would upload, and whether it exists on disk):')
    for (const a of assetLog) {
      if (!a.exists) missingFiles++
      console.log(`    [${a.role}] ${a.urlPath}`)
      console.log(`        -> ${a.abs}  ${a.exists ? '✓ exists' : '✗ MISSING'}`)
    }

    if (DRY) {
      console.log('  Converted Portable Text body:')
      console.log(indent(JSON.stringify(doc.body, null, 2), 4))
    } else {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await client.createOrReplace(doc as any)
      console.log('  ✔ written via createOrReplace')
    }
  }

  console.log('\n──────────────────────────────────────────────────────────')
  console.log(`Articles processed: ${articles.length}`)
  if (!DRY) console.log(`Unique asset files uploaded: ${assetCache.size}`)
  if (missingFiles > 0) {
    console.log(`⚠ ${missingFiles} referenced asset file(s) NOT found on disk — fix before a live run.`)
  }
  console.log(
    DRY
      ? '\nDRY RUN complete. No data was written and no assets were uploaded.'
      : '\nMigration complete.'
  )
}

main().catch((err) => {
  console.error('\n✖ Migration failed:', err)
  process.exit(1)
})
