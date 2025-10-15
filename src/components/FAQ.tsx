import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<string | null>(null)

  const faqs = [
    {
      question: 'Comment réserver un service ?',
      answer: 'Entrez simplement votre code postal, choisissez le service dont vous avez besoin, sélectionnez votre date et heure préférées, et confirmez votre réservation. C\'est aussi simple que ça !'
    },
    {
      question: 'Les professionnels sont-ils vérifiés ?',
      answer: 'Oui, tous nos professionnels sont soigneusement vérifiés, formés et assurés. Nous effectuons des vérifications d\'antécédents approfondies pour garantir votre sécurité et votre tranquillité d\'esprit.'
    },
    {
      question: 'Quels modes de paiement acceptez-vous ?',
      answer: 'Nous acceptons les cartes de crédit/débit, Orange Money, Wave, et les paiements en espèces. Tous les paiements en ligne sont sécurisés et cryptés.'
    },
    {
      question: 'Puis-je annuler ou reprogrammer ma réservation ?',
      answer: 'Oui, vous pouvez annuler ou reprogrammer votre réservation jusqu\'à 24 heures avant l\'heure prévue sans frais. Les annulations tardives peuvent entraîner des frais.'
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
      </div>
    </section>
  )
}
