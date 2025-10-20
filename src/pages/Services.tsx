import { Droplet, Refrigerator, Wrench, Zap, Wind, Lock, Leaf, Paintbrush, Shield, Droplets, Armchair, Grid3x3, SquareStack } from 'lucide-react'
import SEO from '../components/SEO'

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
      icon: Droplet,
      title: 'Plomberie',
      description: 'Installation et réparation de plomberie. Fuites, robinetterie, canalisations, nos plombiers interviennent rapidement.',
      features: ['Réparation fuites', 'Installation sanitaires', 'Débouchage', 'Dépannage urgence']
    },
    {
      icon: Refrigerator,
      title: 'Électroménager',
      description: 'Réparation et entretien d\'électroménager. Machines à laver, réfrigérateurs, climatiseurs et plus encore.',
      features: ['Réparation tous appareils', 'Entretien préventif', 'Pièces détachées', 'Garantie travaux']
    },
    {
      icon: Wrench,
      title: 'Petits travaux',
      description: 'Tous petits travaux de bricolage et réparation. Installation, montage, fixation par des professionnels qualifiés.',
      features: ['Montage meubles', 'Fixations murales', 'Réparations diverses', 'Installation équipements']
    },
    {
      icon: Zap,
      title: 'Électricité',
      description: 'Installation électrique et dépannage. Tableaux électriques, prises, éclairage par des électriciens certifiés.',
      features: ['Installation complète', 'Dépannage rapide', 'Mise aux normes', 'Éclairage LED']
    },
    {
      icon: Wind,
      title: 'Climatisation',
      description: 'Installation, entretien et réparation de climatisation. Climatiseurs split, centralisés, maintenance régulière.',
      features: ['Installation clim', 'Entretien annuel', 'Recharge gaz', 'Dépannage 24/7']
    },
    {
      icon: Lock,
      title: 'Serrurier',
      description: 'Services de serrurerie professionnelle. Ouverture de porte, changement de serrure, blindage et sécurisation.',
      features: ['Ouverture porte', 'Changement serrure', 'Blindage porte', 'Dépannage urgence']
    },
    {
      icon: Leaf,
      title: 'Jardinage',
      description: 'Entretien de jardin et espaces verts. Taille, tonte, plantation et aménagement paysager par des professionnels.',
      features: ['Tonte pelouse', 'Taille arbres', 'Plantation', 'Entretien régulier']
    },
    {
      icon: Paintbrush,
      title: 'Peinture',
      description: 'Travaux de peinture intérieure et extérieure. Préparation des surfaces, peinture de qualité, finitions soignées.',
      features: ['Peinture intérieure', 'Peinture extérieure', 'Préparation murs', 'Finitions décoratives']
    },
    {
      icon: Shield,
      title: 'Sécurité',
      description: 'Installation de systèmes de sécurité. Alarmes, caméras de surveillance, contrôle d\'accès pour votre tranquillité.',
      features: ['Alarmes anti-intrusion', 'Vidéosurveillance', 'Contrôle accès', 'Télésurveillance']
    },
    {
      icon: Droplets,
      title: 'Étanchéité',
      description: 'Travaux d\'étanchéité et d\'isolation. Toitures, terrasses, murs, protection contre les infiltrations d\'eau.',
      features: ['Étanchéité toiture', 'Traitement terrasse', 'Isolation thermique', 'Anti-infiltration']
    },
    {
      icon: Armchair,
      title: 'Meubles & menuiserie bois',
      description: 'Fabrication et réparation de meubles sur mesure. Menuiserie bois, ébénisterie, aménagements personnalisés.',
      features: ['Meubles sur mesure', 'Réparation meubles', 'Ébénisterie', 'Aménagement intérieur']
    },
    {
      icon: Grid3x3,
      title: 'Faux-plafond',
      description: 'Installation de faux-plafonds décoratifs et techniques. Placo, staff, isolation acoustique et thermique.',
      features: ['Placo BA13', 'Faux-plafond décoratif', 'Isolation phonique', 'Éclairage intégré']
    },
    {
      icon: SquareStack,
      title: 'Carrelage',
      description: 'Pose de carrelage et faïence. Sol, mur, salle de bain, cuisine, travaux de qualité par des carreleurs experts.',
      features: ['Pose carrelage sol', 'Faïence murale', 'Joints parfaits', 'Finitions soignées']
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <SEO
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
            {services.map((service) => {
              const Icon = service.icon
              return (
                <div
                  key={service.title}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                >
                  <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-primary" />
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
              )
            })}
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
