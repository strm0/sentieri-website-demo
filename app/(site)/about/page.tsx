import ContentPageTemplate from '@/components/templates/ContentPageTemplate';
import { ContentBlock } from '@/lib/types';

export default function AboutPage() {
  const blocks: ContentBlock[] = [
    { type: 'image', url: '/images/aboutUs/about-us-1.jpg', alt: 'Sentieri farmhouse with mountains in the background' },

    { type: 'text', content: (
      <p>
        Sentieri is a rural regeneration project in Abruzzo, Italy, bringing together
        ecological farming and cultural practice. We cultivate olive groves and
        vineyards while hosting artist residencies, workshops, and collaborative
        research that explores new ways of living with the land.
      </p>
    ) },
    { type: 'text', content: (
      <p>
        The project consists of two interconnected entities: Sentieri di Stelle, our
        agricultural enterprise producing wine and olive oil, and Sentieri di Sogni, a
        cultural association that nurtures artistic and ecological imagination through
        residencies and public programs.
      </p>
    ) },
    { type: 'text', content: (
      <p>
        We believe that rural areas hold vital knowledge for navigating the
        challenges of our time. Through careful stewardship of the land and
        support for creative experimentation, we work to build resilient communities
        and reimagine our relationship with the more-than-human world.
      </p>
    ) },
    { type: 'text', content: (
      <p>
        Our work is supported by a direct connection between agriculture and
        culture: 10% of annual farm sales fund the cultural association, ensuring
        independence and long-term sustainability for both projects.
      </p>
    ) },

    { type: 'image', url: '/images/aboutUs/about-us-2.jpg', alt: 'Team working together in the field' },

    { type: 'text', content: (
      <h2 className="subheader-l1">Team</h2>
    ) },
    { type: 'text', content: (
      <div>
        {[
          { name: 'Giulia Morlando (co-founder)', title: 'Curator and Cultural Organiser', text: 'Working at the intersection of rural contexts, artistic research, and collective practice.' },
          { name: 'Jack Laing Aiken (co-founder)', title: 'Agroecology and Land Steward', text: 'Responsible for the agricultural development of Sentieri, focusing on regenerative land management and ecological farming practices.' },
          { name: 'Ondřej Novák', title: null, text: 'Chef and land management contributing to farm operations, land stewardship, and food-related activities that connect agricultural practice with communal life at Sentieri.' },
        ].map((member, i) => (
          <div key={i} style={{ marginBottom: '28px' }}>
            <p style={{ fontWeight: 600, marginBottom: '2px' }}>{member.name}</p>
            {member.title && <p style={{ fontSize: '0.85em', opacity: 0.7, marginBottom: '0px', lineHeight: '1.4' }}>{member.title}</p>}
            <p style={{ fontSize: '0.85em', opacity: 0.7, marginBottom: '0px', lineHeight: '1.4' }}>{member.text}</p>
          </div>
        ))}
      </div>
    ) },

    { type: 'image', url: '/images/aboutUs/about-us-3.jpg', alt: 'Sentieri farmhouse on the hillside at dusk' },
    { type: 'image', url: '/images/aboutUs/about-us-4.jpg', alt: 'Dirt path winding through the olive grove' },
  ];

  return (
    <ContentPageTemplate
      title="About us"
      blocks={blocks}
      mirrored={true}
    />
  );
}
