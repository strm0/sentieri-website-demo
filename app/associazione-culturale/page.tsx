import GridPageTemplate from '@/components/templates/GridPageTemplate'

// Sample featured articles (will be replaced with Sanity data later)
const sampleArticles = [
  {
    title: 'A Walk from Elsewhere',
    slug: 'a-walk-from-elsewhere',
    publishDate: '2025-01-15',
    featuredImage: '/images/articles/a-walk-from-elsewhere/Walk_with_image-5.jpg',
    entity: 'sogni' as const,
    author: 'Giulia Morlando',
  },
  {
    title: 'A Case for Fertile Grounds',
    slug: 'a-case-for-fertile-grounds',
    publishDate: '2025-02-01',
    featuredImage: '/images/articles/a-case-for-fertile-ground/a_case_for_fertile_ground-2.jpg',
    entity: 'sogni' as const,
    author: 'Rebecca Douglass',
    imagePosition: 'center 15%',
  },
  {
    title: 'The Dining Table',
    slug: 'the-dining-table',
    publishDate: '2025-03-01',
    featuredImage: '/images/articles/the-dining-table/the-dining-table-1.jpg',
    entity: 'sogni' as const,
    author: 'Rebecca Douglass',
  },
]

export default function AssociazioneCulturalePage() {
  return (
    <GridPageTemplate
      title={<>Associa<br />zione<br />Culturale</>}
      description={
        <>
          <p><em>A site of imagination, belonging, and experimentation.</em></p>

          <p>
            The cultural association is the &ldquo;imagination&rdquo; of the farm. We see the countryside as
            an active site of research, moving beyond a static observational perspective. Sentieri
            di Sogni is a social ecology where artists, researchers, and the local community gather
            to inhabit the tension between land cultivation and artistic creativity. This is what we practice:
          </p>


          <h3 className="subheader-l2">Social Ecology &amp; Encounter</h3>
          <p>
            We create space for a kind of ethical emplacement. With this, we mean that, through
            sharing meals, workshops, and agricultural labour, our residents (both permanent and
            passing through) can feel rooted in a sense of place whilst still being &ldquo;from
            somewhere&rdquo;. From &ldquo;Long-Table&rdquo; harvest lunches to open-air symposiums, we hope to
            create shared experiences that make the barriers between the urban and the rural more
            porous.
          </p>

          <h3 className="subheader-l2">Artistic Research as Inquiry, Residents and Experiments</h3>
          <p>
            By inviting artists and thinkers to engage with the farm, we move past aesthetics
            into &ldquo;lived practice.&rdquo; Our residencies do not seek finished works; they try to
            witness moments in which human imagination encounters weather, soil, and non-human
            lives.
          </p>

          <h3 className="subheader-l2">Living Heritage</h3>
          <p>
            We reject the idea that rural life is an artefact of the past. Preservation is not
            about stopping time; it is about ensuring that local memory remains a living, adapting
            force. We hope to revitalise heritage by making it a site of experimentation, making
            sure that tradition is a dialogue with the future, not a retreat from it. We focus our
            programming on heritage skills from traditional clay uses to forgotten fermentation
            techniques, revitalised and reshaped for our continuously evolving context.
          </p>

          <h3 className="subheader-l2">Multi-Species Alliances</h3>
          <p>
            We work to restore the continuity between the vineyard and the wild, understanding
            that our future is entangled with the futures of the insects, trees, and soil microbes.
            This is when &ldquo;care beyond the human&rdquo; becomes real, combining ecological restoration
            with education and collective action.
          </p>

          <h3 className="subheader-l2">The Circular Promise</h3>
          <p>
            Sentieri is an integrated system. We don&rsquo;t separate our agricultural production from
            our creative ambitions. To ensure this research remains independent and rooted, a
            portion of the proceeds from our wine and olive oil production is directly funnelled
            back into the association to fund these programs.
          </p>
        </>
      }
      featuredArticles={sampleArticles}
      mirrored={true}
    />
  )
}
