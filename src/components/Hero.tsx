export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 
          className="font-display font-bold text-gray-900 mb-6 leading-tight"
          style={{ fontSize: 'clamp(2.5rem, 4.5vw, 4.5rem)' }}
        >
          Des techniciens de confiance, simplement!
        </h1>
        <p 
          className="text-gray-600 max-w-3xl mx-auto mb-8"
          style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.5rem)' }}
        >
          Notre promesse : des techniciens fiables et qualifiés qui interviennent au moment où vous en avez besoin.
        </p>
        
        <div className="mt-12 flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
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
              className="flex flex-col items-center justify-center w-20 sm:w-24 hover:scale-105 transition-transform cursor-pointer"
            >
              <div className="text-3xl sm:text-4xl mb-2">{service.icon}</div>
              <span className="text-sm sm:text-base text-gray-700 text-center">{service.label}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a 
              href="https://commander.aveckaza.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-primary hover:bg-primary-dark text-white px-12 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 shadow-lg"
            >
              Réserver un service
            </a>
            <a 
              href="/offre-entreprises" 
              className="bg-white hover:bg-gray-50 text-primary border-2 border-primary px-12 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 shadow-lg"
            >
              Offre Entreprises
            </a>
          </div>
          
          <p className="text-center text-gray-700">
            Vous êtes un professionnel ?{' '}
            <a 
              href="https://aveckaza.com/devenir-pro/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:underline"
            >
              Postuler maintenant
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
