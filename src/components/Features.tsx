import { placeholders } from '../lib/placeholder'

export default function Features() {
  return (
    <section id="comment-ca-marche" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <p className="text-sm sm:text-base font-semibold text-primary mb-2">COMMENT ÇA MARCHE</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6 leading-tight">
              Faire intervenir un technicien n'a jamais été aussi simple
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6">
              Avec Kaza, réservez en quelques clics des artisans fiables et compétents pour tous vos besoins du quotidien. Notre plateforme vous accompagne à chaque étape, jusqu'à la résolution du problème.
            </p>
            <ul className="space-y-4">
              {[
                'Choisissez le service dont vous avez besoin',
                'Indiquez votre localisation et vos disponibilités',
                'Recevez un technicien certifié, proche de chez vous',
                'Suivez l\'intervention et recevez un compte-rendu clair',
              ].map((feature) => (
                <li key={feature} className="flex items-start">
                  <span className="text-primary mr-3 mt-1">✓</span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative">
            <div className="rounded-3xl overflow-hidden aspect-square shadow-xl">
              <img 
                src={placeholders.technology.mobileApp} 
                alt="Application mobile Kaza"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
