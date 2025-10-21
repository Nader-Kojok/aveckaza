import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <header 
      className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm border-b border-gray-100"
    >
      {/* Skip to main content link for keyboard users */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded"
      >
        Aller au contenu principal
      </a>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img 
                src="/logo_kaza.svg" 
                alt="Kaza" 
                className="h-8 sm:h-12 w-auto max-h-20 object-contain" 
                fetchPriority="high"
                loading="eager"
              />
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Navigation principale">
            <a 
              href="/services" 
              className={`text-base font-medium transition-colors ${
                location.pathname === '/services' 
                  ? 'text-primary font-semibold' 
                  : 'text-gray-700 hover:text-primary'
              }`}
            >
              Services
            </a>
            <a 
              href="/club-kaza" 
              className={`text-base font-medium transition-colors ${
                location.pathname === '/club-kaza' 
                  ? 'text-primary font-semibold' 
                  : 'text-gray-700 hover:text-primary'
              }`}
            >
              Club Kaza
            </a>
            <a 
              href="/blog" 
              className={`text-base font-medium transition-colors ${
                location.pathname.startsWith('/blog') 
                  ? 'text-primary font-semibold' 
                  : 'text-gray-700 hover:text-primary'
              }`}
            >
              Blog
            </a>
            <a 
              href="/offre-entreprises" 
              className={`text-base font-medium transition-colors ${
                location.pathname === '/offre-entreprises' 
                  ? 'text-primary font-semibold' 
                  : 'text-gray-700 hover:text-primary'
              }`}
            >
              Entreprises
            </a>
            <a 
              href="/entreprise" 
              className={`text-base font-medium transition-colors ${
                location.pathname === '/entreprise' 
                  ? 'text-primary font-semibold' 
                  : 'text-gray-700 hover:text-primary'
              }`}
            >
              À propos
            </a>
            <a 
              href="/contact" 
              className={`text-base font-medium transition-colors ${
                location.pathname === '/contact' 
                  ? 'text-primary font-semibold' 
                  : 'text-gray-700 hover:text-primary'
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
              className="bg-primary hover:bg-primary-dark text-white px-4 sm:px-6 py-2 rounded-full text-sm font-semibold transition-all hover:scale-105 inline-flex items-center min-h-[44px] shadow-md"
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
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 animate-in slide-in-from-top duration-200">
          <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1" aria-label="Navigation mobile">
            <a 
              href="/services" 
              className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors min-h-[44px] ${
                location.pathname === '/services'
                  ? 'text-primary bg-primary/10 font-semibold'
                  : 'text-gray-700 hover:text-primary hover:bg-gray-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="/club-kaza" 
              className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors min-h-[44px] ${
                location.pathname === '/club-kaza'
                  ? 'text-primary bg-primary/10 font-semibold'
                  : 'text-gray-700 hover:text-primary hover:bg-gray-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Club Kaza
            </a>
            <a 
              href="/blog" 
              className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors min-h-[44px] ${
                location.pathname.startsWith('/blog')
                  ? 'text-primary bg-primary/10 font-semibold'
                  : 'text-gray-700 hover:text-primary hover:bg-gray-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </a>
            <a 
              href="/offre-entreprises" 
              className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors min-h-[44px] ${
                location.pathname === '/offre-entreprises'
                  ? 'text-primary bg-primary/10 font-semibold'
                  : 'text-gray-700 hover:text-primary hover:bg-gray-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Entreprises
            </a>
            <a 
              href="/entreprise" 
              className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors min-h-[44px] ${
                location.pathname === '/entreprise'
                  ? 'text-primary bg-primary/10 font-semibold'
                  : 'text-gray-700 hover:text-primary hover:bg-gray-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              À propos
            </a>
            <a 
              href="/contact" 
              className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors min-h-[44px] ${
                location.pathname === '/contact'
                  ? 'text-primary bg-primary/10 font-semibold'
                  : 'text-gray-700 hover:text-primary hover:bg-gray-50'
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
