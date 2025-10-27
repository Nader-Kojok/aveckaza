export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-blue-dark mb-6 leading-tight">
            Plus qu'une simple plateforme de mise en relation.
          </h2>
          <p className="text-lg sm:text-xl text-blue-dark/80 max-w-3xl mx-auto">
            Nous nous assurons de votre satisfaction, de la commande à la finalisation de l'intervention.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {[
            {
              title: 'Sélection rigoureuse',
              description: 'Nos artisans sont sélectionnés pour leurs expériences et références et sont formés à nos standards qualité.',
              icon: '/icone_qualite/recruitment.png',
            },
            {
              title: 'Garantie 30 jours',
              description: 'Un problème après une intervention ? Vous avez 30 jours pour le signaler et demander une intervention corrective.',
              icon: '/icone_qualite/shield.png',
            },
            {
              title: 'Suivi & assistance',
              description: 'Rappels, suivi, support : tout est centralisé, sans que vous ayez à y penser.',
              icon: '/icone_qualite/star.png',
            },
          ].map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 duration-300"
            >
              <div className="mb-6">
                <img 
                  src={service.icon} 
                  alt={service.title}
                  className="w-16 h-16 mx-auto object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-blue-dark mb-4 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
