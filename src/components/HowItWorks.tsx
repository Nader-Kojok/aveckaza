import { placeholders } from '../lib/placeholder'

export default function HowItWorks() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm sm:text-base font-semibold text-primary mb-2">BESOIN D'AIDE?</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 leading-tight">
            Trouvez la meilleure aide à temps plein.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Soyez mis en relation avec un professionnel à temps plein ou partiel qui correspond à vos besoins et à votre emploi du temps.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Femme de ménage à temps plein',
              description: 'Aide dédiée pour tous vos besoins domestiques.',
              image: placeholders.fullTimeHelp.housekeeping,
            },
            {
              title: 'Nounou à temps plein',
              description: 'Garde d\'enfants professionnelle à domicile.',
              image: placeholders.fullTimeHelp.nanny,
            },
            {
              title: 'Aide soignant(e) à temps plein',
              description: 'Soins compassionnels pour les membres âgés de la famille.',
              image: placeholders.fullTimeHelp.caregiver,
            },
          ].map((option) => (
            <div
              key={option.title}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:scale-105 transition-all cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={option.image} 
                  alt={option.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                  {option.title}
                </h3>
                <p className="text-gray-700 mb-4">{option.description}</p>
                <a href="/en-savoir-plus" className="text-primary font-semibold text-sm hover:underline hover:text-primary-dark transition-colors">
                  En savoir plus →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
