import { Link } from 'react-router-dom'

export default function BlogCards() {
  const articles = [
    {
      id: 'prix-travaux-peinture',
      title: 'Peinture : les 6 facteurs qui font varier le prix des travaux',
      category: 'Design & Décoration',
      image: '/blog/travaux_peinture.webp',
      description: 'Comprendre ce qui influence le prix d\'un artisan peintre pour mieux anticiper vos travaux.'
    },
    {
      id: 'entretien-jardin-climat-tropical',
      title: '7 astuces incontournables pour prolonger la durée de vie de votre climatiseur',
      category: 'Climatisation',
      image: '/blog/prolonger_climatiseur.webp',
      description: 'Maximisez la durée de vie de votre climatiseur avec ces conseils d\'entretien essentiels.'
    },
    {
      id: 'conseils-nettoyage-saison-pluies',
      title: 'Comment entretenir son logement après la saison des pluies ?',
      category: 'Maintenance',
      image: '/blog/entretenir_logement.webp',
      description: 'Protégez votre maison des dégâts de la saison des pluies avec ces conseils pratiques.'
    },
    {
      id: 'securite-domicile-guide-complet',
      title: 'Plombs qui sautent : causes, solutions et quand faire appel à un électricien',
      category: 'Électricité',
      image: '/blog/plombs_sautent.webp',
      description: 'Identifiez pourquoi vos plombs sautent et découvrez les solutions adaptées.'
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-white/80 mb-2">BLOG</p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold">
            Trouvez les meilleurs conseils pour entretenir votre maison.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link
              key={article.id}
              to={`/blog/${article.id}`}
              className="group cursor-pointer"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-square mb-4 group-hover:scale-105 transition-transform">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <span className="text-sm font-semibold uppercase tracking-wide text-white">
                    {article.category}
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-display font-bold mb-2">
                {article.title}
              </h3>
              <p className="text-white/80 text-sm">
                {article.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
