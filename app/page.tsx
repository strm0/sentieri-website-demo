import LandingPageTemplate from '@/components/templates/LandingPageTemplate';

export default function Home() {
  return (
    <LandingPageTemplate
      heroImage="/images/landingPage/hero-landscape.jpg"
      agricolaCard={{
        title: 'Azienda Agricola',
        description: 'Our small-batch wine and single-varietal extra virgin olive oil are driven by the belief that great food and wine begin in the field.',
        href: '/azienda-agricola',
      }}
      culturaleCard={{
        title: 'Associazione Culturale',
        description: 'Artistic and ecological research that redefines our relationship with rural landscapes.',
        href: '/associazione-culturale',
      }}
    />
  );
}
