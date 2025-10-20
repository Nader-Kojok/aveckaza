import { Helmet } from '@vuer-ai/react-helmet-async'
import { Mail, Phone, MapPin, Send, Clock, MessageCircle } from 'lucide-react'
import { useState } from 'react'
import type { FormEvent } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simuler l'envoi du formulaire
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      
      // Réinitialiser le message de succès après 5 secondes
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <Helmet>
        <title>Contact - Kaza Sénégal | Contactez-nous</title>
        <meta name="description" content="Contactez Kaza pour tous vos besoins de services à domicile au Sénégal. Notre équipe est à votre écoute pour répondre à vos questions." />
        <meta property="og:title" content="Contact - Kaza Sénégal" />
        <meta property="og:description" content="Contactez Kaza pour tous vos besoins de services à domicile au Sénégal." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://aveckaza.com/contact" />
      </Helmet>

      <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-blue to-blue-dark text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Contactez-nous
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Une question ? Un projet ? Notre équipe est là pour vous accompagner dans tous vos besoins de services à domicile.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Contact Info Cards */}
              <div className="lg:col-span-1 space-y-6">
                {/* Phone Card */}
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-gray-900 mb-2">Téléphone</h3>
                  <p className="text-gray-600 mb-3">Du lundi au samedi, 8h - 20h</p>
                  <a 
                    href="tel:+221787891010" 
                    className="text-primary hover:text-primary-dark font-semibold text-lg transition-colors"
                  >
                    +221 78 789 10 10
                  </a>
                </div>

                {/* Email Card */}
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-600 mb-3">Réponse sous 24h</p>
                  <a 
                    href="mailto:contact@aveckaza.com" 
                    className="text-primary hover:text-primary-dark font-semibold transition-colors break-all"
                  >
                    contact@aveckaza.com
                  </a>
                </div>

                {/* Location Card */}
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-gray-900 mb-2">Adresse</h3>
                  <p className="text-gray-600 mb-3">Venez nous rendre visite</p>
                  <p className="text-gray-900 font-medium">
                    Dakar, Sénégal 🇸🇳
                  </p>
                </div>

                {/* WhatsApp Card */}
                <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow text-white">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-2">WhatsApp</h3>
                  <p className="text-white/90 mb-4">Réponse instantanée</p>
                  <a 
                    href="https://wa.me/221787891010" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-green-600 px-4 py-2 rounded-full font-semibold hover:bg-white/90 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Discuter sur WhatsApp
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <div className="mb-8">
                    <h2 className="font-display text-3xl font-bold text-gray-900 mb-3">
                      Envoyez-nous un message
                    </h2>
                    <p className="text-gray-600">
                      Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
                    </p>
                  </div>

                  {submitStatus === 'success' && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-green-800 font-semibold">Message envoyé avec succès !</p>
                        <p className="text-green-700 text-sm mt-1">Nous vous répondrons dans les plus brefs délais.</p>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                          Nom complet *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          placeholder="Votre nom"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          placeholder="votre@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                          Téléphone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          placeholder="+221 XX XXX XX XX"
                        />
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                          Sujet *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        >
                          <option value="">Sélectionnez un sujet</option>
                          <option value="service">Demande de service</option>
                          <option value="devis">Demande de devis</option>
                          <option value="entreprise">Offre entreprise</option>
                          <option value="pro">Devenir professionnel</option>
                          <option value="club">Club Kaza</option>
                          <option value="autre">Autre</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                        placeholder="Décrivez votre demande en détail..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-4 px-8 rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Envoyer le message
                        </>
                      )}
                    </button>
                  </form>
                </div>

                {/* Hours Info */}
                <div className="mt-6 bg-blue-50 rounded-xl p-6 border border-blue-100">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-gray-900 mb-2">
                        Horaires d'ouverture
                      </h3>
                      <div className="space-y-1 text-sm text-gray-700">
                        <p><span className="font-semibold">Lundi - Vendredi :</span> 8h00 - 20h00</p>
                        <p><span className="font-semibold">Samedi :</span> 9h00 - 18h00</p>
                        <p><span className="font-semibold">Dimanche :</span> Fermé</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary to-primary-dark text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Besoin d'un service immédiat ?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Réservez directement en ligne et profitez de nos services dès aujourd'hui
            </p>
            <a
              href="https://commander.aveckaza.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-primary hover:bg-gray-50 px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-xl hover:shadow-2xl"
            >
              Réserver maintenant
              <Send className="w-5 h-5" />
            </a>
          </div>
        </section>
      </main>
    </>
  )
}
