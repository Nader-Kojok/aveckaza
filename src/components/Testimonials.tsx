import { Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Fatou D.',
      role: 'Propriétaire',
      image: '👩🏾',
      rating: 5,
      text: 'Kaza a changé ma vie! Ma maison n’a jamais été aussi propre et j’adore la facilité de réservation.',
    },
    {
      name: 'Moussa S.',
      role: 'Professionnel occupé',
      image: '👨🏾',
      rating: 5,
      text: 'J’étais sceptique au début, mais le service a dépassé mes attentes. Je recommande vivement!',
    },
    {
      name: 'Awa N.',
      role: 'Maman',
      image: '👩🏾',
      rating: 5,
      text: 'En tant que maman qui travaille, ce service est une bouée de sauvetage. Les professionnels sont fiables.',
    },
  ]

  return (
    <section id="temoignages" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary mb-2">TÉMOIGNAGES</p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900">
            Rencontrez quelques-uns de nos professionnels Kaza.
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Ne nous croyez pas sur parole. Voici ce que nos clients disent de leur expérience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <div className="text-5xl mr-4">{testimonial.image}</div>
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
            className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full font-semibold transition-colors mr-4 inline-block"
          >
            Réserver maintenant
          </a>
          <a 
            href="/en-savoir-plus"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full font-semibold transition-colors inline-block"
          >
            En savoir plus
          </a>
        </div>
      </div>
    </section>
  )
}
