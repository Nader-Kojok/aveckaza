import { Check, Shield, Clock, Users, Award, Sparkles } from 'lucide-react'
import SEO from '../components/SEO'

export default function EnSavoirPlus() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <SEO
        title="En Savoir Plus - Nos Services Détaillés"
        description="Découvrez en détail nos 3 types de services : réservations ponctuelles, placements à temps plein et boutique hygiène. Services à domicile Kaza Dakar."
        keywords="services Kaza détails, réservation services Dakar, placement aide domicile, boutique hygiène Sénégal, comment ça marche Kaza"
        canonical="/en-savoir-plus"
      />
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-display font-bold mb-6">
            Comment fonctionne Kaza ?
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Découvrez notre plateforme et comment nous facilitons l'accès à des services à domicile de qualité
          </p>
        </div>
      </section>

      {/* Processus Simple */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-gray-900 text-center mb-12">
            Réserver un service en 3 étapes
          </h2>
          
          <div className="space-y-12">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-bold text-2xl">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">
                  Choisissez votre service
                </h3>
                <p className="text-gray-700 text-lg mb-4">
                  Sélectionnez parmi notre large gamme de services : ménage, bricolage, jardinage, plomberie, électricité, et bien plus encore.
                </p>
                <div className="bg-cream p-4 rounded-lg">
                  <p className="text-sm text-gray-600">
                    💡 <strong>Astuce :</strong> Vous pouvez réserver plusieurs services en même temps pour plus de commodité.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-bold text-2xl">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">
                  Sélectionnez date et heure
                </h3>
                <p className="text-gray-700 text-lg mb-4">
                  Choisissez le créneau qui vous convient le mieux. Nous proposons des interventions en semaine, le week-end, et même en urgence selon la disponibilité.
                </p>
                <div className="bg-cream p-4 rounded-lg">
                  <p className="text-sm text-gray-600">
                    ⏰ <strong>Flexibilité :</strong> Possibilité d'intervention le jour même selon disponibilité.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-bold text-2xl">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">
                  Confirmez et détendez-vous
                </h3>
                <p className="text-gray-700 text-lg mb-4">
                  Validez votre réservation et recevez une confirmation par SMS et email. Un professionnel qualifié viendra chez vous à l'heure prévue.
                </p>
                <div className="bg-cream p-4 rounded-lg">
                  <p className="text-sm text-gray-600">
                    ✅ <strong>Suivi :</strong> Recevez des notifications à chaque étape de votre réservation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Garanties */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-cream">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-gray-900 text-center mb-12">
            Nos garanties
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                Professionnels vérifiés
              </h3>
              <p className="text-gray-600">
                Tous nos professionnels sont soigneusement sélectionnés, vérifiés et formés. Nous vérifions leurs diplômes, expériences et références.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <Award className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                100% assuré
              </h3>
              <p className="text-gray-600">
                Toutes les interventions sont couvertes par une assurance. Votre tranquillité d'esprit est notre priorité.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <Sparkles className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                Satisfaction garantie
              </h3>
              <p className="text-gray-600">
                Si vous n'êtes pas satisfait, nous intervenons à nouveau gratuitement ou vous remboursons.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <Clock className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                Ponctualité
              </h3>
              <p className="text-gray-600">
                Nos professionnels arrivent à l'heure. En cas de retard, vous êtes immédiatement informé.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                Service client réactif
              </h3>
              <p className="text-gray-600">
                Notre équipe est disponible pour répondre à vos questions et résoudre vos problèmes rapidement.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <Check className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                Paiement sécurisé
              </h3>
              <p className="text-gray-600">
                Plusieurs options de paiement sécurisées : Orange Money, Wave, carte bancaire ou espèces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services détaillés */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-gray-900 text-center mb-12">
            Nos services en détail
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                🧹 Ménage et nettoyage
              </h3>
              <p className="text-gray-700 mb-3">
                Nettoyage complet de votre maison ou appartement : sols, surfaces, salles de bain, cuisine, vitres, et plus encore.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Ménage régulier ou ponctuel</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Grand nettoyage de printemps</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Nettoyage après travaux</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                🔧 Bricolage et réparations
              </h3>
              <p className="text-gray-700 mb-3">
                Petits travaux de bricolage, montage de meubles, fixations murales, et réparations diverses.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Montage de meubles IKEA et autres</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Installation d'étagères et fixations</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Petites réparations domestiques</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                🌿 Jardinage
              </h3>
              <p className="text-gray-700 mb-3">
                Entretien de jardin, taille de haies, tonte de pelouse, et aménagement paysager.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Tonte et entretien de pelouse</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Taille de haies et arbustes</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Plantation et aménagement</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-br from-blue to-blue-dark text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-display font-bold mb-6">
            Prêt à réserver votre premier service ?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Rejoignez des milliers de clients satisfaits à Dakar
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://commander.aveckaza.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold transition-colors text-lg"
            >
              Réserver maintenant
            </a>
            <a
              href="/faq"
              className="bg-white hover:bg-gray-100 text-blue px-8 py-4 rounded-full font-semibold transition-colors text-lg"
            >
              Voir la FAQ
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
