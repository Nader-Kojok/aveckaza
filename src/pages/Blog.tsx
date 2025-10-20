import { Link } from 'react-router-dom'
import { Calendar, ArrowRight } from 'lucide-react'
import SEO from '../components/SEO'
import { placeholders } from '../lib/placeholder'

export default function Blog() {
  const articles = [
    {
      id: 'conseils-nettoyage-saison-pluies',
      title: 'Conseils de nettoyage pour la saison des pluies',
      category: 'Nettoyage',
      image: placeholders.blog.rainySeasonCleaning,
      description: 'La saison des pluies à Dakar apporte son lot de défis pour l\'entretien de votre maison. Découvrez nos meilleurs conseils pour garder votre intérieur frais et propre.',
      date: '15 Octobre 2024',
      readTime: '5 min'
    },
    {
      id: 'entretien-jardin-climat-tropical',
      title: 'Entretien du jardin en climat tropical',
      category: 'Jardinage',
      image: placeholders.blog.tropicalGarden,
      description: 'Le climat sénégalais offre des conditions uniques pour le jardinage. Apprenez les meilleures pratiques pour un jardin luxuriant toute l\'année à Dakar.',
      date: '10 Octobre 2024',
      readTime: '7 min'
    },
    {
      id: 'securite-domicile-guide-complet',
      title: 'Sécurité à domicile : Guide complet',
      category: 'Sécurité',
      image: placeholders.blog.homeSecurity,
      description: 'Protégez votre maison et votre famille avec nos conseils essentiels de sécurité adaptés au contexte sénégalais. Un guide pratique et complet.',
      date: '5 Octobre 2024',
      readTime: '6 min'
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

                    <h2 className="text-2xl font-display font-bold text-blue mb-3 group-hover:text-primary transition-colors">
                      {article.title}
                    </h2>

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
