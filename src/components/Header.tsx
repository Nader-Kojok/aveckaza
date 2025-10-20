import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
            <a href="/services" className="text-base font-medium text-white/90 hover:text-primary transition-colors">
              Services
            </a>
            <a href="/club-kaza" className="text-base font-medium text-white/90 hover:text-primary transition-colors">
              Club Kaza
            </a>
            <a href="/blog" className="text-base font-medium text-white/90 hover:text-primary transition-colors">
              Blog
            </a>
            <a href="/offre-entreprises" className="text-base font-medium text-white/90 hover:text-primary transition-colors">
              Entreprises
            </a>
            <a href="/entreprise" className="text-base font-medium text-white/90 hover:text-primary transition-colors">
              À propos
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
              className="block px-4 py-3 text-base font-medium text-white/90 hover:text-primary hover:bg-white/5 rounded-lg transition-colors min-h-[44px]"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="/club-kaza" 
              className="block px-4 py-3 text-base font-medium text-white/90 hover:text-primary hover:bg-white/5 rounded-lg transition-colors min-h-[44px]"
              onClick={() => setIsMenuOpen(false)}
            >
              Club Kaza
            </a>
            <a 
              href="/blog" 
              className="block px-4 py-3 text-base font-medium text-white/90 hover:text-primary hover:bg-white/5 rounded-lg transition-colors min-h-[44px]"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </a>
            <a 
              href="/offre-entreprises" 
              className="block px-4 py-3 text-base font-medium text-white/90 hover:text-primary hover:bg-white/5 rounded-lg transition-colors min-h-[44px]"
              onClick={() => setIsMenuOpen(false)}
            >
              Entreprises
            </a>
            <a 
              href="/entreprise" 
              className="block px-4 py-3 text-base font-medium text-white/90 hover:text-primary hover:bg-white/5 rounded-lg transition-colors min-h-[44px]"
              onClick={() => setIsMenuOpen(false)}
            >
              À propos
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
