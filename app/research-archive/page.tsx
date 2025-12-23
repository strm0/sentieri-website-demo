import GridPageTemplate from '@/components/templates/GridPageTemplate'

// Combined articles from both agricultural and cultural entities
const allArticles = [
  // Associazione Culturale articles (sogni)
  {
    title: 'Residencies: tools for rural regeneration',
    slug: 'residencies-rural-regeneration',
    publishDate: '2024-11-20',
    featuredImage: '/images/culturale/culturale-1.jpg',
    entity: 'sogni' as const,
  },
  {
    title: 'Last days of the harvest',
    slug: 'last-days-of-the-harvest',
    publishDate: '2024-11-15',
    featuredImage: '/images/azienda/article-1.jpg',
    entity: 'stelle' as const,
  },
  {
    title: 'Reforestation workshop',
    slug: 'reforestation-workshop',
    publishDate: '2024-11-05',
    featuredImage: '/images/culturale/culturale-2.jpg',
    entity: 'sogni' as const,
  },
  {
    title: 'Olive harvest stories',
    slug: 'olive-harvest-stories',
    publishDate: '2024-10-29',
    featuredImage: '/images/azienda/article-2.jpg',
    entity: 'stelle' as const,
  },
  {
    title: 'Cultural heritage in a changing landscape',
    slug: 'cultural-heritage-landscape',
    publishDate: '2024-10-18',
    featuredImage: '/images/culturale/culturale-3.jpg',
    entity: 'sogni' as const,
  },
  {
    title: 'Our first wine harvest',
    slug: 'our-first-wine-harvest',
    publishDate: '2024-10-12',
    featuredImage: '/images/azienda/article-3.jpg',
    entity: 'stelle' as const,
  },
  {
    title: 'Art, ecology, and collective imagination',
    slug: 'herbal-self-production-workshop',
    publishDate: '2024-09-30',
    featuredImage: '/images/culturale/culturale-4.jpg',
    entity: 'sogni' as const,
  },
  {
    title: 'Visits from friends and family',
    slug: 'visits-from-friends-and-family',
    publishDate: '2024-09-28',
    featuredImage: '/images/azienda/article-4.jpg',
    entity: 'stelle' as const,
  },
]

const productLinks = [
  {
    title: 'Residencies',
    href: '/residencies',
    snippet: 'Artist and researcher residencies that explore rural imagination and ecological care.',
  },
  {
    title: 'About us',
    href: '/about',
    snippet: 'Learn more about our vision, values, and the people behind Sentieri.',
  },
]

export default function ResearchArchivePage() {
  return (
    <GridPageTemplate
      title="Research Archive"
      tagline="A collection of stories, research, and reflections from both our agricultural and cultural work."
      description={
        <>
          <p>
            The Research Archive brings together writings, documentation, and reflections from
            across our agricultural and cultural activities. Here you'll find stories from the
            field, workshop reports, artistic research, and collaborative experiments that span
            both Sentieri di Stelle and Sentieri di Sogni.
          </p>
          <p>
            This archive is a living resource — a place to trace the evolving relationship between
            land stewardship, cultural practice, and collective imagination. Each piece reflects
            our commitment to sharing knowledge, fostering exchange, and documenting the ongoing
            work of rural regeneration.
          </p>
        </>
      }
      featuredArticles={allArticles}
      productLinks={productLinks}
      scrollable={true}
      mirrored={true}
    />
  )
}
