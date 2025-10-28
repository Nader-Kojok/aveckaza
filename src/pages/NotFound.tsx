import { Home, Search, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream to-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-display font-bold text-primary mb-4">404</h1>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-4">
            Page introuvable
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="/"
            className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 shadow-lg"
          >
            <Home className="w-5 h-5 mr-2" />
            Retour à l'accueil
          </a>
          <a
            href="/en-savoir-plus"
            className="inline-flex items-center justify-center bg-white hover:bg-gray-50 text-primary border-2 border-primary px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 shadow-lg"
          >
            <Search className="w-5 h-5 mr-2" />
            Découvrir nos services
          </a>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
          <h3 className="text-xl font-display font-bold text-gray-900 mb-4">
            Liens utiles
          </h3>
          <div className="grid grid-cols-2 gap-4 text-left">
            <a href="/#services" className="text-primary hover:underline flex items-center">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Nos services
            </a>
            <a href="/faq" className="text-primary hover:underline flex items-center">
              <ArrowLeft className="w-4 h-4 mr-2" />
              FAQ
            </a>
            <a href="/devenir-pro" className="text-primary hover:underline flex items-center">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Devenir pro
            </a>
            <a href="/entreprise" className="text-primary hover:underline flex items-center">
              <ArrowLeft className="w-4 h-4 mr-2" />
              À propos
            </a>
            <a href="mailto:contact@aveckaza.com" className="text-primary hover:underline flex items-center">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Contact
            </a>
          </div>
        </div>

        <div className="mt-8 text-sm text-gray-500">
          <p>Besoin d'aide ? Contactez-nous au <a href="tel:+221787891010" className="text-primary hover:underline font-semibold">+221 78 789 10 10</a></p>
        </div>
      </div>
    </div>
  )
}
