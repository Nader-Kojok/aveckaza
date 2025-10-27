import Seo from '../components/SEO'

export default function Services() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Services Kaza Sénégal",
    "description": "Découvrez tous nos services professionnels à domicile au Sénégal : plomberie, électricité, climatisation, jardinage, peinture et plus encore.",
    "provider": {
      "@type": "Organization",
      "name": "Kaza Sénégal"
    },
    "areaServed": {
      "@type": "City",
      "name": "Dakar"
    }
  }

  const services = [
    {
      icon: '/services_icons/icons8-plumbing-128.png',
      title: 'Plomberie',
      description: 'Installation, réparation et recherche de fuites.',
      features: [
        'Réparation de fuites (robinet, évier, WC, ballon)',
        'Débouchage évacuations / canalisations',
        'Remplacement robinetterie, flexibles, siphons',
        'Pose sanitaires (lavabo, WC, douche, chauffe-eau)',
        'Diagnostic pression / étanchéité + devis avant travaux'
      ]
    },
    {
      icon: '/services_icons/icons8-light-on-128.png',
      title: 'Électricité',
      description: 'Installation et dépannage sécurisés (normes et mise à la terre).',
      features: [
        'Dépannage pannes / court-circuits',
        'Pose et remplacement de prises, interrupteurs, disjoncteurs',
        'Tableaux électriques : ajout/rénovation, différentiels',
        'Éclairage intérieur/extérieur (LED, détecteurs)',
        'Mise aux normes et certificats de conformité de base'
      ]
    },
    {
      icon: '/services_icons/icons8-air-conditioner-128.png',
      title: 'Climatisation',
      description: 'Pose, entretien et réparation de climatiseurs.',
      features: [
        'Installation split (mono/multi) avec mise en service',
        'Entretien annuel (nettoyage, filtre, contrôle)',
        'Recharge gaz, fuites sur circuit frigorifique',
        'Dépannage carte, compresseur, ventilateurs',
        'Recommandations d\'usage et d\'économie d\'énergie'
      ]
    },
    {
      icon: '/services_icons/icons8-fridge-128.png',
      title: 'Réparation électroménager',
      description: 'Interventions sur appareils domestiques.',
      features: [
        'Lave-linge, sèche-linge, lave-vaisselle',
        'Réfrigérateurs, congélateurs, frigos vitrine',
        'Fours, plaques, micro-ondes, hottes',
        'Climatiseurs mobiles, chauffe-eau électriques',
        'Diagnostic, devis et remplacement de pièces'
      ]
    },
    {
      icon: '/services_icons/icons8-key-security-128.png',
      title: 'Serrurerie',
      description: 'Ouverture et sécurisation sans dégâts inutiles.',
      features: [
        'Ouverture de porte (claquée, verrouillée)',
        'Remplacement/renforcement de serrures et cylindres',
        'Blindage, barres de sécurité, poignées renforcées',
        'Pose de verrous additionnels et crémones',
        'Conseils anti-intrusion'
      ]
    },
    {
      icon: '/services_icons/icons8-paint-roller-128.png',
      title: 'Peinture',
      description: 'Finitions propres et durables, intérieur/extérieur.',
      features: [
        'Préparation des supports (rebouchage, ponçage, sous-couche)',
        'Peinture murs, plafonds, boiseries, ferronneries',
        'Peinture façades et protections anti-humidité',
        'Effets décoratifs simples (satin, mat, laque)',
        'Protection chantier + nettoyage fin de travaux'
      ]
    },
    {
      icon: '/services_icons/icons8-trowel-128.png',
      title: 'Carrelage',
      description: 'Pose précise, alignements et joints soignés.',
      features: [
        'Pose sol et mur (céramique, grès, faïence)',
        'Réparation de carreaux et reprises de joints',
        'Étanchéité sous carrelage (zones humides)',
        'Plinthes, nez de marche et finitions',
        'Conseil de calepinage et choix matériaux'
      ]
    },
    {
      icon: '/services_icons/icons8-rounded-square-96 (1).png',
      title: 'Plâtre & faux plafonds (murs lumineux)',
      description: 'Cloisons, faux plafonds et éclairages intégrés.',
      features: [
        'Pose BA13, cloisons et doublages',
        'Faux plafonds standards ou design',
        'Intégration de bandes LED / "murs lumineux"',
        'Bandes, enduits, lissage prêt à peindre',
        'Correction d\'angles et alignements'
      ]
    },
    {
      icon: '/services_icons/icons8-brick-wall-128.png',
      title: 'Maçonnerie',
      description: 'Petits ouvrages et reprises structurelles courantes.',
      features: [
        'Murets, seuils, marches, dalles de petite surface',
        'Reprises d\'enduits, fissures, éclats',
        'Ouvertures/agrandissements (après validation technique)',
        'Seuils et appuis de fenêtres, linteaux simples',
        'Béton de propreté, chapes de rattrapage'
      ]
    },
    {
      icon: '/services_icons/icons8-roofing-96 (1).png',
      title: 'Étanchéité',
      description: 'Traitement des infiltrations et protections durables.',
      features: [
        'Diagnostic d\'infiltration (toiture, terrasse, murs)',
        'Membranes, résines, relevés d\'étanchéité',
        'Étanchéité de sanitaires / douches à l\'italienne',
        'Reprises de joints et acrotères',
        'Tests de mise en eau + rapport photo'
      ]
    },
    {
      icon: '/services_icons/icons8-pool-128.png',
      title: 'Piscine',
      description: 'Entretien, réparation et mise en service.',
      features: [
        'Nettoyage, équilibrage pH/Chlore',
        'Dépannage pompe/filtre, fuites, colmatage',
        'Changement sable/charge filtrante',
        'Révision skimmers, buses, coffrets',
        'Hivernage / remise en route saisonnière'
      ]
    },
    {
      icon: '/services_icons/icons8-recliner-128.png',
      title: 'Menuiserie bois & meubles',
      description: 'Conception, pose et réparation sur mesure.',
      features: [
        'Placards, dressings, bibliothèques',
        'Portes, plinthes, parquets (pose/ponçage)',
        'Réparation/ajustement de meubles',
        'Plans de travail, niches, agencements',
        'Finitions vernis/peintures, quincaillerie'
      ]
    },
    {
      icon: '/services_icons/icons8-welder-shield-96 (1).png',
      title: 'Menuiserie métallique',
      description: 'Ouvrages acier/alu pour sécuriser et aménager.',
      features: [
        'Portes, grilles, garde-corps, rampes',
        'Châssis aluminium (fixe, coulissant)',
        'Pergolas, abris légers, cadres',
        'Réparation/soudure sur place (selon accès)',
        'Antirouille et peinture de protection'
      ]
    },
    {
      icon: '/services_icons/icons8-drill-128.png',
      title: 'Petits travaux (bricolage)',
      description: 'Interventions rapides et installations courantes.',
      features: [
        'Fixations murales (TV, étagères, tringles)',
        'Montage/démontage de meubles',
        'Pose de tringles, miroirs, cadres',
        'Joints silicone, petites reprises d\'enduit',
        'Installation ou réparation de moustiquaires de fenêtres'
      ]
    },
    {
      icon: '/services_icons/icons8-vacuum-cleaner-128.png',
      title: 'Nettoyage (canapés, tapis, matelas, fin de chantier…)',
      description: 'Nettoyage professionnel avec équipements adaptés.',
      features: [
        'Détachage et shampoing canapés, fauteuils, matelas',
        'Nettoyage tapis et moquettes en profondeur',
        'Nettoyage fin de chantier (poussières, traces, vitres)',
        'Détartrage salles d\'eau, cuisine, inox',
        'Produits et méthodes adaptés aux matériaux'
      ]
    },
    {
      icon: '/services_icons/icons8-bullet-camera-128.png',
      title: 'Sécurité',
      description: 'Solutions de protection et de contrôle.',
      features: [
        'Alarmes anti-intrusion (basique)',
        'Vidéosurveillance (caméras IP, enregistrement)',
        'Interphones et contrôle d\'accès',
        'Remise en service et maintenance',
        'Conseils d\'implantation'
      ]
    },
    {
      icon: '/services_icons/icons8-tree-128.png',
      title: 'Jardinage',
      description: 'Entretien et remise en état d\'espaces verts.',
      features: [
        'Tonte, taille, désherbage',
        'Taille arbustes/haies, élagage',
        'Arrosage, paillage, petites plantations',
        'Nettoyage terrasses/allées',
        'Évacuation des déchets verts'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Nos Services - Tous les services professionnels à domicile"
        description="Découvrez tous nos services professionnels à domicile au Sénégal : plomberie, électricité, climatisation, jardinage, peinture, carrelage, menuiserie et plus. Artisans qualifiés à Dakar."
        keywords="plomberie Dakar, électricien Sénégal, climatisation, jardinage, peinture, carrelage, menuiserie, serrurier, étanchéité, services domicile Dakar"
        canonical="/services"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 pt-32 pb-16 bg-cream">
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            className="font-display font-bold text-gray-900 mb-6"
            style={{ fontSize: 'clamp(2.5rem, 4.5vw, 4.5rem)' }}
          >
            Tous nos services
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Des professionnels qualifiés pour tous vos besoins à domicile. Réservez en quelques clics et profitez d'un service de qualité.
          </p>
          <a
            href="https://commander.aveckaza.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors inline-block"
          >
            Réserver un service
          </a>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
                <div
                  key={service.title}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                >
                  <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    <img 
                      src={service.icon} 
                      alt={service.title}
                      className="w-10 h-10"
                    />
                  </div>
                  <h3 className="text-3xl font-display font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start text-gray-700">
                        <span className="text-primary mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-br from-blue to-blue-dark text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-display font-bold mb-6">
            Prêt à réserver ?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Choisissez votre service et réservez en quelques minutes. Nos professionnels sont prêts à intervenir.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://commander.aveckaza.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold transition-colors"
            >
              Réserver maintenant
            </a>
            <a
              href="/club-kaza"
              className="bg-white hover:bg-gray-100 text-blue px-8 py-4 rounded-full font-semibold transition-colors"
            >
              Découvrir Club Kaza
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
