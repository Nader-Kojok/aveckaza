import { Link } from 'react-router-dom'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import Seo from '../../components/SEO'

export default function ProlongerDureeVieClimatiseur() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "7 astuces incontournables pour prolonger la durée de vie de votre climatiseur",
    "description": "Un climatiseur bien entretenu peut fonctionner efficacement pendant de nombreuses années, tout en limitant vos dépenses en réparations ou en remplacement. Si vous souhaitez maximiser la durée de vie de votre climatiseur dans le climat du Sénégal, voici les meilleures pratiques à adopter.",
    "image": "https://aveckaza.com/logo_kaza.png",
    "datePublished": "2025-01-18",
    "dateModified": "2025-01-18",
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
      "@id": "https://aveckaza.com/blog/entretien-jardin-climat-tropical"
    }
  }

  return (
    <div className="min-h-screen bg-cream">
      <Seo
        title="7 Astuces pour Prolonger la Durée de Vie de Votre Climatiseur - Kaza"
        description="Découvrez 7 astuces essentielles pour prolonger la durée de vie de votre climatiseur au Sénégal. Conseils d'entretien, nettoyage et maintenance professionnelle."
        keywords="entretien climatisation Sénégal, maintenance climatiseur Dakar, prolonger durée vie climatisation, nettoyage filtres climatiseur, réparation climatisation"
        canonical="/blog/entretien-jardin-climat-tropical"
        ogType="article"
        structuredData={structuredData}
      />
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
              Climatisation
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
            7 astuces incontournables pour prolonger la durée de vie de votre climatiseur
          </h1>

          <div className="flex items-center gap-6 text-white/90">
            <span className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              18 Janvier 2025
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              8 min de lecture
            </span>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            {/* Featured Image */}
            <div className="w-full h-96 overflow-hidden">
              <img 
                src="/blog/prolonger_climatiseur.webp" 
                alt="7 astuces incontournables pour prolonger la durée de vie de votre climatiseur"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-8 sm:p-12">
              {/* Introduction */}
              <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-gray-700 leading-relaxed">
                Un climatiseur bien entretenu peut fonctionner efficacement pendant de nombreuses années, tout en limitant 
                vos dépenses en réparations ou en remplacement. Si vous souhaitez maximiser la durée de vie de votre climatiseur 
                dans le climat du Sénégal, voici les meilleures pratiques à adopter.
              </p>
            </div>

            {/* Section 1 */}
            <section className="mb-12">
              <h2 className="text-3xl font-display font-bold text-blue mb-6">
                1. Nettoyez régulièrement les filtres à air
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Les filtres de votre climatiseur jouent un rôle crucial en retenant la poussière, les allergènes et les particules en suspension. 
                  Lorsque ces filtres sont obstrués, l'appareil doit travailler plus dur, ce qui peut entraîner une usure prématurée.
                </p>
                <p>
                  <strong>Nettoyez ou remplacez les filtres tous les 1 à 3 mois</strong>, selon l'intensité d'utilisation et l'environnement. 
                  Si vous avez des animaux ou vivez dans un environnement poussiéreux, comme au Sénégal, vérifiez les filtres plus fréquemment.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="mb-12">
              <h2 className="text-3xl font-display font-bold text-blue mb-6">
                2. Vérifiez et nettoyez les bobines du climatiseur
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Les bobines (ou serpentins) de l'évaporateur et du condenseur accumulent également la saleté au fil du temps. 
                  Cela peut réduire l'efficacité du transfert de chaleur et forcer l'appareil à consommer plus d'énergie.
                </p>
                <p>
                  <strong>Faites inspecter les bobines au moins une fois par an</strong> et nettoyez-les délicatement avec une brosse douce ou un nettoyant spécial.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section className="mb-12">
              <h2 className="text-3xl font-display font-bold text-blue mb-6">
                3. Assurez un bon flux d'air autour de l'unité extérieure
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  L'unité extérieure (condenseur) a besoin d'un espace dégagé pour fonctionner efficacement. Si des objets, des plantes 
                  ou des débris bloquent les grilles de ventilation, cela peut entraîner une surchauffe et endommager le compresseur.
                </p>
                <p>
                  <strong>Dégagez au moins 60 cm autour de l'unité</strong> et éliminez régulièrement les feuilles, branches et saletés.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section className="mb-12">
              <h2 className="text-3xl font-display font-bold text-blue mb-6">
                4. Programmez un entretien annuel avec un professionnel
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Un entretien régulier par un technicien qualifié est indispensable pour vérifier l'ensemble des composants, 
                  détecter les éventuels problèmes et éviter les pannes coûteuses.
                </p>
                <p>
                  <strong>Au programme :</strong> vérification des niveaux de réfrigérant, test des connexions électriques, inspection des ventilateurs et des conduits.
                </p>
                <p>
                  Faire appel à un professionnel garantit une maintenance optimale et prolonge considérablement la durée de vie de votre climatiseur.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section className="mb-12">
              <h2 className="text-3xl font-display font-bold text-blue mb-6">
                5. Évitez de sursolliciter votre climatiseur
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Une utilisation excessive ou inadaptée peut accélérer l'usure de votre climatiseur.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Réglez la température à un niveau raisonnable (entre 20-24°C)</li>
                  <li>Utilisez des ventilateurs pour répartir l'air frais dans la pièce</li>
                  <li>Fermez les fenêtres et les portes pour éviter les pertes de fraîcheur</li>
                </ul>
              </div>
            </section>

            {/* Section 6 */}
            <section className="mb-12">
              <h2 className="text-3xl font-display font-bold text-blue mb-6">
                6. Isolez correctement votre logement
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Un bon système d'isolation réduit la charge de travail de votre climatiseur, prolongeant ainsi sa durée de vie.
                </p>
                <p>
                  Ajoutez des rideaux ou stores pour limiter la chaleur entrante et isolez vos fenêtres avec des joints ou des films réfléchissants.
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section className="mb-12">
              <h2 className="text-3xl font-display font-bold text-blue mb-6">
                7. Évitez les démarrages et arrêts fréquents
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Démarrer et arrêter votre climatiseur à répétition sollicite fortement le compresseur, ce qui peut réduire sa durée de vie.
                </p>
                <p>
                  Si vous quittez la pièce pour une courte période, laissez le climatiseur allumé plutôt que de l'éteindre et le rallumer.
                </p>
              </div>
            </section>

            {/* Conclusion */}
            <div className="bg-cream rounded-xl p-8 mt-12">
              <h3 className="text-2xl font-display font-bold text-blue mb-4">
                Pourquoi entretenir votre climatiseur avec Kaza ?
              </h3>
              <p className="text-gray-700 mb-6">
                Chez Kaza, nous vous connectons avec des artisans qualifiés au Sénégal, experts en entretien de climatiseurs. 
                Nos techniciens vous aident à prolonger la durée de vie de votre appareil, à améliorer son efficacité énergétique 
                et à réduire vos factures. En suivant ces conseils, vous profiterez d'un climatiseur performant pendant de nombreuses années.
              </p>
              <Link
                to="/"
                className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors"
              >
                Demander un entretien de climatisation
              </Link>
            </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
