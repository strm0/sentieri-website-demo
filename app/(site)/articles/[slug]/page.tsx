import ContentPageTemplate from '@/components/templates/ContentPageTemplate'
import SanityBlockText from '@/components/article/SanityBlockText'
import { getArticleBySlug, getEntityBySlug } from '@/lib/articles'
import {
  getSanityArticleBySlug,
  type SanityArticle,
  type SanityImageBlock,
} from '@/lib/sanity-articles'
import { urlFor } from '@/sanity/lib/image'
import type { ContentBlock } from '@/lib/types'
import type { PortableTextBlock } from '@portabletext/types'

// ISR: revalidate published Sanity content every 60s so edits appear in production.
export const revalidate = 60

function formatSlug(slug: string): string {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

/**
 * Transform a Sanity Article `body` into the template's ContentBlock[] shape.
 * Order is preserved (it is the intended mobile order); ContentPageTemplate
 * splits text vs. image members across the two panes on desktop.
 */
function toContentBlocks(article: SanityArticle): ContentBlock[] {
  return (article.body ?? []).map((item): ContentBlock => {
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

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  // 1. Prefer content from Sanity.
  const sanityArticle = await getSanityArticleBySlug(slug)

  if (sanityArticle) {
    return (
      <ContentPageTemplate
        title={sanityArticle.title}
        blocks={toContentBlocks(sanityArticle)}
        mirrored={sanityArticle.entity === 'sogni'}
        audioSrc={sanityArticle.audioUrl}
      />
    )
  }

  // 2. Fallback: hardcoded data in lib/articles (to be migrated to Sanity later).
  const article = getArticleBySlug(slug)

  if (article) {
    return (
      <ContentPageTemplate
        title={article.title}
        blocks={article.blocks}
        content={article.content}
        images={article.images}
        mirrored={article.entity === 'sogni'}
        audioSrc={article.audioSrc}
      />
    )
  }

  // 3. Final fallback for slugs not found in either source.
  const title = formatSlug(slug)

  const content = (
    <>
      <p>
        This article explores the evolving relationship between land stewardship, cultural
        practice, and collective imagination at Sentieri. Situated among the vineyards, olive
        groves, and rolling hills of Loreto Aprutino, our work bridges regenerative agriculture
        and artistic research.
      </p>
      <p>
        Through careful observation and hands-on experimentation, we are learning to read the
        rhythms of the land — the slow accumulation of organic matter in the soil, the seasonal
        migration of pollinators, the quiet resilience of century-old olive trees. Each of these
        encounters shapes how we think about care, time, and interdependence.
      </p>
      <p>
        The archive is a living resource — a place to trace connections between field notes,
        workshop reflections, and artistic documentation. We share these writings as invitations
        to think alongside us, whether you are a farmer, an artist, a researcher, or simply
        someone drawn to the idea that rural landscapes hold vital knowledge for the future.
      </p>
    </>
  )

  const images = [
    { url: '/images/azienda/article-1.jpg', alt: 'Sentieri landscape' },
    { url: '/images/azienda/article-2.jpg', alt: 'Field work at Sentieri' },
    { url: '/images/culturale/culturale-1.jpg', alt: 'Cultural activity' },
  ]

  return (
    <ContentPageTemplate
      title={title}
      content={content}
      images={images}
      mirrored={getEntityBySlug(slug) === 'sogni'}
    />
  )
}
