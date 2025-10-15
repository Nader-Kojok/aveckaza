export default function CGV() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-display font-bold text-gray-900 mb-8">
          Conditions Générales de Vente
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">1. Objet</h2>
            <p className="text-gray-700 mb-4">
              Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre Kaza et ses clients pour la fourniture de services à domicile au Sénégal.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">2. Services proposés</h2>
            <p className="text-gray-700 mb-4">
              Kaza propose une plateforme de mise en relation entre des clients et des professionnels qualifiés pour des services à domicile incluant :
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Ménage et nettoyage</li>
              <li>Bricolage et réparations</li>
              <li>Jardinage</li>
              <li>Plomberie</li>
              <li>Électricité</li>
              <li>Et autres services connexes</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">3. Réservation et paiement</h2>
            <p className="text-gray-700 mb-4">
              Les réservations s'effectuent via notre plateforme en ligne. Le paiement peut être effectué par :
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Orange Money</li>
              <li>Wave</li>
              <li>Carte bancaire</li>
              <li>Espèces (selon disponibilité)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">4. Annulation et modification</h2>
            <p className="text-gray-700 mb-4">
              Les clients peuvent annuler ou modifier leur réservation jusqu'à 24 heures avant l'intervention prévue sans frais. 
              Toute annulation tardive pourra entraîner des frais de 50% du montant de la prestation.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">5. Garanties</h2>
            <p className="text-gray-700 mb-4">
              Tous nos professionnels sont vérifiés, formés et assurés. En cas de problème avec une prestation, 
              contactez notre service client dans les 48 heures suivant l'intervention.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">6. Responsabilité</h2>
            <p className="text-gray-700 mb-4">
              Kaza agit en tant qu'intermédiaire entre les clients et les professionnels. Nous mettons tout en œuvre 
              pour garantir la qualité des services, mais ne pouvons être tenus responsables des dommages indirects.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">7. Protection des données</h2>
            <p className="text-gray-700 mb-4">
              Vos données personnelles sont traitées conformément à notre politique de confidentialité et aux 
              réglementations en vigueur au Sénégal.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">8. Contact</h2>
            <p className="text-gray-700 mb-4">
              Pour toute question concernant ces CGV, contactez-nous :
            </p>
            <ul className="list-none text-gray-700 space-y-2">
              <li>📧 Email : <a href="mailto:contact@aveckaza.com" className="text-primary hover:underline">contact@aveckaza.com</a></li>
              <li>📞 Téléphone : <a href="tel:+221787891010" className="text-primary hover:underline">+221 78 789 10 10</a></li>
              <li>📍 Adresse : Dakar, Sénégal</li>
            </ul>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Dernière mise à jour : Janvier 2025
          </p>
        </div>
      </div>
    </div>
  )
}
