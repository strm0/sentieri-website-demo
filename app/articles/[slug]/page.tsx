import ContentPageTemplate from '@/components/templates/ContentPageTemplate'

function formatSlug(slug: string): string {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const title = formatSlug(slug)

  // Placeholder content — will be replaced with Sanity CMS data
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

  // Placeholder images
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
    />
  )
}
