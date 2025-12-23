import GridPageTemplate from '@/components/templates/GridPageTemplate'

// Sample featured articles (will be replaced with Sanity data later)
const sampleArticles = [
  {
    title: 'Last days of the harvest',
    slug: 'last-days-of-the-harvest',
    publishDate: '2024-11-15',
    featuredImage: '/images/azienda/article-1.jpg',
    entity: 'stelle' as const,
  },
  {
    title: 'Olive harvest stories',
    slug: 'olive-harvest-stories',
    publishDate: '2024-10-29',
    featuredImage: '/images/azienda/article-2.jpg',
    entity: 'stelle' as const,
  },
  {
    title: 'Our first wine harvest',
    slug: 'our-first-wine-harvest',
    publishDate: '2024-10-12',
    featuredImage: '/images/azienda/article-3.jpg',
    entity: 'stelle' as const,
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
    title: 'Wine',
    href: '/wine',
    snippet: 'Small-batch Montepulciano d\'Abruzzo, crafted with minimal intervention.',
  },
  {
    title: 'Olive oil',
    href: '/olive-oil',
    snippet: 'Single-varietal Dritta extra virgin olive oil from century-old trees.',
  },
]

export default function AziendaAgricolaPage() {
  return (
    <GridPageTemplate
      title="Azienda Agricola"
      tagline="At Sentieri, agriculture is a form of imagination."
      description={
        <>
          <p>
            Our small-batch wine and single-varietal extra virgin olive oil are expressions of
            place — guided by hand management, minimal intervention, and a deep respect for the
            cycles of the land. Every decision, from canopy care to soil health, is made with
            long-term balance in mind.
          </p>
          <p>
            We believe great food and wine begin in the field. Our work is guided by hand
            management and low-intervention practices: careful canopy and soil management, minimal
            machinery use, and decisions that prioritise long-term health over short-term yield.
          </p>
          <p>
            Our farm is also a place of exchange. Agriculture here is not only production — it is
            a way to gather knowledge, culture and craft. As the project grows, we will direct a
            portion of farm proceeds to fund local cultural projects and ecological restoration.
          </p>
        </>
      }
      featuredArticles={sampleArticles}
      productLinks={productLinks}
    />
  )
}
