import { Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Pierre-Louis Denaro',
      role: 'Local Guide',
      image: '/picture_testimonials/01.png',
      rating: 5,
      text: 'HIGHLY recommend Kaza. They made finding professional, qualified help easy, which is rare in this city.',
    },
    {
      name: 'Elena Boffetta',
      role: 'Local Guide',
      image: '/picture_testimonials/02.png',
      rating: 5,
      text: 'I used this service for a plumber and everything went very smoothly. The work was completed quickly, without any complications, and the customer service is excellent.',
    },
    {
      name: 'Leconte Sloane',
      role: 'Client',
      image: '/picture_testimonials/03.png',
      rating: 5,
      text: 'Top experience! The timing of the intervention was respected. The technician was very professional, fast and very efficient. I recommend!',
    },
  ]

  return (
    <section id="temoignages" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary mb-2">TÉMOIGNAGES</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-gray-900 leading-tight">
            Découvrez ce que nos clients disent de nous
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Ne nous croyez pas sur parole. Voici ce que nos clients disent de leur expérience.
          </p>
          <a 
            href="https://www.google.com/search?sca_esv=f0ead55d09cdc2fd&rlz=1C5CHFA_enKE1072KE1072&cs=1&sxsrf=AE3TifMrZvJj_XWbDuAKIyhS8d-I41LofQ:1761591016595&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-ExTnIM-D3T_DAyZl4C44RnXb4V6u6nMK5KMpducwWkwLdzVPCDoEh6tIJswepErJOUuLwRjpoPAsZtOiQzu4CAyOPgLU&q=Kaza+Reviews&sa=X&ved=2ahUKEwjKo6L2hcWQAxUHQEEAHbfVKPsQ0bkNegQIIBAD&cshid=1761591161098133&biw=1440&bih=782&dpr=2&sei=g7__aNWiAsedkdUPkpf18Aw" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-4 inline-block text-primary hover:text-primary-dark font-semibold underline"
          >
            Voir tous nos avis Google →
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-display font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={`${testimonial.name}-star-${i}`} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-700 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="https://commander.aveckaza.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full font-semibold transition-colors inline-block"
          >
            Réserver maintenant
          </a>
        </div>
      </div>
    </section>
  )
}
