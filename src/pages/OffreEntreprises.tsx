import { Building2, Users, Clock, Shield, TrendingUp, CheckCircle } from 'lucide-react'

export default function OffreEntreprises() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-br from-blue to-blue-dark text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-display font-bold mb-6">
            Solutions pour Entreprises
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Des services professionnels adaptés aux besoins de votre entreprise à Dakar
          </p>
          <a
            href="https://commander.aveckaza.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 shadow-lg"
          >
            Demander un devis
          </a>
        </div>
      </section>

      {/* Avantages Entreprises */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-gray-900 text-center mb-12">
            Pourquoi choisir Kaza pour votre entreprise ?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <Building2 className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                Service dédié
              </h3>
              <p className="text-gray-600">
                Un gestionnaire de compte dédié pour gérer tous vos besoins et assurer un service personnalisé.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                Tarifs préférentiels
              </h3>
              <p className="text-gray-600">
                Bénéficiez de tarifs avantageux adaptés au volume de vos besoins et à la fréquence des interventions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <Clock className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                Disponibilité étendue
              </h3>
              <p className="text-gray-600">
                Interventions possibles en dehors des heures d'ouverture pour ne pas perturber votre activité.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                Professionnels vérifiés
              </h3>
              <p className="text-gray-600">
                Tous nos professionnels sont formés, vérifiés et assurés pour garantir la sécurité de vos locaux.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                Équipes dédiées
              </h3>
              <p className="text-gray-600">
                Possibilité d'avoir les mêmes professionnels pour assurer la continuité et la qualité du service.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <CheckCircle className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                Facturation simplifiée
              </h3>
              <p className="text-gray-600">
                Factures mensuelles consolidées et rapports détaillés pour faciliter votre gestion comptable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services pour Entreprises */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-cream">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-gray-900 text-center mb-12">
            Nos services pour entreprises
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
                Nettoyage de bureaux
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Nettoyage quotidien, hebdomadaire ou mensuel</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Entretien des espaces communs et sanitaires</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Nettoyage de vitres et surfaces vitrées</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Désinfection et assainissement</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-4xl mb-4">🏪</div>
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
                Entretien de commerces
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Nettoyage de boutiques et showrooms</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Entretien de restaurants et cafés</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Nettoyage après fermeture</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Services adaptés à votre activité</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
                Maintenance et bricolage
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Petites réparations et maintenance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Installation et montage de mobilier</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Plomberie et électricité</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Interventions en urgence</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-4xl mb-4">🌳</div>
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
                Espaces verts
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Entretien de jardins d'entreprise</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Tonte et arrosage</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Taille et élagage</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Aménagement paysager</span>
                </li>
              </ul>
            </div>
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
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-gray-900 mb-2">
                  Contactez-nous
                </h3>
                <p className="text-gray-600">
                  Appelez-nous ou remplissez notre formulaire en ligne pour nous parler de vos besoins.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-gray-900 mb-2">
                  Audit gratuit
                </h3>
                <p className="text-gray-600">
                  Nous visitons vos locaux pour évaluer vos besoins et vous proposer une solution sur mesure.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-gray-900 mb-2">
                  Devis personnalisé
                </h3>
                <p className="text-gray-600">
                  Recevez un devis détaillé adapté à votre budget et à vos exigences.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                4
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-gray-900 mb-2">
                  Démarrage du service
                </h3>
                <p className="text-gray-600">
                  Une fois le contrat signé, nous démarrons les interventions selon le planning convenu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-display font-bold mb-6">
            Prêt à améliorer l'entretien de vos locaux ?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contactez-nous pour un audit gratuit et un devis personnalisé
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+221787891010"
              className="bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded-full font-semibold transition-colors text-lg"
            >
              Appelez-nous
            </a>
            <a
              href="mailto:contact@aveckaza.com"
              className="bg-blue hover:bg-blue-dark text-white border-2 border-white px-8 py-4 rounded-full font-semibold transition-colors text-lg"
            >
              Envoyez un email
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
