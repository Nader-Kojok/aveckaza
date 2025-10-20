import { Link } from 'react-router-dom'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'

export default function EntretienJardinClimatTropical() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <div className="bg-gradient-to-br from-accent to-primary text-white py-20 px-4 sm:px-6 lg:px-8">
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
              Jardinage
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
            Entretien du jardin en climat tropical
          </h1>

          <div className="flex items-center gap-6 text-white/90">
            <span className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              10 Octobre 2024
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              7 min de lecture
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
                Le climat tropical du Sénégal offre des conditions uniques pour créer un jardin luxuriant. 
                Avec les bonnes techniques et un entretien adapté, vous pouvez profiter d'un espace vert 
                magnifique toute l'année, que vous soyez aux Almadies, à Mermoz ou dans d'autres quartiers de Dakar.
              </p>
            </div>

            {/* Section 1 - À compléter manuellement */}
            <section className="mb-12">
              <h2 className="text-3xl font-display font-bold text-blue mb-6">
                1. Choisir les plantes adaptées au climat sénégalais
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  [Contenu à ajouter : Liste des plantes tropicales adaptées, arbres fruitiers locaux, 
                  plantes ornementales résistantes à la chaleur, etc.]
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>[Plante 1 et ses caractéristiques]</li>
                  <li>[Plante 2 et ses caractéristiques]</li>
                  <li>[Plante 3 et ses caractéristiques]</li>
                </ul>
              </div>
            </section>

            {/* Section 2 - À compléter manuellement */}
            <section className="mb-12">
              <h2 className="text-3xl font-display font-bold text-blue mb-6">
                2. Gestion de l'arrosage en climat tropical
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  [Contenu à ajouter : Fréquence d'arrosage selon les saisons, techniques d'irrigation, 
                  économie d'eau, meilleurs moments de la journée pour arroser, etc.]
                </p>
              </div>
            </section>

            {/* Section 3 - À compléter manuellement */}
            <section className="mb-12">
              <h2 className="text-3xl font-display font-bold text-blue mb-6">
                3. Protection contre les parasites et maladies
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  [Contenu à ajouter : Parasites courants au Sénégal, solutions naturelles et écologiques, 
                  prévention des maladies des plantes, etc.]
                </p>
              </div>
            </section>

            {/* Section 4 - À compléter manuellement */}
            <section className="mb-12">
              <h2 className="text-3xl font-display font-bold text-blue mb-6">
                4. Entretien selon les saisons
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  [Contenu à ajouter : Calendrier d'entretien, travaux spécifiques à la saison sèche 
                  et à la saison des pluies, taille, fertilisation, etc.]
                </p>
              </div>
            </section>

            {/* Section 5 - À compléter manuellement */}
            <section className="mb-12">
              <h2 className="text-3xl font-display font-bold text-blue mb-6">
                5. Créer des zones d'ombre et de fraîcheur
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  [Contenu à ajouter : Aménagement d'espaces ombragés, choix d'arbres pour l'ombre, 
                  création de pergolas, etc.]
                </p>
              </div>
            </section>

            {/* Conclusion */}
            <div className="bg-cream rounded-xl p-8 mt-12">
              <h3 className="text-2xl font-display font-bold text-blue mb-4">
                Confiez votre jardin à des experts
              </h3>
              <p className="text-gray-700 mb-6">
                Nos jardiniers professionnels connaissent parfaitement le climat sénégalais et les 
                techniques adaptées. Ils transformeront votre espace extérieur en un véritable havre de paix.
              </p>
              <Link
                to="/"
                className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors"
              >
                Réserver un service de jardinage
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
