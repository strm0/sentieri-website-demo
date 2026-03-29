import ContentPageTemplate from '@/components/templates/ContentPageTemplate';
import { ContentBlock } from '@/lib/types';

export default function ResidenciesPage() {
  const blocks: ContentBlock[] = [
    { type: 'text', content: (
      <p>
        Sentieri di Sogni hosts artist and researcher residencies that explore the intersection of rural
        regeneration, ecological care, and creative practice. Our residencies offer time and space for
        deep work in a landscape shaped by tradition, agriculture, and collective imagination.
      </p>
    ) },
    { type: 'text', content: (
      <p>
        Residents work alongside our farming practices, engage with local communities, and participate
        in the rhythms of rural life. The program is designed to support projects that address themes of
        ecology, cultural heritage, food sovereignty, craft traditions, and the future of rural landscapes.
      </p>
    ) },
    { type: 'text', content: (
      <p>
        Each residency is tailored to the needs of the artist or researcher, with access to studio space,
        accommodation, and the surrounding landscape. We encourage experimental approaches that
        challenge conventional boundaries between art, research, agriculture, and community practice.
      </p>
    ) },
    { type: 'text', content: (
      <p>
        Residencies typically run between two weeks and three months, with opportunities for public
        presentations, workshops, or exhibitions. We welcome applications from artists, writers,
        researchers, designers, and practitioners working across disciplines who share our commitment
        to ecological and cultural regeneration.
      </p>
    ) },

    { type: 'image', url: '/images/residencies/residencies-1.jpg', alt: 'Sentieri farmhouse and surrounding landscape' },

    { type: 'image', url: '/images/residencies/residencies-2.jpg', alt: 'View across the land toward snow-capped mountains' },
    { type: 'image', url: '/images/residencies/residencies-3.jpg', alt: 'Shelter structure on the hillside at Sentieri' },

    { type: 'text', content: (
      <h2 className="subheader-l1">Residency projects</h2>
    ) },

    { type: 'text', content: (
      <>
        <h3 className="subheader-l2">Building as Communal Process</h3>
        <p style={{ fontStyle: 'italic', marginTop: '0px' }}>March–April 2026, August–September 2026</p>
      </>
    ) },
    { type: 'text', content: (
      <p>
        Over a series of residencies, the project seeks to re-establish the process of building as a communal
        activity, and a dialogue between residents, local craftspeople, and international participants in a
        collective construction process. Based on an analysis of the site, climate conditions, and long-term
        uses, the design emerged through dialogue and practical experimentation.
      </p>
    ) },
    { type: 'text', content: (
      <p>
        Practice-based research will focus on local materials such as clay and stone, testing and documenting
        different mixtures and techniques. The construction process will unfold through a series of workshops and
        residencies that combine professional expertise with collective learning. By reviving traditional forms of
        communal building, the project investigates sustainable and low-cost approaches to architecture. At the
        same time, it explores how spaces built collectively can foster care, responsibility, and a deeper sense of
        belonging to a place.
      </p>
    ) },

    { type: 'image', url: '/images/residencies/residencies-4.jpg', alt: 'Resident working with clay forms at a table' },
    { type: 'image', url: '/images/residencies/residencies-5.jpg', alt: 'Resident planting in the landscape' },

    { type: 'text', content: (
      <>
        <h3 className="subheader-l2">Ecological Alleys for Biodiversity</h3>
        <p style={{ fontStyle: 'italic', marginTop: '0px' }}>February 2026</p>
      </>
    ) },
    { type: 'text', content: (
      <p>
        During a month-long residency at Sentieri, ecologist and arborist Tobias Winkels designed and
        planted a living corridor dividing the frutteto from the neighbouring field. More than 600 locally
        adapted trees, shrubs, and herbaceous plants were introduced to create a layered habitat within
        the cultivated landscape.
      </p>
    ) },
    { type: 'text', content: (
      <p>
        Over time, the alley will shelter insects, birds, and pollinators while improving soil health and
        microclimate. As it grows, it becomes both ecological infrastructure and a long-term experiment
        in biodiversity regeneration, a living element of the farm that future residents will observe, study,
        and build upon.
      </p>
    ) },

    { type: 'text', content: (
      <>
        <h3 className="subheader-l2">Infrastructure Comunale – Leštnice Collective</h3>
        <p style={{ fontStyle: 'italic', marginTop: '0px' }}>April 2025</p>
      </>
    ) },
    { type: 'text', content: (
      <p>
        In 2025, Sentieri hosted the Czech collective Leštnice for a residency exploring social
        architecture and communal infrastructure in a rural context. Through discussions, shared work,
        and walking the land as a research method, participants studied the spatial relationships
        between the farmhouse, fields, water sources, and the wider territory. The residency explored
        how agricultural spaces and existing buildings could gradually evolve into infrastructure for
        gatherings and residencies while maintaining their farming function.
      </p>
    ) },

    { type: 'image', url: '/images/residencies/residencies-6.jpg', alt: 'Tent and garden terraces on the hillside' },

    { type: 'text', content: (
      <>
        <h3 className="subheader-l2">Walking the tratturi – Habitat Broadcast</h3>
        <p style={{ fontStyle: 'italic', marginTop: '0px' }}>April–May 2027</p>
      </>
    ) },
    { type: 'text', content: (
      <p>
        'Walking the tratturi' is part of Habitat Broadcast, a three-year programme developed with
        Leštnice for the Budweis (ECoC) project exploring rural territories as sites of cultural
        exchange. At Sentieri, residents engage with the surrounding agricultural landscape through
        walking, research, and conversations with local farmers and residents, contributing stories
        and reflections from the territory. These materials are shared through collaborative radio
        broadcasts produced from the Maringotka 2.0, a small mobile structure that functions as a
        temporary radio station and gathering space, creating a versatile community hub that can
        be set up in rural environments where such spaces are often missing.
      </p>
    ) },

    { type: 'image', url: '/images/residencies/residencies-7.jpg', alt: 'Resident working closely at a table' },

    { type: 'text', content: (
      <h2 className="subheader-l1">Previous Residents</h2>
    ) },
    { type: 'text', content: (
      <div>
        {[
          { name: 'Marius Houschyar', title: 'Music and Graphic Design', city: 'Athens, GR' },
          { name: 'Anna Hokešová', title: 'Sound Designer and Musician', city: 'Prague, CZ' },
          { name: 'Hanne Jannasch', title: 'Visual Artist', city: 'Vienna, AT' },
          { name: 'Jasper Riehm', title: 'Living Architecture and Chef', city: 'Amsterdam, NL' },
          { name: 'Gabriela Soikova', title: 'Multispecies Designer', city: 'Pilsen, CZ' },
          { name: 'Anouk Van Wijk', title: 'Visual Artist', city: 'Amsterdam, NL' },
          { name: 'Marta Pagliuca Pelacani', title: 'PhD Researcher, University College Cork', city: 'Pescara, IT' },
          { name: 'Rebecca Douglas', title: 'MA Artistic Research', city: 'Newcastle, UK' },
          { name: 'Richard Weaver', title: 'Digital Artist', city: 'Birmingham, UK' },
          { name: 'Paul Philips', title: 'Residency Space Coordinator', city: 'Byron Bay, AU' },
          { name: 'Iulia Ionesi', title: 'MA Artistic Research', city: 'Amsterdam, NL' },
          { name: 'Harry Reddick', title: 'Sound Artist', city: 'Bristol, UK' },
          { name: 'Claire Wymer', title: 'Visual Artist', city: 'Como, IT' },
          { name: 'Maria Isidora Vincentelli', title: 'Dancer', city: 'Athens, GR' },
          { name: 'Nikolas Prokop', title: 'Multidisciplinary Artist', city: 'Prague, CZ' },
          { name: 'Barbara Gabová', title: 'Food and Visual Art', city: 'Prague, CZ' },
          { name: 'Max Jardine', title: 'Permaculture Design', city: 'Melbourne, AU' },
          { name: 'Tobias Winkels', title: 'Arboriculture and Ecology', city: 'Prague, CZ' },
          { name: 'Dennis Nientimp', title: 'PhD Environmental & Social Psychology', city: 'Groningen, NL' },
          { name: 'Emma Bareman', title: 'Art Therapist', city: 'Groningen, NL' },
          { name: 'Oscar Ström', title: 'Creative Technologist', city: 'Stockholm, SE' },
          { name: 'Nima Emami', title: 'Visual Artist', city: 'Dresden, DE' },
        ].map((r, i) => (
          <div key={i} style={{ marginBottom: '28px' }}>
            <p style={{ fontWeight: 600, marginBottom: '2px' }}>{r.name}</p>
            <p style={{ fontSize: '0.85em', opacity: 0.7, marginBottom: '0px', lineHeight: '1.4' }}>{r.title}</p>
            <p style={{ fontSize: '0.85em', opacity: 0.7, marginBottom: '0px', lineHeight: '1.4' }}>{r.city}</p>
          </div>
        ))}
      </div>
    ) },
  ];

  return (
    <ContentPageTemplate
      title="Residencies"
      blocks={blocks}
      mirrored={true}
    />
  );
}
