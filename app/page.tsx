import LandingPageTemplate from '@/components/templates/LandingPageTemplate'

export default function Home() {
  return (
    <LandingPageTemplate
      heroImage="/images/articles/our-way-here/our-way-here-5.jpg"
      agricolaCard={{
        title: 'Azienda Agricola',
        description:
          'Our work on these 15 hectares is never finished. We are constantly experimenting with new ways to inhabit the land, restore its native habitats, monitor soil microbes, and observe how our human presence can support the organic rhythms of the landscape.',
        href: '/azienda-agricola',
      }}
      culturaleCard={{
        title: 'Associazione Culturale',
        description:
          'A cultural association for art, ecology, and rural imagination. Sentieri di Sogni extends our farm\'s work into the wider web of cultural and natural kinship. We aim to carve space for artists, researchers, practitioners and locals to meet, share, and co-create around the themes of land, ecology, and collective imagination.',
        href: '/associazione-culturale',
      }}
    />
  )
}
