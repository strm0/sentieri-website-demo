import ContentPageTemplate from '@/components/templates/ContentPageTemplate';

export default function ResidenciesPage() {
  const content = (
    <>
      <p>
        Sentieri di Sogni hosts artist and researcher residencies that explore the intersection
        of rural regeneration, ecological care, and creative practice. Our residencies offer time
        and space for deep work in a landscape shaped by tradition, agriculture, and collective
        imagination.
      </p>
      <p>
        Residents work alongside our farming practices, engage with local communities, and
        participate in the rhythms of rural life. The program is designed to support projects
        that address themes of ecology, cultural heritage, food sovereignty, craft traditions,
        and the future of rural landscapes.
      </p>
      <p>
        Each residency is tailored to the needs of the artist or researcher, with access to
        studio space, accommodation, and the surrounding landscape. We encourage experimental
        approaches that challenge conventional boundaries between art, research, agriculture,
        and community practice.
      </p>
      <p>
        Residencies typically run between two weeks and three months, with opportunities for
        public presentations, workshops, or exhibitions. We welcome applications from artists,
        writers, researchers, designers, and practitioners working across disciplines who share
        our commitment to ecological and cultural regeneration.
      </p>
    </>
  );

  // Placeholder images
  const images = [
    {
      url: '/images/residencies/residency-1.jpg',
      alt: 'Artist working in studio space',
    },
    {
      url: '/images/residencies/residency-2.jpg',
      alt: 'Residency participants in landscape',
    },
    {
      url: '/images/residencies/residency-3.jpg',
      alt: 'Workshop gathering',
    },
    {
      url: '/images/residencies/residency-4.jpg',
      alt: 'Evening discussion at Sentieri',
    },
  ];

  const productLinks = [
    {
      title: 'Research Archive',
      href: '/research-archive',
      snippet: 'Explore documentation and reflections from our agricultural and cultural work.',
    },
    {
      title: 'About us',
      href: '/about',
      snippet: 'Learn more about our vision, values, and the people behind Sentieri.',
    },
  ];

  return (
    <ContentPageTemplate
      title="Residencies"
      content={content}
      images={images}
      productLinks={productLinks}
      mirrored={true}
    />
  );
}
