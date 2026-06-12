/**
 * One-off seed: import the existing hardcoded Olive Oil copy into the
 * `oliveOilPage` singleton in Sanity. Cloned from scripts/migrate-wine.ts.
 *
 * It mirrors scripts/migrate-to-sanity.ts:
 *   - uploads the body images to Sanity as assets (cached by file path),
 *   - converts each JSX text block to Portable Text via renderToStaticMarkup +
 *     @sanity/block-tools (htmlToBlocks), preserving order (= the mobile order),
 *   - writes ONE document with a fixed _id ('oliveOilPage') via createOrReplace,
 *     so re-running is idempotent and never duplicates.
 *
 * The body is defined with React.createElement rather than JSX so this stays a
 * .ts file (matching migrate-wine.ts); a .ts file can't parse JSX under tsx.
 *
 * Usage:
 *   npx tsx scripts/migrate-olive-oil.ts --dry   # preview only — no writes
 *   npx tsx scripts/migrate-olive-oil.ts         # perform the seed
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
import React from 'react'

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
// sanity/schemaTypes/oliveOilPage.ts (styles: normal + h2). Defined inline so we
// don't import the heavy `sanity` package (which expects a browser environment)
// into this Node script. ---
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
// The Olive Oil body — mirrors app/(site)/olive-oil/page.tsx exactly: 4 prose
// paragraphs (the last with an inline <em>forte e gentile</em>), followed by the
// 5 olive oil images in order. (Text first, then images — the page's current
// legacy mobile order.)
// ------------------------------------------------------------------

const p = (...children: React.ReactNode[]): ContentBlock => ({
  type: 'text',
  content: React.createElement('p', null, ...children),
})

const OLIVE_OIL_BODY: ContentBlock[] = [
  p(
    'Typical of the Vestina hills around Loreto Aprutino, Dritta is a traditional Abruzzese ' +
      'cultivar that has grown within this landscape for generations. Many of our trees are over ' +
      'one hundred years old, defined by soil, exposure, and long familiarity with place rather ' +
      'than by yield-driven design.'
  ),
  p(
    'We harvest by hand, moving attentively through the groves in small groups. Decisions are ' +
      'made tree by tree, guided by ripeness, weather, and ground conditions. The harvest is a ' +
      'collective moment, honoring the collective nature of this practice.'
  ),
  p(
    'Within hours of picking, olives are pressed at a net-zero emissions mill in Pianella, ' +
      'chosen to extend our approach beyond the field. Milling happens cold, without ' +
      'interventions, letting oil express the season, not a standard product.'
  ),
  p(
    'We bottle in small batches to stay close to the oil as it develops. Dritta produces an ' +
      'oil with a clear profile: fresh green pepperiness, a rounded body, and a persistent ' +
      'bright finish. It reflects the balance we aim for in the field, a balance between ' +
      'something ',
    React.createElement('em', null, 'forte e gentile'),
    '.'
  ),
  {
    type: 'image',
    url: '/images/oliveOil/olive-oil-1.jpg',
    alt: 'Olive branches with green olives',
  },
  {
    type: 'image',
    url: '/images/oliveOil/olive-oil-2.jpg',
    alt: 'Olive oil bottle in olive grove',
  },
  {
    type: 'image',
    url: '/images/oliveOil/olive-oil-3.jpg',
    alt: 'Close-up of olives on tree',
  },
  {
    type: 'image',
    url: '/images/oliveOil/olive-oil-4.jpg',
    alt: 'Traditional olive oil pressing',
  },
  {
    type: 'image',
    url: '/images/oliveOil/olive-oil-5.jpg',
    alt: 'Olive oil production',
  },
]

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

/** Walk the Olive Oil body in order, building the Portable Text body array. */
async function buildBody(blocks: ContentBlock[]) {
  const body: unknown[] = []
  const assetLog: AssetLogEntry[] = []

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
    `\n=== Sentieri Olive Oil → Sanity singleton ${DRY ? '(DRY RUN — no writes, no uploads)' : '(LIVE)'} ===`
  )
  console.log(`projectId=${projectId}  dataset=${dataset}  apiVersion=${apiVersion}`)

  const { body, assetLog } = await buildBody(OLIVE_OIL_BODY)

  // Omit `subtitle` — the client adds the tagline in Studio.
  const doc: Record<string, unknown> = {
    _id: 'oliveOilPage',
    _type: 'oliveOilPage',
    title: 'Olive oil',
    body,
  }

  console.log('\n──────────────────────────────────────────────────────────')
  console.log(`  _id:        ${doc._id}`)
  console.log(`  _type:      ${doc._type}`)
  console.log(`  title:      ${doc.title}`)
  console.log(`  subtitle:   (omitted — client sets it in Studio)`)
  console.log(`  body items: ${(doc.body as unknown[]).length} portable-text entries`)

  console.log('  Assets (file it would upload, and whether it exists on disk):')
  let missingFiles = 0
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

  console.log('\n──────────────────────────────────────────────────────────')
  if (!DRY) console.log(`Unique asset files uploaded: ${assetCache.size}`)
  if (missingFiles > 0) {
    console.log(`⚠ ${missingFiles} referenced asset file(s) NOT found on disk — fix before a live run.`)
  }
  console.log(
    DRY
      ? '\nDRY RUN complete. No data was written and no assets were uploaded.'
      : '\nOlive Oil singleton seeded.'
  )
}

main().catch((err) => {
  console.error('\n✖ Olive Oil seed failed:', err)
  process.exit(1)
})
