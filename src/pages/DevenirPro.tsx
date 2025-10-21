import { Check, Clock, TrendingUp, Shield, Users, Briefcase } from 'lucide-react'
import Seo from '../components/SEO'

export default function DevenirPro() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "Professionnel de services à domicile",
    "description": "Rejoignez la communauté Kaza et trouvez des clients pour vos services à Dakar. Inscription gratuite pour professionnels de ménage, bricolage, jardinage et plus.",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "Kaza Sénégal",
      "sameAs": "https://aveckaza.com"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dakar",
        "addressCountry": "SN"
      }
    },
    "employmentType": ["CONTRACTOR", "PART_TIME", "FULL_TIME"],
    "workHours": "Flexible"
  }

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Devenir Professionnel - Rejoignez Kaza"
        description="Rejoignez la communauté Kaza et trouvez des clients pour vos services à Dakar. Inscription gratuite pour professionnels de ménage, bricolage, jardinage et plus."
        keywords="devenir pro Kaza, travailler avec Kaza, inscription professionnel Dakar, emploi services domicile Sénégal, freelance Dakar"
        canonical="/devenir-pro"
        structuredData={structuredData}
      />
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 pt-32 pb-16 bg-gradient-to-br from-blue to-blue-dark text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-display font-bold mb-6">
            Rejoignez l'équipe Kaza
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Développez votre activité et gagnez plus en rejoignant la première plateforme de services à domicile au Sénégal
          </p>
          <a
            href="#formulaire"
            className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 shadow-lg"
          >
            Postuler maintenant
          </a>
        </div>
      </section>

      {/* Avantages */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-gray-900 text-center mb-12">
            Pourquoi rejoindre Kaza ?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                Revenus attractifs
              </h3>
              <p className="text-gray-600">
                Fixez vos tarifs et augmentez vos revenus grâce à un flux constant de clients
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                Flexibilité totale
              </h3>
              <p className="text-gray-600">
                Choisissez vos horaires et gérez votre emploi du temps comme vous le souhaitez
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                Assurance incluse
              </h3>
              <p className="text-gray-600">
                Bénéficiez d'une couverture d'assurance pour toutes vos interventions
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                Formation gratuite
              </h3>
              <p className="text-gray-600">
                Accédez à des formations pour améliorer vos compétences et votre service
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                Paiements rapides
              </h3>
              <p className="text-gray-600">
                Recevez vos paiements rapidement via Orange Money, Wave ou virement
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Check className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                Support dédié
              </h3>
              <p className="text-gray-600">
                Une équipe à votre écoute pour vous accompagner au quotidien
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Critères */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-cream">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-gray-900 text-center mb-12">
            Qui peut rejoindre Kaza ?
          </h2>
          
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-display font-bold text-gray-900 mb-6">
              Nous recherchons des professionnels :
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Check className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">
                  <strong>Qualifiés</strong> - Avec une expérience dans votre domaine (ménage, bricolage, jardinage, plomberie, électricité, etc.)
                </span>
              </li>
              <li className="flex items-start">
                <Check className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">
                  <strong>Fiables</strong> - Ponctuel(le), sérieux(se) et professionnel(le)
                </span>
              </li>
              <li className="flex items-start">
                <Check className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">
                  <strong>Orientés service client</strong> - Avec un excellent sens du relationnel
                </span>
              </li>
              <li className="flex items-start">
                <Check className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">
                  <strong>Disponibles</strong> - Prêt(e) à accepter des missions régulièrement
                </span>
              </li>
              <li className="flex items-start">
                <Check className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">
                  <strong>Basés à Dakar</strong> - Résidant dans la région de Dakar et ses environs
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-gray-900 text-center mb-12">
            Comment ça marche ?
          </h2>
          
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-gray-900 mb-2">
                  Postulez en ligne
                </h3>
                <p className="text-gray-600">
                  Remplissez le formulaire ci-dessous avec vos informations et votre expérience
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-gray-900 mb-2">
                  Entretien téléphonique
                </h3>
                <p className="text-gray-600">
                  Notre équipe vous contactera pour un premier échange et vérifier votre profil
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-gray-900 mb-2">
                  Vérification et formation
                </h3>
                <p className="text-gray-600">
                  Vérification de vos documents et formation à l'utilisation de la plateforme
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                4
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-gray-900 mb-2">
                  Commencez à travailler !
                </h3>
                <p className="text-gray-600">
                  Recevez vos premières missions et commencez à gagner de l'argent
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulaire */}
      <section id="formulaire" className="px-4 sm:px-6 lg:px-8 py-16 bg-cream">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-gray-900 text-center mb-8">
            Postulez maintenant
          </h2>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="prenom" className="block text-sm font-semibold text-gray-700 mb-2">
                    Prénom *
                  </label>
                  <input
                    id="prenom"
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="nom" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nom *
                  </label>
                  <input
                    id="nom"
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="telephone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Téléphone *
                </label>
                <input
                  id="telephone"
                  type="tel"
                  required
                  placeholder="+221 XX XXX XX XX"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="domaine" className="block text-sm font-semibold text-gray-700 mb-2">
                  Domaine d'expertise *
                </label>
                <select
                  id="domaine"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Sélectionnez...</option>
                  <option value="menage">Ménage</option>
                  <option value="bricolage">Bricolage</option>
                  <option value="jardinage">Jardinage</option>
                  <option value="plomberie">Plomberie</option>
                  <option value="electricite">Électricité</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm font-semibold text-gray-700 mb-2">
                  Années d'expérience *
                </label>
                <select
                  id="experience"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Sélectionnez...</option>
                  <option value="0-1">Moins d'1 an</option>
                  <option value="1-3">1 à 3 ans</option>
                  <option value="3-5">3 à 5 ans</option>
                  <option value="5+">Plus de 5 ans</option>
                </select>
              </div>

              <div>
                <label htmlFor="presentation" className="block text-sm font-semibold text-gray-700 mb-2">
                  Parlez-nous de vous et de votre expérience *
                </label>
                <textarea
                  id="presentation"
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Décrivez votre parcours, vos compétences et pourquoi vous souhaitez rejoindre Kaza..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-white py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Envoyer ma candidature
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
