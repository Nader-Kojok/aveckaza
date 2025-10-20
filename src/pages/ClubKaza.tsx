import { Gift, Users, Star, Award, TrendingUp, Sparkles, MessageCircle, Mail } from 'lucide-react'
import SEO from '../components/SEO'

export default function ClubKaza() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LoyaltyProgram",
    "name": "Club Kaza",
    "description": "Programme de fidélité et de parrainage pour services à domicile",
    "provider": {
      "@type": "Organization",
      "name": "Kaza Sénégal"
    },
    "url": "https://aveckaza.com/club-kaza"
  }

  const levels = [
    {
      name: 'Bronze',
      points: '0 - 500',
      color: 'from-orange-400 to-orange-600',
      benefits: ['5% de réduction', 'Accès aux offres spéciales']
    },
    {
      name: 'Argent',
      points: '501 - 1500',
      color: 'from-gray-300 to-gray-500',
      benefits: ['10% de réduction', 'Priorité sur les réservations', 'Support prioritaire']
    },
    {
      name: 'Or',
      points: '1501 - 3000',
      color: 'from-yellow-400 to-yellow-600',
      benefits: ['15% de réduction', 'Service VIP', '1 service gratuit/mois', 'Accès anticipé aux nouveautés']
    },
    {
      name: 'Platine',
      points: '3000+',
      color: 'from-purple-400 to-purple-600',
      benefits: ['20% de réduction', 'Concierge dédié', '2 services gratuits/mois', 'Événements exclusifs']
    }
  ]

  const howToEarnPoints = [
    { icon: '🛒', title: 'Réservations', points: '10 points', description: 'Pour chaque 1000 FCFA dépensé' },
    { icon: '👥', title: 'Parrainage', points: '500 points', description: 'Quand votre filleul fait sa 1ère réservation' },
    { icon: '⭐', title: 'Avis', points: '50 points', description: 'Pour chaque avis laissé' },
    { icon: '🎂', title: 'Anniversaire', points: '200 points', description: 'Cadeau d\'anniversaire' },
  ]

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Club Kaza - Programme de Fidélité et Parrainage"
        description="Rejoignez le Club Kaza et profitez de réductions, points de fidélité et bonus de parrainage. Programme de récompenses pour services à domicile Dakar."
        keywords="Club Kaza, programme fidélité Dakar, parrainage services domicile, réductions Kaza, points fidélité"
        canonical="/club-kaza"
        structuredData={structuredData}
      />
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 pt-32 pb-16 bg-gradient-to-br from-primary via-primary-dark to-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-5 h-5" />
            <span className="font-semibold">Programme de fidélité</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-display font-bold mb-6">
            Bienvenue au Club Kaza
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Gagnez des points à chaque réservation, parrainez vos proches et profitez d'avantages exclusifs !
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/221787891010?text=Bonjour%2C%20je%20souhaite%20rejoindre%20le%20Club%20Kaza"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Rejoindre via WhatsApp
            </a>
            <a
              href="mailto:contact@aveckaza.com?subject=Inscription%20Club%20Kaza"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:bg-white/20"
            >
              <Mail className="w-5 h-5" />
              Rejoindre par Email
            </a>
          </div>
        </div>
      </section>

      {/* Avantages du parrainage */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-cream to-white rounded-3xl p-8 shadow-lg border border-gray-200">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="bg-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center">
                  <Gift className="w-10 h-10 text-primary" />
                </div>
              </div>
              
              <div className="flex-1">
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">
                  Programme de parrainage
                </h2>
                <p className="text-gray-600 mb-4">
                  Partagez Kaza avec vos amis et votre famille. Vous recevez <strong className="text-primary">500 points</strong> quand ils font leur première réservation, et ils reçoivent <strong className="text-primary">10% de réduction</strong> !
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="bg-primary/5 px-4 py-2 rounded-full">
                    <span className="text-primary font-semibold">👤 Vous : +500 points</span>
                  </div>
                  <div className="bg-secondary/10 px-4 py-2 rounded-full">
                    <span className="text-secondary font-semibold">👥 Votre ami : -10%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comment gagner des points */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Comment gagner des points ?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Accumulez des points à chaque interaction avec Kaza et débloquez des récompenses exclusives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howToEarnPoints.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-display font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <div className="text-2xl font-bold text-primary mb-2">
                  {item.points}
                </div>
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Niveaux de fidélité */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Niveaux de fidélité
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Plus vous utilisez Kaza, plus vous débloquez d'avantages exclusifs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {levels.map((level, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:scale-105 transition-transform">
                <div className={`bg-gradient-to-br ${level.color} p-6 text-white`}>
                  <Award className="w-12 h-12 mb-3" />
                  <h3 className="text-2xl font-display font-bold mb-2">
                    {level.name}
                  </h3>
                  <p className="text-white/90 text-sm">
                    {level.points} points
                  </p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {level.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <Star className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistiques */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-blue text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-4">
                <Users className="w-8 h-8" />
              </div>
              <div className="text-4xl font-display font-bold mb-2">5000+</div>
              <div className="text-white/80">Membres actifs</div>
            </div>
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-4">
                <TrendingUp className="w-8 h-8" />
              </div>
              <div className="text-4xl font-display font-bold mb-2">2M+</div>
              <div className="text-white/80">Points distribués</div>
            </div>
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-4">
                <Gift className="w-8 h-8" />
              </div>
              <div className="text-4xl font-display font-bold mb-2">10000+</div>
              <div className="text-white/80">Récompenses offertes</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
            Prêt à rejoindre le Club Kaza ?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Contactez-nous dès maintenant pour obtenir votre carte de membre et commencer à accumuler des points !
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/221787891010?text=Bonjour%2C%20je%20souhaite%20rejoindre%20le%20Club%20Kaza"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Rejoindre maintenant
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
