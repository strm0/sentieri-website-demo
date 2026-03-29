import GridPageTemplate from '@/components/templates/GridPageTemplate'

// Sample featured articles (will be replaced with Sanity data later)
const sampleArticles = [
  {
    title: 'Our Way Here',
    slug: 'our-way-here',
    publishDate: '2025-01-01',
    featuredImage: '/images/articles/our-way-here/our-way-here-5.jpg',
    entity: 'stelle' as const,
    author: 'Giulia Morlando',
    imagePosition: 'center 30%',
  },
  {
    title: 'Negotiating the Harvest',
    slug: 'negotiating-the-harvest',
    publishDate: '2025-01-01',
    featuredImage: '/images/articles/negotiating-the-harvest/negotiating-the-harvest-2.jpg',
    entity: 'stelle' as const,
    author: 'Jack Laing Aiken',
    imagePosition: 'center 80%',
  },
  {
    title: 'The Pace of Olives',
    slug: 'the-pace-of-olives',
    publishDate: '2025-01-01',
    featuredImage: '/images/articles/the-pace-of-olives/the-pace-of-olives-4.jpg',
    entity: 'stelle' as const,
    author: 'Jack Laing Aiken',
    imagePosition: 'center 60%',
  },
]

export default function AziendaAgricolaPage() {
  return (
    <GridPageTemplate
      title="Azienda Agricola"
      description={
        <>
          <p><em>Agriculture is a form of imagination.</em></p>

          <p>
            We see our azienda not as a factory for products, but as a site where relational
            thinking meets biological reality. Here, abstraction collapses into the soil, the
            weather, and the body. Our role is to witness and inhabit this complexity, moving away
            from the fantasy of control toward an ethics of participation. This is what we believe in:
          </p>

          <h2 className="subheader-l1">The Vitality of the Whole (Agroforestry)</h2>
          <p>
            Health cannot be isolated. Monocultures feel wrong to us both morally and ecologically.
            This is why we experiment with agroforestry, where vines and olive trees grow with
            diverse plants, trees, and wildlife. By mimicking a forest, each element supports
            another's vitality, forming a self-sustaining organism.
          </p>

          <h2 className="subheader-l1">The Ethics of Attention</h2>
          <p>
            We believe that responsibility comes from being part of things: a place, a community,
            and a web of consequences. Our small-batch wine and single-varietal olive oil are the
            results of this attention. We manage our fields by hand, accepting that "it depends" is
            the only honest response to the land.
          </p>

          <h2 className="subheader-l1">Low Intervention</h2>
          <p>
            We distrust solutions that feel too neat. In the cellar and the mill, we follow
            low-intervention practices that allow wine and oil to remain "unfinished" and alive,
            portable fragments of a specific time and a specific weather.
          </p>

          <h2 className="subheader-l1">Sufficiency Over Optimisation</h2>
          <p>
            "Enough" over "More". We have seen too many solutions create new problems by
            prioritising speed over stability. At Sentieri, we value long feedback loops. We
            prioritise the ongoing health of the soil and the community over short-term yields,
            choosing a path of sufficiency that respects the limits and the rhythm of the
            Mediterranean landscape.
          </p>

          <h2 className="subheader-l1">Landscape as a Living Laboratory<br />(Culture & Exchange)</h2>
          <p>
            The countryside should be a site of imagination and experimentation, not extraction.
            Sentieri is a social ecology where agricultural production fuels cultural research. By
            directing a portion of our proceeds to local artistic projects and ecological
            restoration, we want to ensure that our work continues to be a dialogue. In this
            open-ended project, human and non-human futures are entangled, working towards a
            durable and vibrant future.
          </p>
        </>
      }
      featuredArticles={sampleArticles}
    />
  )
}
