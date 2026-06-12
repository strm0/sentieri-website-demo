/**
 * One-off seed: import the existing hardcoded Wine copy into the `winePage`
 * singleton in Sanity.
 *
 * It mirrors scripts/migrate-to-sanity.ts:
 *   - uploads the body images to Sanity as assets (cached by file path),
 *   - converts each JSX text block to Portable Text via renderToStaticMarkup +
 *     @sanity/block-tools (htmlToBlocks), preserving order (= the mobile order),
 *   - writes ONE document with a fixed _id ('winePage') via createOrReplace, so
 *     re-running is idempotent and never duplicates.
 *
 * The helper functions are copied from migrate-to-sanity.ts to keep this script
 * self-contained (the proven article script is left untouched). When Olive Oil
 * comes next, extract the shared helpers into scripts/lib/ — not now.
 *
 * The body is defined with React.createElement rather than JSX so this stays a
 * .ts file (matching migrate-to-sanity.ts); a .ts file can't parse JSX under tsx.
 *
 * Usage:
 *   npx tsx scripts/migrate-wine.ts --dry   # preview only — no writes, no uploads
 *   npx tsx scripts/migrate-wine.ts         # perform the seed
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
// sanity/schemaTypes/winePage.ts (styles: normal + h2). Defined inline so we
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
// The Wine body — mirrors app/(site)/wine/page.tsx exactly: each paragraph and
// each subheader is its own text block, followed by the 3 wine images in order.
// (Text first, then images — matching the page's current legacy mobile order.)
// ------------------------------------------------------------------

const p = (text: string): ContentBlock => ({
  type: 'text',
  content: React.createElement('p', null, text),
})
const h2 = (text: string): ContentBlock => ({
  type: 'text',
  content: React.createElement('h2', { className: 'subheader-l1' }, text),
})

const WINE_BODY: ContentBlock[] = [
  p(
    'We always hear that wine is shaped in the field long before it reaches the cellar, but ' +
      'what does it actually mean? For us it means that viticulture is not a technical step ' +
      'before "real winemaking" begins, it is in fact the foundation. The choices made among the ' +
      'vines, across seasons, determine everything that follows. Sentieri wine is not something ' +
      'constructed later, but something revealed slowly through attention and restraint.'
  ),
  h2('Terroir'),
  p(
    'Sentieri is located in Loreto Aprutino, in the Vestina areas of Abruzzo, where vineyards ' +
      'and olive groves have moulded the terrain for generations. Our vines grow in clay-rich, ' +
      'dense, mineral soils that hold both water and structure through the dry Mediterranean ' +
      "summer. These heavy soils give our Montepulciano d'Abruzzo its depth and tension, " +
      'yielding wines with gravity, concentration, and a distinct sense of place.'
  ),
  h2('Viticulture'),
  p(
    'Our approach in the vineyard is guided by hand management and long-term health rather ' +
      'than short-term yield. We work with minimal machinery, careful canopy decisions, and ' +
      'practices that support balance in the vines and vitality in the soil.'
  ),
  p(
    'The vineyard is not treated as a monoculture factory, but as part of a wider living ' +
      'system. Spontaneous plants, insects, weather shifts, and soil life are treated as signals ' +
      'that determine how we respond. Each season teaches us something different, and the work ' +
      'is always relational: between vine, land, and time.'
  ),
  h2('Harvest'),
  p(
    'Harvest is done entirely by hand, in two distinct moments. The first picking happens ' +
      'earlier, preserving freshness and lift for our Vino Rosato. The second comes later, at ' +
      'full maturity, when the grapes are ready to express the deeper, more grounded character ' +
      'of our Vino Rosso.'
  ),
  p(
    'These are not just technical decisions, but ways of listening to the rhythm of the year, ' +
      'allowing the different expressions of Montepulciano to emerge from the same landscape.'
  ),
  h2('Vinification'),
  p(
    'In the cellar, our philosophy is simple: wine should remain wine. We let a spontaneous ' +
      'fermentation happen, the grapes are gently pressed and left to ferment with minimal ' +
      'interference. We do not pursue heavy extraction or engineered consistency. Instead, we ' +
      'practice a low-intervention approach which respects what the season has already written ' +
      'into the fruit.'
  ),
  p(
    'We use only small, careful additions when necessary, prioritising stability without ' +
      "erasing character. The goal is not to impose a style, but to preserve the authenticity " +
      "of the year's harvest."
  ),
  {
    type: 'image',
    url: '/images/wine/wine-1.jpg',
    alt: "Montepulciano d'Abruzzo grapes on the vine",
  },
  {
    type: 'image',
    url: '/images/wine/wine-2.jpg',
    alt: 'Wine bottles in the vineyard',
  },
  {
    type: 'image',
    url: '/images/wine/wine-3.jpg',
    alt: 'Vineyard landscape in Loreto Aprutino',
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

/** Walk the Wine body in order, building the Portable Text body array. */
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
    `\n=== Sentieri Wine → Sanity singleton ${DRY ? '(DRY RUN — no writes, no uploads)' : '(LIVE)'} ===`
  )
  console.log(`projectId=${projectId}  dataset=${dataset}  apiVersion=${apiVersion}`)

  const { body, assetLog } = await buildBody(WINE_BODY)

  // Omit `subtitle` — the client adds the tagline in Studio (Wine has none in code).
  const doc: Record<string, unknown> = {
    _id: 'winePage',
    _type: 'winePage',
    title: 'Wine',
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
      : '\nWine singleton seeded.'
  )
}

main().catch((err) => {
  console.error('\n✖ Wine seed failed:', err)
  process.exit(1)
})
