export default function Hero() {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h1 
          className="font-display font-semibold text-blue-dark mb-12 leading-tight text-2xl sm:text-3xl lg:text-4xl"
        >
          Kaza remet de <span className="relative inline-block bg-gradient-to-t from-[#04CBBF] from-0% via-[#04CBBF] via-25% to-transparent to-25%">l'ordre</span> et de la <span className="relative inline-block bg-gradient-to-t from-[#04CBBF] from-0% via-[#04CBBF] via-25% to-transparent to-25%">confiance</span>
          <br />
          dans les services à domicile.
        </h1>
        
        {/* Service Icons Grid - Mobile: 4x4x2, Desktop: 6x4 */}
        <div className="mt-12 mb-12">
          {/* First Row - Mobile: 4 items, Desktop: 6 items */}
          <div className="grid grid-cols-4 sm:grid-cols-6 gap-3 sm:gap-4 md:gap-5 max-w-5xl mx-auto mb-6">
            {[
              { icon: '/services_icons/icons8-plumbing-128.png', label: 'Plomberie &\nétanchéité' },
              { icon: '/services_icons/icons8-paint-roller-128.png', label: 'Peinture' },
              { icon: '/services_icons/icons8-light-on-128.png', label: 'Électricité' },
              { icon: '/services_icons/icons8-air-conditioner-128.png', label: 'Froid &\nclimatisation' },
              { icon: '/services_icons/icons8-key-security-128.png', label: 'Serrurerie', className: 'hidden sm:flex' },
              { icon: '/services_icons/icons8-fridge-128.png', label: 'Réparation\nd\'électroménager', className: 'hidden sm:flex' },
            ].map((service) => (
              <div
                key={service.label}
                className={`flex flex-col items-center justify-center hover:scale-105 transition-transform cursor-pointer ${service.className || ''}`}
              >
                <img 
                  src={service.icon} 
                  alt={service.label.replaceAll('\n', ' ')}
                  className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-2 object-contain"
                />
                <span className="text-xs sm:text-sm text-blue-dark text-center leading-tight whitespace-pre-line font-semibold">{service.label}</span>
              </div>
            ))}
          </div>
          
          {/* Second Row - Mobile: 4 items, Desktop: 4 items */}
          <div className="grid grid-cols-4 gap-3 sm:gap-4 md:gap-5 max-w-2xl mx-auto mb-6">
            {[
              { icon: '/services_icons/icons8-key-security-128.png', label: 'Serrurerie', className: 'sm:hidden' },
              { icon: '/services_icons/icons8-fridge-128.png', label: 'Réparation\nd\'électroménager', className: 'sm:hidden' },
              { icon: '/services_icons/icons8-drill-128.png', label: 'Menuiserie bois &\nmétallique' },
              { icon: '/services_icons/icons8-bullet-camera-128.png', label: 'Sécurité' },
              { icon: '/services_icons/icons8-recliner-128.png', label: 'Tapisserie', className: 'hidden sm:flex' },
              { icon: '/services_icons/icons8-tree-128.png', label: 'Jardinage', className: 'hidden sm:flex' },
            ].map((service) => (
              <div
                key={service.label}
                className={`flex flex-col items-center justify-center hover:scale-105 transition-transform cursor-pointer ${service.className || ''}`}
              >
                <img 
                  src={service.icon} 
                  alt={service.label.replaceAll('\n', ' ')}
                  className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-2 object-contain"
                />
                <span className="text-xs sm:text-sm text-blue-dark text-center leading-tight whitespace-pre-line font-semibold">{service.label}</span>
              </div>
            ))}
          </div>

          {/* Third Row - Mobile only: 2 items centered in 4-column grid */}
          <div className="grid grid-cols-4 gap-3 max-w-2xl mx-auto sm:hidden">
            <div></div>
            {[
              { icon: '/services_icons/icons8-recliner-128.png', label: 'Tapisserie' },
              { icon: '/services_icons/icons8-tree-128.png', label: 'Jardinage' },
            ].map((service) => (
              <div
                key={service.label}
                className="flex flex-col items-center justify-center hover:scale-105 transition-transform cursor-pointer"
              >
                <img 
                  src={service.icon} 
                  alt={service.label}
                  className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-2 object-contain"
                />
                <span className="text-xs sm:text-sm text-blue-dark text-center leading-tight font-semibold">{service.label}</span>
              </div>
            ))}
            <div></div>
          </div>
        </div>

        {/* See More Button */}
        <div className="mt-8 mb-8">
          <a 
            href="/services" 
            className="text-blue-dark font-semibold hover:text-primary transition-colors inline-flex items-center text-base"
          >
            Voir tous les services
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* CTA Button */}
        <div className="mt-8 mb-8">
          <a 
            href="https://commander.aveckaza.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-primary hover:bg-primary-dark text-white px-7 sm:px-9 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all hover:scale-105 shadow-md inline-flex items-center justify-center"
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
