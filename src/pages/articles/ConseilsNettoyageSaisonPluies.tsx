import { Link } from 'react-router-dom'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import SEO from '../../components/SEO'

export default function ConseilsNettoyageSaisonPluies() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Conseils de nettoyage pour la saison des pluies à Dakar",
    "description": "La saison des pluies à Dakar apporte son lot de défis pour l'entretien de votre maison. Découvrez nos meilleurs conseils pour garder votre intérieur frais et propre pendant la saison humide au Sénégal.",
    "image": "https://aveckaza.com/logo_kaza.png",
    "datePublished": "2024-10-15",
    "dateModified": "2024-10-15",
    "author": {
      "@type": "Organization",
      "name": "Kaza Sénégal"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Kaza Sénégal",
      "logo": {
        "@type": "ImageObject",
        "url": "https://aveckaza.com/logo_kaza.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://aveckaza.com/blog/conseils-nettoyage-saison-pluies"
    }
  }

  return (
    <div className="min-h-screen bg-cream">
      <SEO
        title="Conseils Nettoyage Saison des Pluies Dakar"
        description="Découvrez les meilleurs conseils pour entretenir votre maison pendant la saison des pluies à Dakar. Astuces anti-humidité, nettoyage efficace et prévention des moisissures au Sénégal."
        keywords="nettoyage saison pluies Dakar, entretien maison humidité Sénégal, anti-moisissure Dakar, conseils ménage saison pluies, maison propre hivernage"
        canonical="/blog/conseils-nettoyage-saison-pluies"
        ogType="article"
        structuredData={structuredData}
      />
      {/* Header */}
      <div className="bg-gradient-to-br from-secondary to-blue-400 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Retour au blog
          </Link>

          <div className="flex items-center gap-2 mb-4">
            <span className="px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold uppercase tracking-wide">
              Nettoyage
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
            Conseils de nettoyage pour la saison des pluies
          </h1>

          <div className="flex items-center gap-6 text-white/90">
            <span className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              15 Octobre 2024
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              5 min de lecture
            </span>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm p-8 sm:p-12">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-gray-700 leading-relaxed">
                La saison des pluies à Dakar, qui s'étend généralement de juin à octobre, apporte son lot de défis 
                pour l'entretien de votre maison. L'humidité, les infiltrations d'eau et la boue peuvent rapidement 
                transformer votre intérieur en cauchemar si vous n'êtes pas bien préparé.
              </p>
            </div>

            {/* Section 1 - À compléter manuellement */}
            <section className="mb-12">
              <h2 className="text-3xl font-display font-bold text-blue mb-6">
                1. Préparez votre maison avant la saison des pluies
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  [Contenu à ajouter : Conseils sur la préparation de la maison, vérification des gouttières, 
                  inspection des toits, etc.]
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>[Point 1 à développer]</li>
                  <li>[Point 2 à développer]</li>
                  <li>[Point 3 à développer]</li>
                </ul>
              </div>
            </section>

            {/* Section 2 - À compléter manuellement */}
            <section className="mb-12">
              <h2 className="text-3xl font-display font-bold text-blue mb-6">
                2. Gérez l'humidité à l'intérieur
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  [Contenu à ajouter : Solutions pour gérer l'humidité, utilisation de déshumidificateurs, 
                  aération, prévention des moisissures, etc.]
                </p>
              </div>
            </section>

            {/* Section 3 - À compléter manuellement */}
            <section className="mb-12">
              <h2 className="text-3xl font-display font-bold text-blue mb-6">
                3. Nettoyage des sols et surfaces
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  [Contenu à ajouter : Techniques de nettoyage adaptées à la saison des pluies, 
                  produits recommandés, fréquence de nettoyage, etc.]
                </p>
              </div>
            </section>

            {/* Section 4 - À compléter manuellement */}
            <section className="mb-12">
              <h2 className="text-3xl font-display font-bold text-blue mb-6">
                4. Protection des textiles et meubles
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  [Contenu à ajouter : Conseils pour protéger les tapis, rideaux, canapés et autres 
                  textiles de l'humidité et des moisissures.]
                </p>
              </div>
            </section>

            {/* Conclusion */}
            <div className="bg-cream rounded-xl p-8 mt-12">
              <h3 className="text-2xl font-display font-bold text-blue mb-4">
                Besoin d'aide professionnelle ?
              </h3>
              <p className="text-gray-700 mb-6">
                Les équipes Kaza sont formées pour gérer tous les défis de la saison des pluies. 
                Nos professionnels utilisent des produits adaptés au climat sénégalais et des techniques 
                éprouvées pour garder votre maison impeccable.
              </p>
              <Link
                to="/"
                className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors"
              >
                Réserver un service de nettoyage
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
