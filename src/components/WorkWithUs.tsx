import { placeholders } from '../lib/placeholder'

export default function WorkWithUs() {
  return (
    <section id="carrieres" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl transform rotate-3"></div>
              <div className="relative rounded-3xl overflow-hidden aspect-square shadow-xl">
                <img 
                  src={placeholders.platform.teamWork} 
                  alt="Rejoignez l'équipe Kaza"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-600/80 to-transparent flex items-end p-8">
                  <p className="text-2xl font-display font-bold text-white">Rejoignez notre équipe</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <p className="text-sm font-semibold text-primary mb-2">CARRIÈRES</p>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-6">
              Vous souhaitez travailler avec Kaza ?
            </h2>
            <p className="text-gray-600 mb-6">
              Rejoignez notre réseau de professionnels qualifiés et commencez à gagner de l'argent en offrant vos services à des clients dans tout Dakar. Nous offrons une formation, un soutien et des opportunités de croissance.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Horaires flexibles',
                'Revenus compétitifs',
                'Formation gratuite',
                'Assurance incluse',
                'Paiements hebdomadaires',
              ].map((benefit) => (
                <li key={benefit} className="flex items-start">
                  <span className="text-primary mr-3 mt-1">✓</span>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
            <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full font-semibold transition-colors">
              Postuler maintenant
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
