export default function HowItWorks() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-base font-semibold text-primary mb-2">BESOIN D'AIDE?</p>
          <h2 className="text-5xl sm:text-6xl font-display font-bold text-gray-900">
            Trouvez la meilleure aide à temps plein.
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Soyez mis en relation avec un professionnel à temps plein ou partiel qui correspond à vos besoins et à votre emploi du temps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Femme de ménage à temps plein',
              description: 'Aide dédiée pour tous vos besoins domestiques.',
              color: 'bg-yellow-100',
            },
            {
              title: 'Nounou à temps plein',
              description: 'Garde d’enfants professionnelle à domicile.',
              color: 'bg-pink-100',
            },
            {
              title: 'Aide soignant(e) à temps plein',
              description: 'Soins compassionnels pour les membres âgés de la famille.',
              color: 'bg-blue-100',
            },
          ].map((option) => (
            <div
              key={option.title}
              className={`${option.color} rounded-2xl p-8 hover:scale-105 transition-transform cursor-pointer`}
            >
              <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                {option.title}
              </h3>
              <p className="text-gray-700 mb-6">{option.description}</p>
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
