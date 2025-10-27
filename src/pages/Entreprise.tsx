import { Target, Heart, Shield, Lightbulb, CheckCircle } from 'lucide-react'
import Seo from '../components/SEO'

export default function Entreprise() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "À propos de Kaza Sénégal",
    "description": "Découvrez Kaza, la plateforme qui structure le secteur des services à domicile au Sénégal. Notre histoire, notre mission et nos valeurs.",
    "url": "https://aveckaza.com/entreprise"
  }

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="À Propos - Notre Mission et Valeurs"
        description="Kaza structure le secteur des services à domicile au Sénégal. Découvrez notre histoire, notre mission et notre engagement pour la qualité et le professionnalisme à Dakar."
        keywords="à propos Kaza, entreprise services domicile Sénégal, plateforme services Dakar, mission Kaza, valeurs Kaza"
        canonical="/entreprise"
        structuredData={structuredData}
      />
      
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl sm:text-7xl font-display font-bold text-gray-900 mb-6">
            À propos de Kaza
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Structurer le secteur des services à domicile au Sénégal, en garantissant la qualité pour les clients et en donnant aux artisans les outils pour mieux travailler.
          </p>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-cream">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-display font-bold text-gray-900 mb-8">
            Notre Histoire
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 text-lg mb-6">
              Tout est parti d'un constat simple, mais largement partagé : au Sénégal, il est souvent difficile de trouver un artisan ponctuel, rigoureux et transparent. Les retards, les travaux inachevés ou les tarifs flous sont devenus la norme, laissant les clients sans repères et les artisans sans cadre professionnel.
            </p>
            
            <p className="text-gray-700 text-lg mb-6">
              C'est pour répondre à ce besoin de fiabilité qu'est née Kaza, début 2025 à Dakar. Notre objectif : encadrer chaque intervention avec des standards clairs, un service client attentif et des artisans sélectionnés pour leur sérieux.
            </p>
            
            <p className="text-gray-700 text-lg">
              Quelques mois plus tard, plus de 120 artisans collaborent déjà avec nous et plus de 2 000 interventions ont été réalisées à Dakar, témoignant d'un vrai changement dans la façon dont les services à domicile sont perçus et organisés.
            </p>
          </div>
        </div>
      </section>

      {/* Notre Mission */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-5xl font-display font-bold text-gray-900 mb-6">
                Notre Mission
              </h2>
              <p className="text-gray-700 text-lg mb-4">
                Kaza structure le secteur des services à domicile, en garantissant la qualité pour les clients et en donnant aux artisans les outils pour mieux travailler et développer leur activité.
              </p>
              <p className="text-gray-700 text-lg">
                Chaque chantier est encadré par un service client attentif, des artisans sélectionnés et des standards clairs — pour faire de la qualité, de la transparence et du professionnalisme la nouvelle norme du service à domicile.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-12 text-white">
              <div className="space-y-6">
                <div>
                  <div className="text-5xl font-display font-bold mb-2">+120</div>
                  <div className="text-white/90">Artisans validés et formés</div>
                </div>
                <div>
                  <div className="text-5xl font-display font-bold mb-2">+800</div>
                  <div className="text-white/90">Clients particuliers et professionnels</div>
                </div>
                <div>
                  <div className="text-5xl font-display font-bold mb-2">+2 000</div>
                  <div className="text-white/90">Interventions réalisées avec suivi qualité</div>
                </div>
                <div>
                  <div className="text-5xl font-display font-bold mb-2">92%</div>
                  <div className="text-white/90">De satisfaction client</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ce qui fait la différence */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-cream">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-display font-bold text-gray-900 mb-8">
            Ce qui fait la différence
          </h2>
          
          <p className="text-gray-700 text-lg mb-8">
            Confirmation de rendez-vous, rappels automatiques, nettoyage systématique, émission de factures, et suivi qualité — tout est géré pour garantir une expérience fiable, du premier contact jusqu'à la fin du service.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
                Pour nos clients
              </h3>
              <p className="text-gray-700">
                Nous garantissons des artisans vérifiés, un service client attentif et une expérience fluide du début à la fin.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
                Pour nos artisans
              </h3>
              <p className="text-gray-700">
                Nous offrons des opportunités régulières, des paiements sécurisés et un accompagnement continu pour les faire progresser.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-display font-bold text-gray-900 text-center mb-12">
            Nos Valeurs
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-display font-bold text-gray-900 mb-3">
                Fiabilité
              </h3>
              <p className="text-gray-600">
                Chaque intervention est planifiée, suivie et exécutée avec rigueur. Chez Kaza, le sérieux n'est pas une promesse : c'est une méthode.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-display font-bold text-gray-900 mb-3">
                Transparence
              </h3>
              <p className="text-gray-600">
                Des prix clairs, un suivi visible et des échanges honnêtes à chaque étape. La confiance se construit dans la clarté.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-display font-bold text-gray-900 mb-3">
                Professionnalisme
              </h3>
              <p className="text-gray-600">
                Nos artisans sont sélectionnés, accompagnés et formés pour garantir un service constant et de qualité.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-display font-bold text-gray-900 mb-3">
                Innovation utile
              </h3>
              <p className="text-gray-600">
                Nous utilisons la technologie pour simplifier, structurer et améliorer l'expérience des clients comme celle des artisans.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-display font-bold text-gray-900 mb-3">
                Respect
              </h3>
              <p className="text-gray-600">
                Respect du client, du travail bien fait et de chaque artisan qui s'engage à nos côtés.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-br from-blue to-blue-dark text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-display font-bold mb-6">
            Rejoignez l'aventure Kaza
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Que vous soyez client ou professionnel, nous sommes là pour vous
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://commander.aveckaza.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded-full font-semibold transition-colors"
            >
              Réserver un service
            </a>
            <a
              href="/devenir-pro"
              className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold transition-colors border-2 border-white"
            >
              Devenir professionnel
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
