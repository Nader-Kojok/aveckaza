import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Seo from '../components/SEO'

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<string | null>(null)

  const faqs = [
    {
      category: "Services",
      questions: [
        {
          question: "Quels types de services proposez-vous ?",
          answer: "Nous proposons aujourd'hui une large gamme de services, et en ajoutons de nouveaux régulièrement : Plomberie, Travaux d'électricité, Réparation d'électroménager, Petits travaux (changement de moustiquaire de portes, changement de serrures, fixation de miroirs, tableaux, étagères…), Peinture, Élagage et entretien du jardin."
        },
        {
          question: "Intervenez-vous dans tout le Sénégal ?",
          answer: "Pour le moment, nos services sont disponibles uniquement dans la ville de Dakar. Nous prévoyons d'élargir bientôt notre couverture à l'ensemble de la région de Dakar."
        },
        {
          question: "Proposez-vous des services pour les professionnels ?",
          answer: "Oui, nous travaillons avec des entreprises pour des prestations telles que : Maintenance technique des locaux (bureaux, espaces commerciaux, parcs immobiliers…), Suivi et gestion de travaux sur vos sites. Contactez-nous pour un devis personnalisé."
        }
      ]
    },
    {
      category: "Fonctionnement",
      questions: [
        {
          question: "Comment fonctionne votre plateforme ?",
          answer: "Notre plateforme vous met en relation avec des artisans qualifiés. Voici les étapes : 1. Vous choisissez le service dont vous avez besoin. 2. Vous indiquez votre localisation et le créneau horaire de disponibilité. 3. Un artisan vous est attribué et se rend sur place pour réaliser la prestation."
        },
        {
          question: "Quels sont vos délais d'intervention ?",
          answer: "Nous assurons des interventions rapides : Pour les urgences, nous intervenons dans un délai maximum de 2 heures. Pour les prestations planifiées, vous pouvez choisir un créneau selon vos disponibilités."
        },
        {
          question: "Puis-je annuler ou modifier ma commande ?",
          answer: "Oui, vous pouvez modifier ou annuler votre commande jusqu'à 2 heures avant l'intervention prévue. Pour les urgences, des frais de déplacement peuvent s'appliquer si l'artisan est déjà en route."
        }
      ]
    },
    {
      category: "Artisans",
      questions: [
        {
          question: "Qui sont les artisans avec lesquels vous travaillez ?",
          answer: "Nous collaborons avec des artisans qualifiés et expérimentés. Chaque artisan est rigoureusement sélectionné après un processus d'évaluation comprenant : Vérification des références et compétences, Formation sur nos standards de qualité, Suivi régulier pour garantir un service irréprochable."
        }
      ]
    },
    {
      category: "Paiement",
      questions: [
        {
          question: "Comment fonctionne le paiement des prestations ?",
          answer: "Vous payez votre prestation à la fin de l'intervention via un lien de paiement sécurisé qui vous sera envoyé. Si l'intervention nécessite des pièces détachées, vous devez les régler directement à l'artisan qui vous fournira une facture pour ces achats. Nous acceptons : Paiements via mobile money (Wave, Orange Money), Paiement par carte bancaire. Nous n'acceptons pas les paiements en espèces."
        }
      ]
    },
    {
      category: "Problèmes et satisfaction",
      questions: [
        {
          question: "Et si l'artisan ne parvient pas à résoudre mon problème ?",
          answer: "Dans ce cas, les frais de déplacement restent à votre charge, selon les conditions suivantes : 3 000 FCFA pour les prestations entre 10h et 20h (du lundi au samedi), 5 000 FCFA pour les prestations aux horaires majorées (nuit, dimanches et jours fériés). Cependant, nous faisons tout notre possible pour attribuer des artisans compétents et éviter ce type de situation. Pour les dépannages, si l'artisan a identifié la panne mais n'est pas en mesure de la réparer immédiatement (disponibilité des pièces, matériel spécifique...), des frais de diagnostic équivalents à 40% du montant de la prestation seront facturés. Ils pourront être déduits du montant de l'intervention suivante, une fois la réparation effectuée."
        },
        {
          question: "Que faire si je ne suis pas satisfait de la prestation ?",
          answer: "Votre satisfaction est notre priorité. Si vous rencontrez un problème, contactez notre service client sous 24 heures après la prestation. Nous trouverons une solution adaptée : Intervention corrective, Attribution d'un avoir correspondant à tout ou partie du montant de la prestation, utilisable pour une future intervention."
        }
      ]
    },
    {
      category: "Sécurité",
      questions: [
        {
          question: "Quels sont vos engagements en matière de sécurité et de responsabilité ?",
          answer: "Nous disposons d'une assurance responsabilité civile pour couvrir tout dommage éventuel lié aux interventions. De plus, nous sélectionnons des artisans qualifiés et assurons un suivi rigoureux pour garantir des prestations sécurisées et de qualité."
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
    <div className="min-h-screen bg-white pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <Seo
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
          {faqs.map((category) => (
            <div key={category.category}>
              <h2 className="text-2xl font-display font-bold text-primary mb-4">
                {category.category}
              </h2>
              <div className="space-y-3">
                {category.questions.map((faq) => (
                    <div
                      key={faq.question}
                      className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200"
                    >
                      <button
                        onClick={() => setOpenIndex(openIndex === faq.question ? null : faq.question)}
                        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                        <ChevronDown
                          className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
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
