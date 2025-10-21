export default function Hero() {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h1 
          className="font-display font-bold text-blue-dark mb-12 leading-tight text-3xl sm:text-4xl lg:text-5xl"
        >
          Kaza remet de <span className="underline decoration-primary decoration-4">l'ordre</span> et de la <span className="underline decoration-primary decoration-4">confiance</span>
          <br />
          dans les services à domicile.
        </h1>
        
        {/* Service Icons Grid - Two rows */}
        <div className="mt-12 mb-12">
          {/* First Row - 7 items */}
          <div className="grid grid-cols-4 sm:grid-cols-7 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto mb-8">
            {[
              { icon: '/services_icons/icons8-plumbing-128.png', label: 'Plomberie &\nétanchéité' },
              { icon: '/services_icons/icons8-saw-128 (1).png', label: 'Menuiserie bois' },
              { icon: '/services_icons/icons8-fridge-128.png', label: 'Réparation\nd\'électroménager' },
              { icon: '/services_icons/icons8-light-on-128.png', label: 'Électricité' },
              { icon: '/services_icons/icons8-key-security-128.png', label: 'Serrurerie' },
              { icon: '/services_icons/icons8-air-conditioner-128.png', label: 'Froid &\nclimatisation' },
              { icon: '/services_icons/icons8-recliner-128.png', label: 'Tapisserie' },
            ].map((service) => (
              <div
                key={service.label}
                className="flex flex-col items-center justify-center hover:scale-105 transition-transform cursor-pointer"
              >
                <img 
                  src={service.icon} 
                  alt={service.label.replaceAll('\n', ' ')}
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mb-2 object-contain"
                />
                <span className="text-[10px] sm:text-xs text-blue-dark text-center leading-tight whitespace-pre-line font-medium">{service.label}</span>
              </div>
            ))}
          </div>
          
          {/* Second Row - 5 items */}
          <div className="grid grid-cols-5 gap-4 sm:gap-6 md:gap-8 max-w-3xl mx-auto">
            {[
              { icon: '/services_icons/icons8-drill-128.png', label: 'Installation' },
              { icon: '/services_icons/icons8-tree-128.png', label: 'Jardinage' },
              { icon: '/services_icons/icons8-bullet-camera-128.png', label: 'Sécurité' },
              { icon: '/services_icons/icons8-paint-roller-128.png', label: 'Peinture' },
              { icon: '/services_icons/icons8-vacuum-cleaner-128.png', label: 'Nettoyage' },
            ].map((service) => (
              <div
                key={service.label}
                className="flex flex-col items-center justify-center hover:scale-105 transition-transform cursor-pointer"
              >
                <img 
                  src={service.icon} 
                  alt={service.label}
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mb-2 object-contain"
                />
                <span className="text-[10px] sm:text-xs text-blue-dark text-center leading-tight font-medium">{service.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12 mb-8">
          <a 
            href="https://commander.aveckaza.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-primary hover:bg-primary-dark text-white px-10 sm:px-12 py-3.5 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all hover:scale-105 shadow-lg inline-flex items-center justify-center min-h-[56px]"
          >
            Réserver
          </a>
        </div>
        
        <p className="text-center text-gray-700 text-base sm:text-lg">
          Vous êtes artisan ?{' '}
          <a 
            href="/devenir-pro" 
            className="text-blue-dark font-semibold hover:underline underline decoration-blue-dark"
          >
            Candidatez maintenant
          </a>
        </p>
      </div>
    </section>
  )
}
