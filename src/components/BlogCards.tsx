import { Link } from 'react-router-dom'

export default function BlogCards() {
  const articles = [
    {
      id: 'conseils-nettoyage-saison-pluies',
      title: 'Conseils de nettoyage pour la saison des pluies',
      category: 'Nettoyage',
      image: '🌧️',
      color: 'from-secondary to-blue-400',
      description: 'Gardez votre maison fraîche et propre pendant la saison des pluies à Dakar.'
    },
    {
      id: 'entretien-jardin-climat-tropical',
      title: 'Entretien du jardin en climat tropical',
      category: 'Jardinage',
      image: '🌴',
      color: 'from-accent to-primary',
      description: 'Les meilleures pratiques pour un jardin luxuriant toute l\'année.'
    },
    {
      id: 'securite-domicile-guide-complet',
      title: 'Sécurité à domicile : Guide complet',
      category: 'Sécurité',
      image: '🔒',
      color: 'from-primary to-primary-dark',
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
              <div className={`bg-gradient-to-br ${article.color} rounded-2xl p-8 aspect-square flex items-center justify-center mb-4 group-hover:scale-105 transition-transform`}>
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">{article.image}</div>
                  <span className="text-sm font-semibold uppercase tracking-wide">
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
