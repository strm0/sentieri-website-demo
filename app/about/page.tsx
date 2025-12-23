import ContentPageTemplate from '@/components/templates/ContentPageTemplate';

export default function AboutPage() {
  const content = (
    <>
      <p>
        Maybe it's time to have a little photoshoot highlighting you guys, since I couldn't find any pictures at Sentieri of the young farmercouple -oscar
      </p>
      <p>
        Sentieri is a rural regeneration project in Abruzzo, Italy, bringing together ecological
        farming and cultural practice. We cultivate olive groves and vineyards while hosting
        artist residencies, workshops, and collaborative research that explores new ways of
        living with the land.
      </p>
      <p>
        The project consists of two interconnected entities: Sentieri di Stelle, our agricultural
        enterprise producing wine and olive oil, and Sentieri di Sogni, a cultural association
        that nurtures artistic and ecological imagination through residencies and public programs.
      </p>
      <p>
        We believe that rural areas hold vital knowledge for navigating the challenges of our
        time. Through careful stewardship of the land and support for creative experimentation,
        we work to build resilient communities and reimagine our relationship with the more-than-human
        world.
      </p>
      <p>
        Our work is supported by a direct connection between agriculture and culture: 10% of
        annual farm sales fund the cultural association, ensuring independence and long-term
        sustainability for both projects.
      </p>
    </>
  );

  // Placeholder images
  const images = [
    {
      url: '/images/aboutUs/aboutUs-1.jpg',
      alt: 'The Sentieri landscape',
    },
    {
      url: '/images/aboutUs/aboutUs-2.jpg',
      alt: 'Working in the olive groves',
    },
    {
      url: '/images/aboutUs/aboutUs-3.jpg',
      alt: 'Community gathering at Sentieri',
    },
    {
      url: '/images/aboutUs/aboutUs-4.jpg',
      alt: 'View of the vineyard',
    },
    {
      url: '/images/aboutUs/aboutUs-5.jpg',
      alt: 'View of the vineyard',
    },
  ];

  const productLinks = [
    {
      title: 'Residencies',
      href: '/residencies',
      snippet: 'Artist and researcher residencies that explore rural imagination and ecological care.',
    },
    {
      title: 'Research Archive',
      href: '/research-archive',
      snippet: 'Explore documentation and reflections from our agricultural and cultural work.',
    },
  ];

  return (
    <ContentPageTemplate
      title="About us"
      content={content}
      images={images}
      productLinks={productLinks}
      mirrored={true}
    />
  );
}
