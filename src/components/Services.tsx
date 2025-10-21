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
              icon: (
                <svg className="w-16 h-16 mx-auto mb-6" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="12" y="16" width="28" height="36" rx="2" stroke="#04517D" strokeWidth="2" fill="none"/>
                  <path d="M16 12h20v8H16z" fill="#2585C3"/>
                  <rect x="20" y="24" width="12" height="2" fill="#04517D"/>
                  <rect x="20" y="30" width="12" height="2" fill="#04517D"/>
                  <rect x="20" y="36" width="8" height="2" fill="#04517D"/>
                  <circle cx="48" cy="24" r="10" fill="#2585C3" opacity="0.2"/>
                  <path d="M44 24l3 3 5-6" stroke="#04517D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
              ),
            },
            {
              title: 'Garantie 30 jours',
              description: 'Un problème après une intervention ? Vous avez 30 jours pour le signaler et demander une intervention corrective.',
              icon: (
                <svg className="w-16 h-16 mx-auto mb-6" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M32 8L20 16v12c0 8 5 15 12 18 7-3 12-10 12-18V16L32 8z" fill="#2585C3" opacity="0.2" stroke="#04517D" strokeWidth="2"/>
                  <path d="M26 30l4 4 8-8" stroke="#04517D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ),
            },
            {
              title: 'Suivi & assistance',
              description: 'Rappels, suivi, support : tout est centralisé, sans que vous ayez à y penser.',
              icon: (
                <svg className="w-16 h-16 mx-auto mb-6" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M32 8l8 16 18 2-13 12 3 18-16-9-16 9 3-18-13-12 18-2z" fill="#FFB800" stroke="#FFB800" strokeWidth="2"/>
                </svg>
              ),
            },
          ].map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 duration-300"
            >
              <div className="mb-6">{service.icon}</div>
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
