import { Link } from 'react-router-dom'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import Seo from '../../components/SEO'

export default function EntretienLogementSaisonPluies() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Comment entretenir son logement après la saison des pluies ?",
    "description": "La saison des pluies au Sénégal peut laisser des traces sur votre maison : humidité excessive, moisissures, infiltrations d'eau, peinture abîmée… Un bon entretien après cette période est essentiel pour préserver votre logement.",
    "image": "https://aveckaza.com/logo_kaza.png",
    "datePublished": "2025-01-20",
    "dateModified": "2025-01-20",
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
      <Seo
        title="Comment entretenir son logement après la saison des pluies - Kaza"
        description="La saison des pluies au Sénégal peut laisser des traces sur votre maison. Découvrez comment entretenir votre logement après cette période pour préserver votre maison."
        keywords="entretien maison saison pluies, maintenance logement Sénégal, après pluies Dakar, réparation infiltrations, traitement humidité"
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
            Comment entretenir son logement après la saison des pluies ?
          </h1>

          <div className="flex items-center gap-6 text-white/90">
            <span className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              20 Janvier 2025
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
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            {/* Featured Image */}
            <div className="w-full h-96 overflow-hidden">
              <img 
                src="/blog/entretenir_logement.webp" 
                alt="Comment entretenir son logement après la saison des pluies"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-8 sm:p-12">
              {/* Introduction */}
              <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-gray-700 leading-relaxed">
                La saison des pluies au Sénégal peut laisser des traces sur votre maison : humidité excessive, moisissures, 
                infiltrations d'eau, peinture abîmée… Un bon entretien après cette période est essentiel pour préserver 
                votre logement et éviter des réparations coûteuses. Découvrez les actions à entreprendre pour protéger 
                votre maison et améliorer sa longévité.
              </p>
            </div>

            {/* Section 1 */}
            <section className="mb-12">
              <h2 className="text-3xl font-display font-bold text-blue mb-6">
                1. Inspecter et réparer le toit
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  La toiture est l'une des parties les plus exposées aux intempéries. Après la saison des pluies :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Vérifiez l'état des tuiles ou du carrelage, notamment les joints : remplacez ce qui est fissuré ou déplacé.</li>
                  <li>Assurez-vous qu'aucune infiltration d'eau n'a eu lieu.</li>
                  <li>Nettoyez les évacuations pour éviter qu'elles ne s'encrassent avec des feuilles et des débris.</li>
                </ul>
                <p>
                  Une toiture bien entretenue protège efficacement contre les prochaines pluies et prolonge la durée de vie de votre logement.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="mb-12">
              <h2 className="text-3xl font-display font-bold text-blue mb-6">
                2. Vérifier les murs et refaire la peinture si nécessaire
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  L'humidité et les intempéries peuvent causer des dommages visibles sur les murs : tâches d'humidité, 
                  fissures, peinture écaillée… Pour y remédier :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Identifiez les fissures et appliquez un enduit pour éviter les infiltrations d'eau.</li>
                  <li>Traitez les zones affectées par la moisissure avec un mélange d'eau de javel et d'eau pour éviter leur propagation.</li>
                  <li>Si la peinture extérieure s'est détériorée, optez pour une peinture anti-humidité ou hydrofuge, spécialement conçue pour résister aux conditions climatiques du Sénégal.</li>
                </ul>
                <p>
                  Une nouvelle couche de peinture ne se contente pas d'améliorer l'esthétique de votre maison, elle joue aussi un rôle protecteur contre l'usure et les éléments.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section className="mb-12">
              <h2 className="text-3xl font-display font-bold text-blue mb-6">
                3. Assainir et ventiler l'intérieur
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  L'humidité peut persister à l'intérieur de la maison, favorisant l'apparition de moisissures et de mauvaises odeurs. Pour y remédier :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Aérez toutes les pièces en ouvrant portes et fenêtres.</li>
                  <li>Utilisez un déshumidificateur ou du charbon actif pour absorber l'excès d'humidité.</li>
                  <li>Nettoyez les textiles (rideaux, tapis, matelas) qui peuvent avoir absorbé l'humidité ambiante.</li>
                </ul>
                <p>
                  Un intérieur sain et bien ventilé réduit les risques de maladies respiratoires et améliore votre confort au quotidien.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section className="mb-12">
              <h2 className="text-3xl font-display font-bold text-blue mb-6">
                4. Vérifier les installations électriques et la plomberie
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Les infiltrations d'eau peuvent endommager les circuits électriques et provoquer des courts-circuits. 
                  De même, la plomberie peut être affectée par l'accumulation de débris et de boue.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Faites appel à un électricien pour inspecter votre installation, surtout si vous avez constaté des anomalies (prises qui crépitent, ampoules qui grillent rapidement).</li>
                  <li>Vérifiez l'état des canalisations et des évacuations d'eau pour éviter les obstructions et les fuites.</li>
                </ul>
                <p>
                  Ces contrôles garantissent la sécurité de votre maison et vous évitent des dépenses imprévues.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section className="mb-12">
              <h2 className="text-3xl font-display font-bold text-blue mb-6">
                5. Entretenir le jardin et les extérieurs
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Après les fortes pluies, votre jardin peut être envahi par des herbes folles et des eaux stagnantes, favorisant la prolifération des moustiques.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Taillez les arbres et arbustes pour éviter qu'ils n'endommagent votre maison.</li>
                  <li>Éliminez les eaux stagnantes pour prévenir les maladies comme le paludisme.</li>
                  <li>Enrichissez le sol avec du compost pour revitaliser votre pelouse et vos plantes.</li>
                </ul>
                <p>
                  Un jardin bien entretenu embellit votre maison et limite les nuisibles.
                </p>
              </div>
            </section>

            {/* Conclusion */}
            <div className="bg-cream rounded-xl p-8 mt-12">
              <h3 className="text-2xl font-display font-bold text-blue mb-4">
                Faire appel à des professionnels pour un entretien complet
              </h3>
              <p className="text-gray-700 mb-6">
                Si vous manquez de temps ou souhaitez un travail de qualité, faites appel à des experts en entretien et rénovation. 
                Sur Kaza, nous vous mettons en relation avec des artisans qualifiés : peintres, électriciens, plombiers, menuisiers… 
                pour tous vos travaux de maintenance après la saison des pluies.
              </p>
              <Link
                to="/"
                className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors"
              >
                Demander un devis personnalisé
              </Link>
            </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
