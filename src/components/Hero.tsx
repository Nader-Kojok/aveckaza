export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 
          className="font-display font-bold text-gray-900 mb-6 leading-tight text-4xl sm:text-5xl lg:text-6xl xl:text-7xl"
        >
          Des techniciens de confiance, simplement!
        </h1>
        <p 
          className="text-gray-600 max-w-3xl mx-auto mb-8 text-lg sm:text-xl lg:text-2xl"
        >
          Notre promesse : des techniciens fiables et qualifiés qui interviennent au moment où vous en avez besoin.
        </p>
        
        {/* Service Icons Grid - Better responsive breakpoints */}
        <div className="mt-12 grid grid-cols-4 sm:grid-cols-4 md:grid-cols-8 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {[
            { icon: '🧹', label: 'Ménage' },
            { icon: '🔧', label: 'Bricolage' },
            { icon: '🌿', label: 'Jardinage' },
            { icon: '🚗', label: 'Lavage auto' },
            { icon: '🏠', label: 'Déménagement' },
            { icon: '🧸', label: 'Lessive' },
            { icon: '🍳', label: 'Cuisine' },
            { icon: '❤️', label: 'Aide à domicile' },
          ].map((service) => (
            <div
              key={service.label}
              className="flex flex-col items-center justify-center min-h-[80px] hover:scale-105 transition-transform cursor-pointer p-2"
            >
              <div className="text-3xl sm:text-4xl mb-2">{service.icon}</div>
              <span className="text-xs sm:text-sm text-gray-700 text-center leading-tight">{service.label}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons - Better mobile wrapping and touch targets */}
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center mb-8">
            <a 
              href="https://commander.aveckaza.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-primary hover:bg-primary-dark text-white px-8 sm:px-12 py-4 rounded-full text-base sm:text-lg font-semibold transition-all hover:scale-105 shadow-lg text-center min-h-[56px] flex items-center justify-center"
            >
              Réserver un service
            </a>
            <a 
              href="/offre-entreprises" 
              className="bg-white hover:bg-gray-50 text-primary border-2 border-primary px-8 sm:px-12 py-4 rounded-full text-base sm:text-lg font-semibold transition-all hover:scale-105 shadow-lg text-center min-h-[56px] flex items-center justify-center"
            >
              Offre Entreprises
            </a>
          </div>
          
          <p className="text-center text-gray-700 text-base sm:text-lg px-4">
            Vous êtes un professionnel ?{' '}
            <a 
              href="https://aveckaza.com/devenir-pro/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:underline inline-block min-h-[44px] leading-[44px]"
            >
              Postuler maintenant
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
