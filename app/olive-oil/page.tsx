import ContentPageTemplate from '@/components/templates/ContentPageTemplate';

export default function OliveOilPage() {
  // Content from the design reference
  const content = (
    <>
      <p>
        Typical of the Vestina hills of Loreto Aprutino, Dritta is a traditional Abruzzese
        cultivar with deep local roots. Our trees – many over 100 years old – are tended
        with low-input, artisan care, respecting the ancient tradition of this land.
      </p>
      <p>
        We harvest by hand, mill the olives within hours of picking, and bottle small
        batches to protect the fresh aromas of Dritta. Our oil is characterised by the taste
        of our hills: crisp green bitterness, a round character and a lingering peppery finish
        on the back palate — a balance of vitality and calm.
      </p>
       <p>
        We harvest by hand, mill the olives within hours of picking, and bottle small
        batches to protect the fresh aromas of Dritta. Our oil is characterised by the taste
        of our hills: crisp green bitterness, a round character and a lingering peppery finish
        on the back palate — a balance of vitality and calm.
      </p>
       <p>
        We harvest by hand, mill the olives within hours of picking, and bottle small
        batches to protect the fresh aromas of Dritta. Our oil is characterised by the taste
        of our hills: crisp green bitterness, a round character and a lingering peppery finish
        on the back palate — a balance of vitality and calm.
      </p>
    </>
  );

  // Placeholder images (using Unsplash for now)
  const images = [
    {
      url: '/images/oliveOil/oliveOil-1.jpg',
      alt: 'Olive branches with green olives',
    },
    {
      url: '/images/oliveOil/oliveOil-2.jpg',
      alt: 'Olive oil bottle in olive grove',
    },
    {
      url: '/images/oliveOil/oliveOil-3.jpg',
      alt: 'Close-up of olives on tree',
    },
    {
      url: '/images/oliveOil/oliveOil-4.jpg',
      alt: 'Traditional olive oil pressing',
    },
  ];

  const productLinks = [
    {
      title: 'Shop',
      href: '/shop',
      snippet: 'Browse our selection of estate-grown olive oil and wine available for purchase.',
    },
    {
      title: 'Wine',
      href: '/wine',
      snippet: 'Small-batch Montepulciano d\'Abruzzo, crafted with minimal intervention. Click here to learn more.',
    },
  ];

  return (
    <ContentPageTemplate
      title="Olive oil"
      content={content}
      images={images}
      productLinks={productLinks}
    />
  );
}
