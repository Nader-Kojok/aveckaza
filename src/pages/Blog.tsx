import { Link } from 'react-router-dom'
import { Calendar, ArrowRight } from 'lucide-react'
import SEO from '../components/SEO'

export default function Blog() {
  const articles = [
    {
      id: 'prix-travaux-peinture',
      title: 'Peinture : les 6 facteurs qui font varier le prix des travaux',
      category: 'Design & Décoration',
      image: '/blog/travaux_peinture.webp',
      description: 'Refaire la peinture d\'un logement peut sembler simple, mais plusieurs éléments influencent le prix d\'un artisan peintre. Comprendre ce qui fait varier les tarifs.',
      date: '22 Janvier 2025',
      readTime: '8 min'
    },
    {
      id: 'conseils-nettoyage-saison-pluies',
      title: 'Comment entretenir son logement après la saison des pluies ?',
      category: 'Maintenance',
      image: '/blog/entretenir_logement.webp',
      description: 'La saison des pluies au Sénégal peut laisser des traces sur votre maison. Découvrez les actions à entreprendre pour protéger votre logement.',
      date: '20 Janvier 2025',
      readTime: '6 min'
    },
    {
      id: 'entretien-jardin-climat-tropical',
      title: '7 astuces incontournables pour prolonger la durée de vie de votre climatiseur',
      category: 'Climatisation',
      image: '/blog/prolonger_climatiseur.webp',
      description: 'Un climatiseur bien entretenu peut fonctionner efficacement pendant de nombreuses années. Découvrez les meilleures pratiques à adopter.',
      date: '18 Janvier 2025',
      readTime: '8 min'
    },
    {
      id: 'securite-domicile-guide-complet',
      title: 'Plombs qui sautent : causes, solutions et quand faire appel à un électricien',
      category: 'Électricité',
      image: '/blog/plombs_sautent.webp',
      description: 'Un disjoncteur qui saute sans raison apparente peut être source de frustration. Identifiez l\'origine du problème et découvrez les solutions.',
      date: '15 Janvier 2025',
      readTime: '7 min'
    }
  ]

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Blog Kaza Sénégal",
    "description": "Conseils, astuces et guides pour entretenir votre maison au Sénégal",
    "url": "https://aveckaza.com/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Kaza Sénégal",
      "logo": {
        "@type": "ImageObject",
        "url": "https://aveckaza.com/logo_kaza.png"
      }
    }
  }

  return (
    <div className="min-h-screen bg-cream">
      <SEO
        title="Blog - Conseils Entretien Maison Sénégal"
        description="Découvrez nos articles sur l'entretien de maison au Sénégal : nettoyage saison des pluies, jardinage tropical, sécurité domicile. Conseils d'experts Kaza."
        keywords="blog entretien maison Sénégal, conseils ménage Dakar, jardinage tropical, nettoyage saison pluies, astuces maison Sénégal"
        canonical="/blog"
        structuredData={structuredData}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue to-blue-600 text-white pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
            Blog Kaza
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 max-w-2xl mx-auto">
            Conseils, astuces et guides pour entretenir votre maison au Sénégal
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-8 text-center">
            Nos derniers articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link
                key={article.id}
                to={`/blog/${article.id}`}
                className="group"
              >
                <article className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
                  {/* Image Header */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                      <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold uppercase tracking-wide text-white">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {article.date}
                      </span>
                      <span>•</span>
                      <span>{article.readTime} de lecture</span>
                    </div>

                    <h3 className="text-2xl font-display font-bold text-blue mb-3 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-gray-600 mb-4 flex-1">
                      {article.description}
                    </p>

                    <div className="flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
                      Lire l'article
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
            Besoin d'aide professionnelle ?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Nos experts Kaza sont là pour vous accompagner dans tous vos besoins d'entretien à domicile.
          </p>
          <Link
            to="/"
            className="inline-block bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-cream transition-colors"
          >
            Réserver un service
          </Link>
        </div>
      </section>
    </div>
  )
}
