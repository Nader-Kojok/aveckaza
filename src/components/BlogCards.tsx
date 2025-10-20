import { Link } from 'react-router-dom'
import { placeholders } from '../lib/placeholder'

export default function BlogCards() {
  const articles = [
    {
      id: 'conseils-nettoyage-saison-pluies',
      title: 'Conseils de nettoyage pour la saison des pluies',
      category: 'Nettoyage',
      image: placeholders.blog.rainySeasonCleaning,
      description: 'Gardez votre maison fraîche et propre pendant la saison des pluies à Dakar.'
    },
    {
      id: 'entretien-jardin-climat-tropical',
      title: 'Entretien du jardin en climat tropical',
      category: 'Jardinage',
      image: placeholders.blog.tropicalGarden,
      description: 'Les meilleures pratiques pour un jardin luxuriant toute l\'année.'
    },
    {
      id: 'securite-domicile-guide-complet',
      title: 'Sécurité à domicile : Guide complet',
      category: 'Sécurité',
      image: placeholders.blog.homeSecurity,
      description: 'Protégez votre maison et votre famille avec ces conseils essentiels.'
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
