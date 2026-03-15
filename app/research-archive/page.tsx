import GridPageTemplate from '@/components/templates/GridPageTemplate'


const allArticles = [
  {
    title: 'Residencies: tools for rural regeneration',
    slug: 'residencies-rural-regeneration',
    publishDate: '2024-11-20',
    featuredImage: '/images/culturale/culturale-1.jpg',
    entity: 'sogni' as const,
    author: 'Giulia Morlando',
  },
  {
    title: 'A walk from Elsewhere',
    slug: 'a-walk-from-elsewhere',
    publishDate: '2025-01-15',
    featuredImage: '/images/azienda/article-1.jpg',
    entity: 'stelle' as const,
    author: 'Giulia Morlando',
  },
  {
    title: 'Reforestation workshop',
    slug: 'reforestation-workshop',
    publishDate: '2024-11-05',
    featuredImage: '/images/culturale/culturale-2.jpg',
    entity: 'sogni' as const,
    author: 'Jack Lain Aiken',
  },
  {
    title: 'Negotiating the Harvest',
    slug: 'negotiating-the-harvest',
    publishDate: '2025-01-10',
    featuredImage: '/images/azienda/article-2.jpg',
    entity: 'stelle' as const,
    author: 'Jack Lain Aiken',
  },
  {
    title: 'Cultural heritage in a changing landscape',
    slug: 'cultural-heritage-landscape',
    publishDate: '2024-10-18',
    featuredImage: '/images/culturale/culturale-3.jpg',
    entity: 'sogni' as const,
    author: 'Giulia Morlando',
  },
  {
    title: 'Our first wine harvest',
    slug: 'our-first-wine-harvest',
    publishDate: '2024-10-12',
    featuredImage: '/images/azienda/article-3.jpg',
    entity: 'stelle' as const,
    author: 'Oscar Ström',
  },
  {
    title: 'Art, ecology, and collective imagination',
    slug: 'herbal-self-production-workshop',
    publishDate: '2024-09-30',
    featuredImage: '/images/culturale/culturale-4.jpg',
    entity: 'sogni' as const,
    author: 'Oscar Ström',
  },
  {
    title: 'Visits from friends and family',
    slug: 'visits-from-friends-and-family',
    publishDate: '2024-09-28',
    featuredImage: '/images/azienda/article-4.jpg',
    entity: 'stelle' as const,
    author: 'Oscar Ström',
  },
]

export default function ResearchArchivePage() {
  return (
    <GridPageTemplate
      title="Archive"
      description={
        <>
          <p>
            The Archive brings together writings, documentation, and reflections from
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
      mirrored={true}
    />
  )
}
