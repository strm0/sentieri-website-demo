import ContentPageTemplate from '@/components/templates/ContentPageTemplate';
import { getSanitySingletonPage, pageBodyToContentBlocks } from '@/lib/sanity-pages';

// ISR: revalidate published Sanity content every 60s so edits appear in production.
export const revalidate = 60;

export default async function OliveOilPage() {
  // 1. Prefer content from Sanity (the oliveOilPage singleton).
  const page = await getSanitySingletonPage('oliveOilPage');

  if (page) {
    return (
      <ContentPageTemplate
        title={page.title}
        subtitle={page.subtitle}
        blocks={pageBodyToContentBlocks(page.body)}
      />
    );
  }

  // 2. Fallback: the original hardcoded Olive Oil content, kept inline so any
  //    Sanity hiccup leaves the page rendering exactly as it did before.
  const content = (
    <>
      <p>
        Typical of the Vestina hills around Loreto Aprutino, Dritta is a traditional Abruzzese
        cultivar that has grown within this landscape for generations. Many of our trees are over
        one hundred years old, defined by soil, exposure, and long familiarity with place rather
        than by yield-driven design.
      </p>
      <p>
        We harvest by hand, moving attentively through the groves in small groups. Decisions are
        made tree by tree, guided by ripeness, weather, and ground conditions. The harvest is a
        collective moment, honoring the collective nature of this practice.
      </p>
      <p>
        Within hours of picking, olives are pressed at a net-zero emissions mill in Pianella,
        chosen to extend our approach beyond the field. Milling happens cold, without
        interventions, letting oil express the season, not a standard product.
      </p>
      <p>
        We bottle in small batches to stay close to the oil as it develops. Dritta produces an
        oil with a clear profile: fresh green pepperiness, a rounded body, and a persistent
        bright finish. It reflects the balance we aim for in the field, a balance between
        something <em>forte e gentile</em>.
      </p>
    </>
  );

  const images = [
    {
      url: '/images/oliveOil/olive-oil-1.jpg',
      alt: 'Olive branches with green olives',
    },
    {
      url: '/images/oliveOil/olive-oil-2.jpg',
      alt: 'Olive oil bottle in olive grove',
    },
    {
      url: '/images/oliveOil/olive-oil-3.jpg',
      alt: 'Close-up of olives on tree',
    },
    {
      url: '/images/oliveOil/olive-oil-4.jpg',
      alt: 'Traditional olive oil pressing',
    },
    {
      url: '/images/oliveOil/olive-oil-5.jpg',
      alt: 'Olive oil production',
    },
  ];

  return (
    <ContentPageTemplate
      title="Olive oil"
      content={content}
      images={images}
    />
  );
}
