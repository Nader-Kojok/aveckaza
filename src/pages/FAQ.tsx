import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import SEO from '../components/SEO'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      category: "Réservation",
      questions: [
        {
          question: "Comment réserver un service ?",
          answer: "Vous pouvez réserver directement sur notre plateforme en ligne. Sélectionnez le service souhaité, choisissez votre date et heure, puis confirmez votre réservation. Vous recevrez une confirmation par SMS et email."
        },
        {
          question: "Puis-je réserver pour le jour même ?",
          answer: "Oui, selon la disponibilité de nos professionnels. Nous faisons notre maximum pour répondre aux demandes urgentes. Contactez-nous directement pour les interventions en urgence."
        },
        {
          question: "Comment annuler ou modifier ma réservation ?",
          answer: "Vous pouvez annuler ou modifier votre réservation jusqu'à 24 heures avant l'intervention via votre espace client ou en nous contactant. Les annulations tardives peuvent entraîner des frais."
        }
      ]
    },
    {
      category: "Paiement",
      questions: [
        {
          question: "Quels modes de paiement acceptez-vous ?",
          answer: "Nous acceptons Orange Money, Wave, les cartes bancaires et les paiements en espèces. Le paiement est sécurisé et peut être effectué en ligne ou après la prestation selon votre préférence."
        },
        {
          question: "Quand dois-je payer ?",
          answer: "Le paiement peut être effectué en ligne lors de la réservation ou après la prestation. Pour les interventions régulières, nous proposons des formules d'abonnement avec paiement mensuel."
        },
        {
          question: "Puis-je obtenir une facture ?",
          answer: "Oui, une facture vous est automatiquement envoyée par email après chaque prestation. Vous pouvez également la télécharger depuis votre espace client."
        }
      ]
    },
    {
      category: "Professionnels",
      questions: [
        {
          question: "Vos professionnels sont-ils vérifiés ?",
          answer: "Oui, tous nos professionnels passent par un processus de vérification rigoureux incluant la vérification des diplômes, de l'expérience, un entretien et une formation. Ils sont également assurés."
        },
        {
          question: "Puis-je choisir mon professionnel ?",
          answer: "Oui, après une première intervention, vous pouvez demander le même professionnel pour vos prochaines réservations si celui-ci est disponible."
        },
        {
          question: "Que faire si je ne suis pas satisfait ?",
          answer: "Votre satisfaction est notre priorité. Si vous n'êtes pas satisfait, contactez-nous dans les 48 heures. Nous ferons tout notre possible pour résoudre le problème, y compris une nouvelle intervention gratuite si nécessaire."
        }
      ]
    },
    {
      category: "Services",
      questions: [
        {
          question: "Quels services proposez-vous ?",
          answer: "Nous proposons une large gamme de services : ménage, bricolage, jardinage, plomberie, électricité, déménagement, et bien plus. Consultez notre liste complète sur la page d'accueil."
        },
        {
          question: "Intervenez-vous dans toute la région de Dakar ?",
          answer: "Oui, nous couvrons l'ensemble de la région de Dakar et ses environs, incluant les Almadies, Mermoz, Plateau, Ouakam, et autres quartiers."
        },
        {
          question: "Proposez-vous des services réguliers ?",
          answer: "Oui, nous proposons des formules d'abonnement pour des interventions régulières (hebdomadaires, bi-hebdomadaires, mensuelles) avec des tarifs préférentiels."
        }
      ]
    },
    {
      category: "Devenir professionnel",
      questions: [
        {
          question: "Comment devenir professionnel Kaza ?",
          answer: "Rendez-vous sur notre page 'Devenir pro' et remplissez le formulaire de candidature. Notre équipe vous contactera pour un entretien et vous guidera dans le processus d'inscription."
        },
        {
          question: "Quels sont les critères pour rejoindre Kaza ?",
          answer: "Nous recherchons des professionnels qualifiés, expérimentés, fiables et avec un excellent sens du service client. Une vérification des antécédents et des références est également requise."
        }
      ]
    }
  ]

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.flatMap(category => 
      category.questions.map(q => ({
        "@type": "Question",
        "name": q.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": q.answer
        }
      }))
    )
  }

  return (
    <div className="min-h-screen bg-white pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <SEO
        title="FAQ - Questions Fréquentes Services à Domicile"
        description="Trouvez les réponses à vos questions sur nos services à domicile à Dakar : réservation, tarifs, paiement, professionnels. FAQ Kaza Sénégal."
        keywords="FAQ services domicile, questions Kaza, aide réservation Dakar, tarifs services domicile, paiement Kaza"
        canonical="/faq"
        structuredData={structuredData}
      />
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-display font-bold text-gray-900 mb-4">
            Foire Aux Questions
          </h1>
          <p className="text-lg text-gray-600">
            Trouvez rapidement les réponses à vos questions
          </p>
        </div>

        <div className="space-y-8">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h2 className="text-2xl font-display font-bold text-primary mb-4">
                {category.category}
              </h2>
              <div className="space-y-3">
                {category.questions.map((faq, questionIndex) => {
                  const globalIndex = categoryIndex * 100 + questionIndex
                  return (
                    <div
                      key={globalIndex}
                      className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200"
                    >
                      <button
                        onClick={() => setOpenIndex(openIndex === globalIndex ? null : globalIndex)}
                        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                        <ChevronDown
                          className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
                            openIndex === globalIndex ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {openIndex === globalIndex && (
                        <div className="px-6 pb-4 text-gray-600">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-cream rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
            Vous ne trouvez pas votre réponse ?
          </h3>
          <p className="text-gray-700 mb-6">
            Notre équipe est là pour vous aider
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+221787891010"
              className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full font-semibold transition-colors"
            >
              Appelez-nous
            </a>
            <a
              href="mailto:contact@aveckaza.com"
              className="bg-white hover:bg-gray-50 text-primary border-2 border-primary px-8 py-3 rounded-full font-semibold transition-colors"
            >
              Envoyez un email
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
