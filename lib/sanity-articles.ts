import type { PortableTextBlock } from '@portabletext/types'
import { client } from '@/sanity/lib/client'

/**
 * A body image block. Mirrors the `image` member defined in the Article schema
 * (sanity/schemaTypes/article.ts): alt, caption, spacing, plus the resolved
 * asset url and the asset reference (kept so the urlFor() image helper can
 * apply hotspot/sizing transforms).
 */
export interface SanityImageBlock {
  _type: 'image'
  _key: string
  asset?: { _ref: string; _type: 'reference' }
  url?: string
  alt?: string
  caption?: string
  spacing?: 'compact' | 'normal' | 'spacious'
}

/** A single item in the Article `body` array: either Portable Text or an image. */
export type SanityBodyItem = PortableTextBlock | SanityImageBlock

export interface SanityArticle {
  _id: string
  title: string
  slug: string
  publishDate?: string
  author?: string
  entity?: 'stelle' | 'sogni'
  featuredImageUrl?: string
  audioUrl?: string
  body?: SanityBodyItem[]
}

/**
 * Fetch a single Article by its slug.
 *
 * The body array preserves its authored order (the intended mobile order).
 * Image and audio asset URLs are resolved in the query; body images also keep
 * their `asset` reference so the urlFor() helper can apply transforms.
 */
const ARTICLE_BY_SLUG_QUERY = /* groq */ `
  *[_type == "article" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    publishDate,
    author,
    entity,
    "featuredImageUrl": featuredImage.asset->url,
    "audioUrl": audio.asset->url,
    body[]{
      ...,
      _type == "image" => {
        ...,
        "url": asset->url
      }
    }
  }
`

export async function getSanityArticleBySlug(
  slug: string
): Promise<SanityArticle | null> {
  return client.fetch<SanityArticle | null>(
    ARTICLE_BY_SLUG_QUERY,
    { slug },
    {
      // DEV ONLY: include drafts so unpublished content renders while editing.
      // Reading drafts also requires a Sanity read token on the client; without
      // one, only published documents are returned.
      // TIGHTEN BEFORE PRODUCTION: switch perspective to 'published'.
      perspective: 'drafts',
      useCdn: false,
    }
  )
}
