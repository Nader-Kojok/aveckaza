import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="fixed top-0 left-0 right-0 bg-blue/95 backdrop-blur-md z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img src="/logo_kaza.png" alt="Kaza" className="!h-8 sm:!h-10 w-auto max-h-10" />
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="/services" 
              className={`text-base font-medium transition-colors ${
                location.pathname === '/services' 
                  ? 'text-primary' 
                  : 'text-white/90 hover:text-primary'
              }`}
            >
              Services
            </a>
            <a 
              href="/club-kaza" 
              className={`text-base font-medium transition-colors ${
                location.pathname === '/club-kaza' 
                  ? 'text-primary' 
                  : 'text-white/90 hover:text-primary'
              }`}
            >
              Club Kaza
            </a>
            <a 
              href="/blog" 
              className={`text-base font-medium transition-colors ${
                location.pathname.startsWith('/blog') 
                  ? 'text-primary' 
                  : 'text-white/90 hover:text-primary'
              }`}
            >
              Blog
            </a>
            <a 
              href="/offre-entreprises" 
              className={`text-base font-medium transition-colors ${
                location.pathname === '/offre-entreprises' 
                  ? 'text-primary' 
                  : 'text-white/90 hover:text-primary'
              }`}
            >
              Entreprises
            </a>
            <a 
              href="/entreprise" 
              className={`text-base font-medium transition-colors ${
                location.pathname === '/entreprise' 
                  ? 'text-primary' 
                  : 'text-white/90 hover:text-primary'
              }`}
            >
              À propos
            </a>
            <a 
              href="/contact" 
              className={`text-base font-medium transition-colors ${
                location.pathname === '/contact' 
                  ? 'text-primary' 
                  : 'text-white/90 hover:text-primary'
              }`}
            >
              Contact
            </a>
          </nav>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <a 
              href="https://commander.aveckaza.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary-dark text-white px-4 sm:px-6 py-2 rounded-full text-sm font-semibold transition-colors inline-flex items-center min-h-[44px]"
            >
              Réserver
            </a>
            {/* Mobile Menu Button - minimum 44x44 touch target */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-dark border-t border-white/10 animate-in slide-in-from-top duration-200">
          <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            <a 
              href="/services" 
              className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors min-h-[44px] ${
                location.pathname === '/services'
                  ? 'text-primary bg-white/10'
                  : 'text-white/90 hover:text-primary hover:bg-white/5'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="/club-kaza" 
              className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors min-h-[44px] ${
                location.pathname === '/club-kaza'
                  ? 'text-primary bg-white/10'
                  : 'text-white/90 hover:text-primary hover:bg-white/5'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Club Kaza
            </a>
            <a 
              href="/blog" 
              className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors min-h-[44px] ${
                location.pathname.startsWith('/blog')
                  ? 'text-primary bg-white/10'
                  : 'text-white/90 hover:text-primary hover:bg-white/5'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </a>
            <a 
              href="/offre-entreprises" 
              className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors min-h-[44px] ${
                location.pathname === '/offre-entreprises'
                  ? 'text-primary bg-white/10'
                  : 'text-white/90 hover:text-primary hover:bg-white/5'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Entreprises
            </a>
            <a 
              href="/entreprise" 
              className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors min-h-[44px] ${
                location.pathname === '/entreprise'
                  ? 'text-primary bg-white/10'
                  : 'text-white/90 hover:text-primary hover:bg-white/5'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              À propos
            </a>
            <a 
              href="/contact" 
              className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors min-h-[44px] ${
                location.pathname === '/contact'
                  ? 'text-primary bg-white/10'
                  : 'text-white/90 hover:text-primary hover:bg-white/5'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
