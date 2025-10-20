import { Link } from 'react-router-dom'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import SEO from '../../components/SEO'

export default function SecuriteDomicileGuideComplet() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Sécurité à domicile : Guide complet pour le Sénégal",
    "description": "Protégez votre maison et votre famille avec nos conseils essentiels de sécurité adaptés au contexte sénégalais. Un guide pratique et complet.",
    "image": "https://aveckaza.com/logo_kaza.png",
    "datePublished": "2024-10-05",
    "dateModified": "2024-10-05",
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
      "@id": "https://aveckaza.com/blog/securite-domicile-guide-complet"
    }
  }

  return (
    <div className="min-h-screen bg-cream">
      <SEO
        title="Sécurité Domicile Dakar - Guide Complet 2025"
        description="Protégez votre maison à Dakar avec notre guide complet de sécurité : alarmes, gardiennage, systèmes de surveillance adaptés au Sénégal."
        keywords="sécurité maison Dakar, protection domicile Sénégal, alarme Dakar, gardiennage, surveillance maison"
        canonical="/blog/securite-domicile-guide-complet"
        ogType="article"
        structuredData={structuredData}
      />
      {/* Header */}
      <div className="bg-gradient-to-br from-primary to-primary-dark text-white py-20 px-4 sm:px-6 lg:px-8">
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
              Sécurité
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
            Sécurité à domicile : Guide complet
          </h1>

          <div className="flex items-center gap-6 text-white/90">
            <span className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              5 Octobre 2024
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              6 min de lecture
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
                La sécurité de votre domicile est une priorité absolue pour protéger votre famille et vos biens. 
                Dans le contexte sénégalais, notamment à Dakar et ses environs, il existe des mesures spécifiques 
                et des bonnes pratiques à mettre en place pour assurer une protection optimale de votre maison.
              </p>
            </div>

            {/* Section 1 - À compléter manuellement */}
            <section className="mb-12">
              <h2 className="text-3xl font-display font-bold text-blue mb-6">
                1. Sécurisation physique de votre domicile
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  [Contenu à ajouter : Portes blindées, serrures de qualité, grilles de protection, 
                  clôtures, éclairage extérieur, etc.]
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>[Mesure de sécurité 1]</li>
                  <li>[Mesure de sécurité 2]</li>
                  <li>[Mesure de sécurité 3]</li>
                </ul>
              </div>
            </section>

            {/* Section 2 - À compléter manuellement */}
            <section className="mb-12">
              <h2 className="text-3xl font-display font-bold text-blue mb-6">
                2. Systèmes de surveillance et d'alarme
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  [Contenu à ajouter : Caméras de surveillance, systèmes d'alarme, détecteurs de mouvement, 
                  solutions connectées adaptées au Sénégal, etc.]
                </p>
              </div>
            </section>

            {/* Section 3 - À compléter manuellement */}
            <section className="mb-12">
              <h2 className="text-3xl font-display font-bold text-blue mb-6">
                3. Engagement d'un gardien de sécurité
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  [Contenu à ajouter : Avantages d'avoir un gardien, critères de sélection, 
                  entreprises de sécurité fiables au Sénégal, coûts moyens, etc.]
                </p>
              </div>
            </section>

            {/* Section 4 - À compléter manuellement */}
            <section className="mb-12">
              <h2 className="text-3xl font-display font-bold text-blue mb-6">
                4. Habitudes de sécurité au quotidien
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  [Contenu à ajouter : Gestion des clés, vérification des visiteurs, sécurité pendant 
                  les absences, communication avec les voisins, etc.]
                </p>
              </div>
            </section>

            {/* Section 5 - À compléter manuellement */}
            <section className="mb-12">
              <h2 className="text-3xl font-display font-bold text-blue mb-6">
                5. Sécurité lors des interventions à domicile
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  [Contenu à ajouter : Vérification des professionnels, plateformes de confiance comme Kaza, 
                  importance des avis et certifications, etc.]
                </p>
              </div>
            </section>

            {/* Conclusion */}
            <div className="bg-cream rounded-xl p-8 mt-12">
              <h3 className="text-2xl font-display font-bold text-blue mb-4">
                Des professionnels de confiance avec Kaza
              </h3>
              <p className="text-gray-700 mb-6">
                Chez Kaza, tous nos professionnels sont vérifiés, formés et évalués régulièrement. 
                Vous pouvez faire appel à nos services en toute sérénité, sachant que la sécurité 
                et la qualité sont nos priorités absolues.
              </p>
              <Link
                to="/"
                className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors"
              >
                Découvrir nos services
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
