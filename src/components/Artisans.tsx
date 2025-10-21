export default function Artisans() {
  const artisans = [
    {
      id: 1,
      image: '/artisans/01.png',
      title: 'Professionnels Qualifiés',
      description: 'Des artisans expérimentés et vérifiés pour tous vos besoins'
    },
    {
      id: 2,
      image: '/artisans/02.png',
      title: 'Service de Qualité',
      description: 'Un travail soigné et professionnel à chaque intervention'
    },
    {
      id: 3,
      image: '/artisans/03.png',
      title: 'Satisfaction Garantie',
      description: 'Votre satisfaction est notre priorité absolue'
    }
  ]

  return (
    <section id="artisans" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary mb-2">NOS ARTISANS</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-gray-900 leading-tight">
            Des professionnels à votre service
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez nos artisans qualifiés, prêts à intervenir pour tous vos projets à domicile.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {artisans.map((artisan) => (
            <div
              key={artisan.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={artisan.image} 
                  alt={artisan.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-gray-900 mb-2">
                  {artisan.title}
                </h3>
                <p className="text-gray-600">
                  {artisan.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="/devenir-pro"
            className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full font-semibold transition-colors inline-block"
          >
            Rejoindre notre équipe
          </a>
        </div>
      </div>
    </section>
  )
}
