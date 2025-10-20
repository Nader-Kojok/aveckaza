import Hero from './components/Hero'
import Services from './components/Services'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import FindHelp from './components/FindHelp'
import Testimonials from './components/Testimonials'
import FAQSection from './components/FAQ'
import WorkWithUs from './components/WorkWithUs'
import BlogCards from './components/BlogCards'
import SEO from './components/SEO'

function App() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Kaza Sénégal",
    "image": "https://aveckaza.com/logo_kaza.png",
    "@id": "https://aveckaza.com",
    "url": "https://aveckaza.com",
    "telephone": "+221787891010",
    "email": "contact@aveckaza.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Dakar",
      "addressLocality": "Dakar",
      "addressRegion": "Dakar",
      "addressCountry": "SN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 14.6928,
      "longitude": -17.4467
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "08:00",
      "closes": "20:00"
    },
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61570831864851",
      "https://www.instagram.com/kaza.sn"
    ],
    "priceRange": "$$",
    "description": "Plateforme de services à domicile au Sénégal : ménage, bricolage, jardinage, lavage auto, déménagement et plus. Professionnels vérifiés à Dakar."
  }

  return (
    <>
      <SEO
        title="Services à Domicile Dakar"
        description="Trouvez des professionnels vérifiés pour tous vos besoins à domicile à Dakar : ménage, bricolage, jardinage, lavage auto, déménagement. Réservez en quelques clics avec Kaza Sénégal."
        keywords="services à domicile Dakar, femme de ménage Dakar, bricolage Dakar, jardinage Dakar, aide ménagère Sénégal, lavage auto domicile, déménagement Dakar, Kaza Sénégal"
        canonical="/"
        structuredData={structuredData}
      />
      <Hero />
      <Services />
      <Features />
      <HowItWorks />
      <FindHelp />
      <Testimonials />
      <FAQSection />
      <WorkWithUs />
      <BlogCards />
    </>
  )
}

export default App
