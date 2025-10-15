import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<string | null>(null)

  // Seulement les 4 premières questions de la page FAQ complète
  const faqs = [
    {
      question: 'Comment réserver un service ?',
      answer: 'Vous pouvez réserver directement sur notre plateforme en ligne. Sélectionnez le service souhaité, choisissez votre date et heure, puis confirmez votre réservation. Vous recevrez une confirmation par SMS et email.'
    },
    {
      question: 'Vos professionnels sont-ils vérifiés ?',
      answer: 'Oui, tous nos professionnels passent par un processus de vérification rigoureux incluant la vérification des diplômes, de l\'expérience, un entretien et une formation. Ils sont également assurés.'
    },
    {
      question: 'Quels modes de paiement acceptez-vous ?',
      answer: 'Nous acceptons Orange Money, Wave, les cartes bancaires et les paiements en espèces. Le paiement est sécurisé et peut être effectué en ligne ou après la prestation selon votre préférence.'
    },
    {
      question: 'Puis-je annuler ou modifier ma réservation ?',
      answer: 'Vous pouvez annuler ou modifier votre réservation jusqu\'à 24 heures avant l\'intervention via votre espace client ou en nous contactant. Les annulations tardives peuvent entraîner des frais.'
    },
  ]

  return (
    <section id="faq-section" className="py-16 px-4 sm:px-6 lg:px-8 bg-cream">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary mb-2">FAQ</p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900">
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
                <span className="font-semibold text-gray-900">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-primary transition-transform ${
                    openIndex === faq.question ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === faq.question && (
                <div className="px-6 pb-4 text-gray-600">
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
