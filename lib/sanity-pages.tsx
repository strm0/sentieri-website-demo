import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import SanityBlockText from '@/components/article/SanityBlockText'
import type { ContentBlock } from '@/lib/types'
import type { PortableTextBlock } from '@portabletext/types'
import {
  type SanityBodyItem,
  type SanityImageBlock,
} from '@/lib/sanity-articles'

/**
 * A Sanity-backed singleton page (Wine). Mirrors the article fetch layer but
 * carries only the fields a single page needs: a title, an optional Geist Mono
 * subtitle tagline, and the same mixed text/image `body` array as articles.
 */
export interface SanityWinePage {
  _id: string
  title: string
  subtitle?: string
  body?: SanityBodyItem[]
}

/**
 * Fetch the single `winePage` document.
 *
 * The body array preserves its authored order (the intended mobile order);
 * body images also keep their `asset` reference so urlFor() can apply transforms.
 */
const WINE_PAGE_QUERY = /* groq */ `
  *[_type == "winePage"][0]{
    _id,
    title,
    subtitle,
    body[]{
      ...,
      _type == "image" => {
        ...,
        "url": asset->url
      }
    }
  }
`

export async function getSanityWinePage(): Promise<SanityWinePage | null> {
  return client.fetch<SanityWinePage | null>(
    WINE_PAGE_QUERY,
    {},
    {
      // The front end only ever serves published content; the CDN is safe here.
      perspective: 'published',
      useCdn: true,
    }
  )
}

/**
 * A generic Sanity-backed singleton page, keyed by its document type. Same shape
 * as `SanityWinePage`; used by Olive Oil and (next) Residencies / About.
 */
export interface SanitySingletonPage {
  _id: string
  title: string
  subtitle?: string
  body?: SanityBodyItem[]
}

/**
 * Fetch the single document of a given singleton type (e.g. 'oliveOilPage').
 * The body array preserves its authored order (the intended mobile order); body
 * images also keep their `asset` reference so urlFor() can apply transforms.
 */
export async function getSanitySingletonPage(
  type: string
): Promise<SanitySingletonPage | null> {
  const query = /* groq */ `*[_type == $type][0]{
    _id, title, subtitle,
    body[]{ ..., _type == "image" => { ..., "url": asset->url } }
  }`
  return client.fetch<SanitySingletonPage | null>(
    query,
    { type },
    {
      // The front end only ever serves published content; the CDN is safe here.
      perspective: 'published',
      useCdn: true,
    }
  )
}

/**
 * Transform a singleton page `body` into the template's ContentBlock[] shape.
 * Same logic as the article route's `toContentBlocks`; lives here so Olive Oil /
 * Residencies / About can reuse it. Order is preserved (it is the intended
 * mobile order); ContentPageTemplate splits text vs. image across the two panes
 * on desktop.
 */
export function pageBodyToContentBlocks(
  body?: SanityBodyItem[]
): ContentBlock[] {
  return (body ?? []).map((item): ContentBlock => {
    if (item._type === 'image') {
      const image = item as SanityImageBlock
      const url = image.asset
        ? urlFor(image).width(1600).url()
        : image.url ?? ''
      return {
        type: 'image',
        url,
        alt: image.alt ?? '',
        caption: image.caption,
        spacing: image.spacing,
      }
    }

    return {
      type: 'text',
      content: <SanityBlockText block={item as PortableTextBlock} />,
    }
  })
}
