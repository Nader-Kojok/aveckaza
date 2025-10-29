import { Gift, Users, Sparkles, Camera, AtSign } from 'lucide-react'
import Seo from '../components/SEO'

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


  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Club Kaza - Programme de Parrainage et Récompenses"
        description="Rejoignez le Club Kaza : parrainez vos proches et recevez 10% en bons d'achat, partagez votre expérience sur les réseaux sociaux et gagnez des récompenses. Communauté de clients satisfaits à Dakar."
        keywords="Club Kaza, programme parrainage Dakar, récompenses services domicile, bons d'achat Kaza, parrainage Sénégal"
        canonical="/club-kaza"
        structuredData={structuredData}
      />
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 pt-32 pb-16 bg-gradient-to-br from-blue to-blue-dark text-white relative overflow-hidden">
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
            Chez Kaza, nous croyons que le bouche-à-oreille et la confiance valent plus que n'importe quelle publicité. Le Club Kaza est notre façon de remercier nos clients les plus fidèles et ceux qui partagent leur expérience.
          </p>
          
          <a
            href="https://commander.aveckaza.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 shadow-lg"
          >
            <Users className="w-5 h-5" />
            Créer mon compte
          </a>
        </div>
      </section>

      {/* Programme de parrainage */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-blue-dark mb-4">
              1. Le programme de parrainage
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Recommandez Kaza à vos proches et gagnez ensemble !
            </p>
          </div>

          <div className="bg-gradient-to-br from-cream to-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-200">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold text-blue-dark mb-3">
                  Comment ça marche ?
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Invitez vos amis, voisins ou collègues à découvrir Kaza</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Lorsqu'ils effectuent leur première commande, vous recevez <strong className="text-primary">10% du montant</strong> en bon d'achat Kaza</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Eux aussi reçoivent <strong className="text-primary">10% du montant</strong> en bon d'achat</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
                  <Gift className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold text-blue-dark mb-3">
                  Vos avantages
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Pas de limite</strong> de parrainage : plus vous partagez Kaza, plus vous cumulez de récompenses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Votre code de parrainage est disponible dans votre espace client</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Ou sur simple demande auprès de notre service client</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue to-blue-dark text-white rounded-2xl p-6 text-center">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-lg font-semibold">
                <div className="flex items-center gap-2">
                  <span className="text-3xl">👤</span>
                  <span>Vous : 10% en bon d'achat</span>
                </div>
                <span className="hidden sm:inline text-2xl">+</span>
                <div className="flex items-center gap-2">
                  <span className="text-3xl">👥</span>
                  <span>Votre filleul : 10% en bon d'achat</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programme de récompenses */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-blue-dark mb-4">
              2. Le programme de récompenses
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Partagez votre expérience et soyez récompensé !
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-200">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="bg-blue w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Camera className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-display font-bold text-blue-dark mb-2">
                  Étape 1
                </h3>
                <p className="text-gray-600">
                  Après une intervention, publiez une photo ou une courte vidéo du résultat en story
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-dark w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <AtSign className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-display font-bold text-blue-dark mb-2">
                  Étape 2
                </h3>
                <p className="text-gray-600">
                  Identifiez <strong className="text-primary">@kaza.sn</strong> dans votre publication sur Instagram ou Facebook
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Gift className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-display font-bold text-blue-dark mb-2">
                  Étape 3
                </h3>
                <p className="text-gray-600">
                  Recevez un bon d'achat Kaza à utiliser ou à offrir
                </p>
              </div>
            </div>

            <div className="bg-primary/10 rounded-2xl p-6 text-center">
              <p className="text-lg text-gray-700 mb-2">
                🎁 <strong>Toutes les publications</strong> reçoivent un bon d'achat Kaza
              </p>
              <p className="text-gray-600">
                Plus la publication est inspirante, plus le bon d'achat est important !
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rejoignez le Club Kaza */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue to-blue-dark text-white rounded-3xl p-8 md:p-12 shadow-xl text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <Users className="w-10 h-10" />
            </div>
            
            <h2 className="text-3xl font-display font-bold mb-4">
              Rejoignez le Club Kaza
            </h2>
            
            <p className="text-xl text-white/90 mb-6">
              Le Club Kaza, c'est plus qu'un programme de fidélité : c'est une communauté de clients satisfaits, fiers de soutenir un service local, fiable et professionnel.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
              <p className="text-lg font-semibold">
                Participez, partagez, inspirez… et profitez d'avantages exclusifs !
              </p>
            </div>

            <a
              href="https://commander.aveckaza.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 shadow-lg"
            >
              <Users className="w-5 h-5" />
              Créer mon compte
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
