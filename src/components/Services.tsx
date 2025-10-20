export default function Services() {
  return (
    <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-base font-semibold text-primary mb-2">NOS SERVICES</p>
          <h2 className="text-5xl sm:text-6xl font-display font-bold text-gray-900">
            Plus qu'une simple plateforme de services à domicile.
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Nous offrons une large gamme de services pour vous aider à entretenir votre maison, du ménage aux réparations et tout le reste.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Réservations',
              description: 'Réservez des professionnels vérifiés et assurés pour votre maison en quelques clics.',
              icon: '📅',
            },
            {
              title: 'Placements',
              description: 'Trouvez une aide fiable à temps plein ou partiel pour vos besoins continus.',
              icon: '💼',
            },
            {
              title: 'Boutique Hygiène',
              description: 'Commandez tous vos produits de nettoyage livrés à votre porte.',
              icon: '🧴',
            },
          ].map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-3xl font-display font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a href="/en-savoir-plus" className="text-primary font-semibold text-sm hover:underline hover:text-primary-dark transition-colors">
                En savoir plus →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
