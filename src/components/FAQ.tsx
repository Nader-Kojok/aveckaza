import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<string | null>(null)

  // Seulement les questions les plus importantes de la page FAQ complète
  const faqs = [
    {
      question: 'Quels types de services proposez-vous ?',
      answer: 'Nous proposons aujourd\'hui une large gamme de services :\n\n• Plomberie\n• Travaux d\'électricité\n• Réparation d\'électroménager\n• Petits travaux (changement de moustiquaire de portes, changement de serrures, fixation de miroirs, tableaux, étagères…)\n• Peinture\n• Élagage et entretien du jardin'
    },
    {
      question: 'Comment fonctionne votre plateforme ?',
      answer: 'Notre plateforme vous met en relation avec des artisans qualifiés. Voici les étapes :\n\n1. Vous choisissez le service dont vous avez besoin.\n\n2. Vous indiquez votre localisation et le créneau horaire de disponibilité.\n\n3. Un artisan vous est attribué et se rend sur place pour réaliser la prestation.'
    },
    {
      question: 'Qui sont les artisans avec lesquels vous travaillez ?',
      answer: 'Nous collaborons avec des artisans qualifiés et expérimentés. Chaque artisan est rigoureusement sélectionné après un processus d\'évaluation comprenant :\n\n• Vérification des références et compétences\n• Formation sur nos standards de qualité\n• Suivi régulier pour garantir un service irréprochable'
    },
    {
      question: 'Comment fonctionne le paiement des prestations ?',
      answer: 'Le paiement se fait directement auprès du technicien, à la fin de l\'intervention, par mobile money (Wave, Orange Money) ou en espèces selon votre préférence.\n\n💡 Le paiement du matériel (s\'il y en a) se fait avant l\'achat, et celui de la main-d\'œuvre à la fin de l\'intervention.'
    },
  ]

  return (
    <section id="faq-section" className="py-16 px-4 sm:px-6 lg:px-8 bg-cream">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary mb-2">FAQ</p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-blue-dark">
            Des questions ? Nous avons les réponses.
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="bg-white rounded-xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === faq.question ? null : faq.question)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-blue-dark">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-primary transition-transform ${
                    openIndex === faq.question ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === faq.question && (
                <div className="px-6 pb-4 text-gray-600 whitespace-pre-line leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="/faq"
            className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full font-semibold transition-colors"
          >
            Voir toutes les questions
          </a>
        </div>
      </div>
    </section>
  )
}
