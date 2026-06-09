import ContentPageTemplate from '@/components/templates/ContentPageTemplate';

export default function WinePage() {

  const content = (
    <>
      <p>
        We always hear that wine is shaped in the field long before it reaches the cellar, but
        what does it actually mean? For us it means that viticulture is not a technical step
        before "real winemaking" begins, it is in fact the foundation. The choices made among the
        vines, across seasons, determine everything that follows. Sentieri wine is not something
        constructed later, but something revealed slowly through attention and restraint.
      </p>

      <h2 className="subheader-l1">Terroir</h2>
      <p>
        Sentieri is located in Loreto Aprutino, in the Vestina areas of Abruzzo, where vineyards
        and olive groves have moulded the terrain for generations. Our vines grow in clay-rich,
        dense, mineral soils that hold both water and structure through the dry Mediterranean
        summer. These heavy soils give our Montepulciano d'Abruzzo its depth and tension,
        yielding wines with gravity, concentration, and a distinct sense of place.
      </p>

      <h2 className="subheader-l1">Viticulture</h2>
      <p>
        Our approach in the vineyard is guided by hand management and long-term health rather
        than short-term yield. We work with minimal machinery, careful canopy decisions, and
        practices that support balance in the vines and vitality in the soil.
      </p>
      <p>
        The vineyard is not treated as a monoculture factory, but as part of a wider living
        system. Spontaneous plants, insects, weather shifts, and soil life are treated as signals
        that determine how we respond. Each season teaches us something different, and the work
        is always relational: between vine, land, and time.
      </p>

      <h2 className="subheader-l1">Harvest</h2>
      <p>
        Harvest is done entirely by hand, in two distinct moments. The first picking happens
        earlier, preserving freshness and lift for our Vino Rosato. The second comes later, at
        full maturity, when the grapes are ready to express the deeper, more grounded character
        of our Vino Rosso.
      </p>
      <p>
        These are not just technical decisions, but ways of listening to the rhythm of the year,
        allowing the different expressions of Montepulciano to emerge from the same landscape.
      </p>

      <h2 className="subheader-l1">Vinification</h2>
      <p>
        In the cellar, our philosophy is simple: wine should remain wine. We let a spontaneous
        fermentation happen, the grapes are gently pressed and left to ferment with minimal
        interference. We do not pursue heavy extraction or engineered consistency. Instead, we
        practice a low-intervention approach which respects what the season has already written
        into the fruit.
      </p>
      <p>
        We use only small, careful additions when necessary, prioritising stability without
        erasing character. The goal is not to impose a style, but to preserve the authenticity
        of the year's harvest.
      </p>
    </>
  );

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
  ];

  return (
    <ContentPageTemplate
      title="Wine"
      content={content}
      images={images}
    />
  );
}
