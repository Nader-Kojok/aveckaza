import { Menu } from 'lucide-react'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-blue/95 backdrop-blur-md z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/">
              <img src="/logo_kaza.png" alt="Kaza" className="h-12" />
            </a>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/#services" className="text-sm font-medium text-white/90 hover:text-white transition-colors">
              Services
            </a>
            <a href="/club-kaza" className="text-sm font-medium text-white/90 hover:text-white transition-colors">
              Club Kaza
            </a>
            <a href="/offre-entreprises" className="text-sm font-medium text-white/90 hover:text-white transition-colors">
              Entreprises
            </a>
            <a href="/#temoignages" className="text-sm font-medium text-white/90 hover:text-white transition-colors">
              Témoignages
            </a>
            <a href="/entreprise" className="text-sm font-medium text-white/90 hover:text-white transition-colors">
              À propos
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <a 
              href="https://commander.aveckaza.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full text-sm font-semibold transition-colors inline-flex items-center"
            >
              Réserver
            </a>
            <button className="md:hidden">
              <Menu className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
