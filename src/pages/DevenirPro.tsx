import { Check, TrendingUp, Shield, Users, Briefcase } from 'lucide-react'
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
            Développez votre activité, travaillez sereinement
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Kaza, c'est bien plus qu'une plateforme. C'est un vrai partenaire pour les artisans sérieux et qualifiés. On vous apporte des missions, on vous facilite la vie, vous gardez le contrôle.
          </p>
          <a
            href="https://tally.so/r/3qN7DO"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 shadow-lg"
          >
            Rejoignez maintenant le réseau Kaza
          </a>
        </div>
      </section>

      {/* Avantages */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-blue-dark text-center mb-12">
            Ce que vous gagnez en rejoignant Kaza
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-blue-dark mb-3">
                Des clients sans démarcher
              </h3>
              <p className="text-gray-600">
                Kaza vous apporte des demandes qualifiées, dans votre zone d'intervention.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-blue-dark mb-3">
                Une application simple pour tout gérer
              </h3>
              <p className="text-gray-600">
                Devis, rappels, historique des missions, reçus, suivi de vos paiements… tout est centralisé.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-blue-dark mb-3">
                Des revenus réguliers et sécurisés
              </h3>
              <p className="text-gray-600">
                Vous êtes payé directement par le client. Pas d'intermédiaire, pas de mauvaise surprise.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-blue-dark mb-3">
                Une vraie valorisation de votre travail
              </h3>
              <p className="text-gray-600">
                Votre profil est mis en avant, vous recevez des notes clients, vous progressez dans le réseau.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Critères */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-cream">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-blue-dark text-center mb-12">
            Ce qu'on attend de vous
          </h2>
          
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <ul className="space-y-4">
              <li className="flex items-start">
                <Check className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">
                  <strong>Du sérieux, du professionnalisme, du respect</strong> - Vous intervenez à l'heure, vous travaillez proprement, vous tenez vos engagements.
                </span>
              </li>
              <li className="flex items-start">
                <Check className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">
                  <strong>Une vraie envie de progresser</strong> - Vous suivez les formations Kaza, vous appliquez les standards qualité.
                </span>
              </li>
              <li className="flex items-start">
                <Check className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">
                  <strong>L'utilisation de l'app Kaza pour vos missions</strong> - Pour garantir un bon suivi, tout passe par l'application : photos, devis, suivi du temps, reçus.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-blue-dark text-center mb-12">
            Comment ça marche ?
          </h2>
          
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-blue-dark mb-2">
                  Vous postulez via le formulaire ci-dessous
                </h3>
                <p className="text-gray-600">
                  Remplissez le formulaire avec vos informations et votre expérience
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-blue-dark mb-2">
                  On étudie votre profil et on vous contacte
                </h3>
                <p className="text-gray-600">
                  Notre équipe examine votre candidature et vous contacte pour un premier échange
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-blue-dark mb-2">
                  Vous signez nos Conditions d'utilisation et vous suivez une formation Kaza
                </h3>
                <p className="text-gray-600">
                  Acceptation des conditions et formation à l'utilisation de l'application
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                4
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-blue-dark mb-2">
                  Votre compte est activé → Vous commencez à recevoir des missions
                </h3>
                <p className="text-gray-600">
                  Votre profil est en ligne et vous commencez à recevoir des demandes de clients
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-cream">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-display font-bold text-blue-dark mb-6">
            Vous êtes motivé, sérieux et compétent ?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Rejoignez maintenant le réseau Kaza
          </p>
          <a
            href="https://tally.so/r/3qN7DO"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 shadow-lg"
          >
            Postuler maintenant
          </a>
        </div>
      </section>
    </div>
  )
}
