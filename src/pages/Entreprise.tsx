import { Target, Heart, Users, Award, TrendingUp, Shield } from 'lucide-react'
import SEO from '../components/SEO'

export default function Entreprise() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "À propos de Kaza Sénégal",
    "description": "Découvrez Kaza, la première plateforme de services à domicile au Sénégal. Notre mission, nos valeurs et notre engagement envers nos clients et professionnels.",
    "url": "https://aveckaza.com/entreprise"
  }

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <SEO
        title="À Propos - Notre Mission et Valeurs"
        description="Kaza est la première plateforme de services à domicile au Sénégal. Découvrez notre mission, nos valeurs et notre engagement pour connecter clients et professionnels qualifiés à Dakar."
        keywords="à propos Kaza, entreprise services domicile Sénégal, plateforme services Dakar, mission Kaza, valeurs Kaza"
        canonical="/entreprise"
        structuredData={structuredData}
      />
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl sm:text-7xl font-display font-bold text-gray-900 mb-6">
            À propos de Kaza
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            La première plateforme de services à domicile au Sénégal, connectant des professionnels qualifiés avec des clients qui ont besoin d'aide.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-cream">
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
                Faciliter l'accès à des services à domicile de qualité pour tous les Sénégalais, tout en créant des opportunités d'emploi pour des professionnels qualifiés.
              </p>
              <p className="text-gray-700 text-lg">
                Nous croyons que chacun mérite un foyer bien entretenu et que chaque professionnel mérite de travailler dans des conditions dignes et équitables.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-12 text-white">
              <div className="space-y-6">
                <div>
                  <div className="text-5xl font-display font-bold mb-2">1000+</div>
                  <div className="text-white/90">Professionnels actifs</div>
                </div>
                <div>
                  <div className="text-5xl font-display font-bold mb-2">5000+</div>
                  <div className="text-white/90">Clients satisfaits</div>
                </div>
                <div>
                  <div className="text-5xl font-display font-bold mb-2">10000+</div>
                  <div className="text-white/90">Services réalisés</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-display font-bold text-gray-900 text-center mb-12">
            Nos Valeurs
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-display font-bold text-gray-900 mb-3">
                Excellence
              </h3>
              <p className="text-gray-600">
                Nous nous engageons à fournir des services de la plus haute qualité à nos clients
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-display font-bold text-gray-900 mb-3">
                Confiance
              </h3>
              <p className="text-gray-600">
                Tous nos professionnels sont vérifiés, formés et assurés pour votre tranquillité d'esprit
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-display font-bold text-gray-900 mb-3">
                Communauté
              </h3>
              <p className="text-gray-600">
                Nous créons une communauté solidaire de professionnels et de clients
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-display font-bold text-gray-900 mb-3">
                Innovation
              </h3>
              <p className="text-gray-600">
                Nous utilisons la technologie pour simplifier l'accès aux services à domicile
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-display font-bold text-gray-900 mb-3">
                Intégrité
              </h3>
              <p className="text-gray-600">
                Nous agissons avec honnêteté et transparence dans toutes nos interactions
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
                Nous traitons chaque personne avec dignité et respect, qu'il s'agisse de clients ou de professionnels
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Histoire */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-cream">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-display font-bold text-gray-900 mb-8">
            Notre Histoire
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 text-lg mb-6">
              Kaza est née d'une vision simple : rendre les services à domicile accessibles, fiables et abordables pour tous les Sénégalais. Nous avons constaté que trouver un professionnel qualifié et de confiance était souvent difficile et chronophage.
            </p>
            
            <p className="text-gray-700 text-lg mb-6">
              En 2024, nous avons lancé notre plateforme à Dakar avec une poignée de professionnels triés sur le volet. Aujourd'hui, nous sommes fiers de compter plus de 1000 professionnels actifs et d'avoir servi des milliers de clients satisfaits.
            </p>
            
            <p className="text-gray-700 text-lg">
              Notre croissance rapide témoigne de la confiance que nos clients et nos professionnels placent en nous. Nous continuons d'innover et d'améliorer nos services pour mieux répondre aux besoins de notre communauté.
            </p>
          </div>
        </div>
      </section>

      {/* Engagement */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-display font-bold text-gray-900 text-center mb-12">
            Notre Engagement
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-3xl font-display font-bold text-gray-900 mb-3">
                Pour nos clients
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Des professionnels vérifiés et qualifiés
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Une plateforme simple et intuitive
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Un service client réactif et à l'écoute
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Une garantie satisfaction sur tous nos services
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-3xl font-display font-bold text-gray-900 mb-3">
                Pour nos professionnels
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Des opportunités de travail régulières
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Des paiements rapides et sécurisés
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Une assurance pour toutes les interventions
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Un accompagnement et des formations continues
                </li>
              </ul>
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
