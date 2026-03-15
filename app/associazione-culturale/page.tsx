import GridPageTemplate from '@/components/templates/GridPageTemplate'

// Sample featured articles (will be replaced with Sanity data later)
const sampleArticles = [
  {
    title: 'Residencies: tools for rural regeneration',
    slug: 'residencies-rural-regeneration',
    publishDate: '2024-11-20',
    featuredImage: '/images/culturale/culturale-1.jpg',
    entity: 'sogni' as const,
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
    title: 'Cultural heritage in a changing landscape',
    slug: 'cultural-heritage-landscape',
    publishDate: '2024-10-18',
    featuredImage: '/images/culturale/culturale-3.jpg',
    entity: 'sogni' as const,
    author: 'Giulia Morlando',
  },
  {
    title: 'Art, ecology, and collective imagination',
    slug: 'herbal-self-production-workshop',
    publishDate: '2024-09-30',
    featuredImage: '/images/culturale/culturale-4.jpg',
    entity: 'sogni' as const,
    author: 'Oscar Ström',
  },
]

export default function AssociazioneCulturalePage() {
  return (
    <GridPageTemplate
      title="Associazione Culturale"
      description={
        <>
          <p>
            The cultural association Sentieri di Sogni nurtures the cultural, ecological, and
            social life that allows a landscape to regenerate and thrive. Through residencies,
            workshops, and events, Sentieri di Sogni brings together artists, researchers, and
            local communities — rooted in the local landscape yet connected to an international
            network — to cultivate a more resilient and imaginative relationship with the rural
            world.
          </p>
          <p>
            Sentieri is not only about the land we inhabit, but about the wider network of
            relations, human and more-than-human, that sustain us. We believe that rural areas,
            often seen as peripheral, hold vital knowledge and potential for new ways of living
            and imagining together.
          </p>
          <p>
            To ensure independence and continuity, 10% of our farm's annual sales go directly
            into the association, funding projects that foster collective care, artistic
            experimentation, and ecological resilience.
          </p>
        </>
      }
      featuredArticles={sampleArticles}
      mirrored={true}
    />
  )
}
