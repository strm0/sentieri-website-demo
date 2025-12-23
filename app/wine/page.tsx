import ContentPageTemplate from '@/components/templates/ContentPageTemplate';

export default function WinePage() {
  // Content from the PDF
  const content = (
    <>
      <p>
        We believe that wine is made in the field long before it even reaches the cellar.
        We cultivate Montepulciano d'Abruzzo, a grape that feels inseparable from the hills
        that surround Loreto Aprutino. Its roots reach into heavy clay, drawing out strength
        and depth that reflect this environment.
      </p>
      <p>
        The harvest is done by hand in two batches: the first round is completed early to
        preserve the fresh character of our Vino Rosato, while the second is completed at
        full maturity for our bold, balanced Vino Rosso. In the cellar, the grapes are
        simply pressed and left to ferment with minimal interference. As a result, our wine
        is a living expression of the year that shaped it – every bottle expresses the life
        of the soil, the balance of the vines, and the rhythm of the seasons.
      </p>
    </>
  );

  // Placeholder images for wine page
  const images = [
    {
      url: '/images/wine/wine-1.jpg',
      alt: 'Montepulciano d\'Abruzzo grapes on the vine',
    },
    {
      url: '/images/wine/wine-2.jpg',
      alt: 'Wine bottles in the vineyard',
    },
    {
      url: '/images/wine/wine-3.jpg',
      alt: 'Vineyard landscape in Loreto Aprutino',
    },
    {
      url: '/images/wine/wine-4.jpg',
      alt: 'Hand-harvesting grapes',
    },
    {
      url: '/images/wine/wine-5.jpg',
      alt: 'Hand-harvesting grapes',
    },
    
  ];

  const productLinks = [
    {
      title: 'Shop',
      href: '/shop',
      snippet: 'Browse our selection of estate-grown olive oil and wine available for purchase.',
    },
    {
      title: 'Olive oil',
      href: '/olive-oil',
      snippet: 'Single-varietal Dritta extra virgin olive oil from century-old trees. Click here to learn more.',
    },
  ];

  return (
    <ContentPageTemplate
      title="Wine"
      content={content}
      images={images}
      productLinks={productLinks}
    />
  );
}
