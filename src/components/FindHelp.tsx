import { placeholders } from '../lib/placeholder'

export default function FindHelp() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="rounded-3xl overflow-hidden aspect-square shadow-xl">
              <img 
                src={placeholders.platform.webPlatform} 
                alt="Plateforme web Kaza"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <p className="text-sm font-semibold text-primary mb-2">PLATEFORME EN LIGNE</p>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-blue-dark mb-6">
              Gérez tous vos services depuis notre plateforme web.
            </h2>
            <p className="text-gray-600 mb-6">
              Avec notre plateforme web intuitive, vous pouvez facilement réserver des services, suivre vos réservations, communiquer avec vos prestataires et gérer vos paiements en toute sécurité.
            </p>
            <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full font-semibold transition-colors">
              Accéder à la plateforme
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
