import { Link } from 'react-router-dom'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import SEO from '../../components/SEO'

export default function SecuriteDomicileGuideComplet() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Plombs qui sautent : causes, solutions et quand faire appel à un électricien",
    "description": "Un disjoncteur qui saute sans raison apparente peut être source de frustration et d'inquiétude. Plusieurs raisons peuvent expliquer cette coupure électrique.",
    "image": "https://aveckaza.com/logo_kaza.png",
    "datePublished": "2025-01-15",
    "dateModified": "2025-01-15",
    "author": {
      "@type": "Organization",
      "name": "Kaza Sénégal"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Kaza Sénégal",
      "logo": {
        "@type": "ImageObject",
        "url": "https://aveckaza.com/logo_kaza.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://aveckaza.com/blog/securite-domicile-guide-complet"
    }
  }

  return (
    <div className="min-h-screen bg-cream">
      <SEO
        title="Plombs qui sautent : causes et solutions - Kaza"
        description="Découvrez pourquoi vos plombs sautent et comment résoudre le problème. Guide complet sur les disjoncteurs et quand faire appel à un électricien au Sénégal."
        keywords="plombs qui sautent, disjoncteur saute, panne électrique Dakar, électricien Sénégal, court-circuit, surcharge électrique"
        canonical="/blog/securite-domicile-guide-complet"
        ogType="article"
        structuredData={structuredData}
      />
      {/* Header */}
      <div className="bg-gradient-to-br from-primary to-primary-dark text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Retour au blog
          </Link>

          <div className="flex items-center gap-2 mb-4">
            <span className="px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold uppercase tracking-wide">
              Électricité
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
            Plombs qui sautent : causes, solutions et quand faire appel à un électricien
          </h1>

          <div className="flex items-center gap-6 text-white/90">
            <span className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              15 Janvier 2025
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              7 min de lecture
            </span>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm p-8 sm:p-12">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-gray-700 leading-relaxed">
                Un disjoncteur qui saute sans raison apparente peut être source de frustration et d'inquiétude. 
                Que vous ayez ajouté de nouveaux appareils ou que rien n'ait changé récemment, plusieurs raisons 
                peuvent expliquer cette coupure électrique. Cet article vous aide à identifier l'origine du problème 
                et à savoir quand faire appel à un électricien qualifié.
              </p>
            </div>

            {/* Section 1 */}
            <section className="mb-12">
              <h2 className="text-3xl font-display font-bold text-blue mb-6">
                Vous avez ajouté de nouveaux appareils ? Le compteur est peut-être sous-calibré
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Si votre installation disjoncte après l'ajout d'un nouvel appareil électrique comme un four, 
                  une climatisation ou un lave-linge, il est probable que la puissance souscrite auprès de votre 
                  fournisseur d'électricité ne soit plus suffisante.
                </p>
                <h3 className="text-xl font-semibold text-blue mt-6 mb-3">Que faire ?</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Testez en éteignant certains appareils énergivores comme le chauffage, le four ou le sèche-linge pour voir si le problème persiste</li>
                  <li>Vérifiez votre puissance souscrite sur votre facture d'électricité, par exemple 6 kVA, 9 kVA ou 12 kVA</li>
                  <li>Contactez votre fournisseur d'électricité pour augmenter la puissance de votre abonnement si nécessaire</li>
                </ul>
                <p className="mt-4">
                  Un électricien peut également installer un répartiteur de charge pour mieux équilibrer la consommation 
                  sur les différents circuits et éviter les coupures intempestives.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="mb-12">
              <h2 className="text-3xl font-display font-bold text-blue mb-6">
                Vous n'avez rien changé ? Il s'agit probablement d'un court-circuit ou d'une panne
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Si les plombs sautent alors que vous n'avez rien ajouté à votre installation, le problème vient 
                  sûrement d'un court-circuit dû à des fils abîmés ou une prise défectueuse, d'un appareil endommagé 
                  ou d'un problème au niveau du tableau électrique.
                </p>
                <h3 className="text-xl font-semibold text-blue mt-6 mb-3">Comment vérifier ?</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Coupez tous les disjoncteurs sauf le général</li>
                  <li>Réactivez-les un par un pour voir lequel fait disjoncter</li>
                  <li>Débranchez tous vos appareils et rebranchez-les un par un pour identifier celui qui pourrait être défectueux</li>
                </ul>
                <p className="mt-4">
                  Si rien ne change, il peut s'agir d'un problème électrique plus profond nécessitant l'intervention d'un électricien.
                </p>
                <p className="mt-4 italic">
                  Si votre installation est ancienne, des fils abîmés ou un disjoncteur vétuste peuvent être à l'origine des coupures. 
                  Un diagnostic électrique est recommandé.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section className="mb-12">
              <h2 className="text-3xl font-display font-bold text-blue mb-6">
                Une surcharge sur un circuit spécifique
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Même si la puissance globale est suffisante, certains circuits peuvent être surchargés si plusieurs 
                  appareils puissants sont branchés sur la même ligne. Par exemple, brancher un four et un lave-vaisselle 
                  sur une prise inadaptée peut causer une surcharge locale.
                </p>
                <h3 className="text-xl font-semibold text-blue mt-6 mb-3">Que faire ?</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Répartissez mieux les appareils sur plusieurs prises</li>
                  <li>Évitez les multiprises pour brancher des appareils énergivores</li>
                  <li>Si le problème persiste, un électricien peut ajouter un nouveau circuit pour répartir la charge</li>
                </ul>
                <p className="mt-4 italic">
                  Si votre tableau électrique est ancien, un remplacement des fusibles par des disjoncteurs peut améliorer 
                  la répartition des charges et éviter les coupures fréquentes.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section className="mb-12">
              <h2 className="text-3xl font-display font-bold text-blue mb-6">
                Un problème externe : coupure du réseau
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Parfois, le problème ne vient pas de chez vous mais du réseau électrique général. Une panne chez votre 
                  fournisseur ou une surtension peut entraîner des coupures soudaines.
                </p>
                <h3 className="text-xl font-semibold text-blue mt-6 mb-3">Comment vérifier ?</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Regardez si vos voisins sont aussi impactés</li>
                  <li>Consultez le site ou l'application de votre fournisseur d'électricité pour voir si une panne est signalée</li>
                  <li>Attendez le retour du courant ou contactez votre fournisseur pour plus d'informations</li>
                </ul>
              </div>
            </section>


            {/* Conclusion */}
            <div className="bg-cream rounded-xl p-8 mt-12">
              <h3 className="text-2xl font-display font-bold text-blue mb-4">
                Besoin d'un électricien ? Kaza vous envoie un expert rapidement
              </h3>
              <p className="text-gray-700 mb-6">
                Si votre installation disjoncte sans raison apparente ou si vous avez identifié un problème nécessitant 
                l'intervention d'un professionnel, Kaza vous met en relation avec des électriciens qualifiés et vérifiés 
                près de chez vous.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700 mb-6">
                <li>Intervention rapide</li>
                <li>Devis clair et tarifs négociés</li>
                <li>Électriciens certifiés et assurés</li>
              </ul>
              <p className="text-sm italic text-gray-600 mb-6">
                Il est toujours préférable de faire appel à un électricien pour éviter tout risque d'incendie ou d'électrocution.
              </p>
              <Link
                to="/"
                className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors"
              >
                Trouver un électricien qualifié
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
