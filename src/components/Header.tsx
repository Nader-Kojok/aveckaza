export default function Header() {
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
                className="h-6 sm:h-12 w-auto max-h-16 object-contain" 
                fetchPriority="high"
                loading="eager"
              />
            </a>
          </div>

          <div className="flex items-center">
            <a 
              href="https://commander.aveckaza.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary-dark text-white px-4 sm:px-6 py-2 rounded-full text-sm font-semibold transition-all hover:scale-105 inline-flex items-center min-h-[44px] shadow-md"
            >
              Réserver
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
