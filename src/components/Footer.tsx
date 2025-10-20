import { Facebook, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <img src="/logo_kaza.png" alt="Kaza" className="!h-12 w-auto max-h-12 mb-4" />
            <p className="text-white/80 text-sm mb-4">
              Tous les services dont votre maison a besoin, à portée de main.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61570831864851" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/kaza.sn" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="/services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="/#comment-ca-marche" className="hover:text-white transition-colors">Comment ça marche</a></li>
              <li><a href="/offre-entreprises" className="hover:text-white transition-colors">Offre Entreprises</a></li>
              <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="/devenir-pro" className="hover:text-white transition-colors">Devenir pro</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold mb-4">À Propos</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="/entreprise" className="hover:text-white transition-colors">L'entreprise</a></li>
              <li><a href="/club-kaza" className="hover:text-white transition-colors">Club Kaza</a></li>
              <li><a href="/devenir-pro" className="hover:text-white transition-colors">Devenir pro</a></li>
              <li><a href="/faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="/cgv" className="hover:text-white transition-colors">CGV</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="mailto:contact@aveckaza.com" className="hover:text-white transition-colors">contact@aveckaza.com</a></li>
              <li><a href="tel:+221787891010" className="hover:text-white transition-colors">+221 78 789 10 10</a></li>
              <li className="pt-2">Dakar, Sénégal 🇸🇳</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/60 text-center md:text-left">
              © 2025 Kaza Sénégal. Tous droits réservés.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-sm text-white/60">
              <a href="mailto:contact@aveckaza.com" className="hover:text-white/80 transition-colors min-h-[44px] flex items-center">contact@aveckaza.com</a>
              <span className="hidden sm:inline">•</span>
              <a href="tel:+221787891010" className="hover:text-white/80 transition-colors min-h-[44px] flex items-center">+221 78 789 10 10</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
