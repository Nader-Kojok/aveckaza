export default function Artisans() {
  const artisans = [
    {
      id: 1,
      name: 'Jean-Emmanuel Gomez',
      specialty: 'Climatisation',
      image: '/artisans/01.png',
      testimonial: '"Très pro et souriant ! Ma clim fonctionne à nouveau, et est comme neuve, merci encore"',
      rating: 5,
      bgColor: 'bg-cyan-400'
    },
    {
      id: 2,
      name: 'Pierre-Edouard Goudiaby',
      specialty: 'Plomberie',
      image: '/artisans/03.png',
      testimonial: '"Il est arrivé en moins d\'une heure et a tout réparé. Il a même nettoyé avant de partir, un vrai soulagement !"',
      rating: 5,
      bgColor: 'bg-orange-400'
    },
    {
      id: 3,
      name: 'Birama Ba',
      specialty: 'Jardin',
      image: '/artisans/02.png',
      testimonial: '"Il a taillé mes arbres, et traité certaines plantes! On sent qu\'il est compétent et passionné. Je recommande"',
      rating: 5,
      bgColor: 'bg-yellow-400'
    }
  ]

  return (
    <section id="artisans" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-blue-dark mb-6 leading-tight">
            Rencontrez quelques-uns de nos artisans.
          </h2>
          <p className="text-lg sm:text-xl text-blue-dark/80 max-w-3xl mx-auto leading-relaxed">
            Pour une petite réparation, une installation ou même un projet de rénovation, ils s'en occuperont avec passion. Ils sont expérimentés, sélectionnés et notés - prêts à s'occuper de votre projet !
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {artisans.map((artisan) => (
            <div
              key={artisan.id}
              className="bg-white rounded-3xl shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 duration-300 border border-gray-100 p-4"
            >
              <div className="relative">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                  <img 
                    src={artisan.image} 
                    alt={artisan.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute top-4 left-4 bg-blue-dark text-white px-4 py-1.5 rounded-full text-sm font-semibold">
                  {artisan.specialty}
                </div>
              </div>
              
              <div className="p-6 pt-16 text-center">
                <h3 className="text-lg font-bold text-blue-dark mb-3">
                  {artisan.name}
                </h3>
                <p className="text-blue-dark/70 text-sm leading-relaxed mb-4 italic">
                  {artisan.testimonial}
                </p>
                <div className="flex justify-center gap-1">
                  {Array.from({ length: artisan.rating }, (_, i) => (
                    <svg key={`star-${artisan.id}-${i}`} className="w-5 h-5 fill-blue-dark" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg sm:text-xl text-gray-700 mb-6">
            Vous êtes artisan ?{' '}
            <a 
              href="/devenir-pro" 
              className="text-blue-dark font-semibold hover:underline underline decoration-blue-dark"
            >
              Candidatez maintenant
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
