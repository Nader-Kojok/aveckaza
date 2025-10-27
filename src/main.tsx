import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from '@vuer-ai/react-helmet-async'
import './index.css'
import App from './App.tsx'
import Faq from './pages/FAQ.tsx'
import DevenirPro from './pages/DevenirPro.tsx'
import Entreprise from './pages/Entreprise.tsx'
import EnSavoirPlus from './pages/EnSavoirPlus.tsx'
import OffreEntreprises from './pages/OffreEntreprises.tsx'
import ClubKaza from './pages/ClubKaza.tsx'
import Blog from './pages/Blog.tsx'
import Services from './pages/Services.tsx'
import Contact from './pages/Contact.tsx'
import EntretienLogementSaisonPluies from './pages/articles/EntretienLogementSaisonPluies.tsx'
import ProlongerDureeVieClimatiseur from './pages/articles/ProlongerDureeVieClimatiseur.tsx'
import PlombsQuiSautent from './pages/articles/PlombsQuiSautent.tsx'
import PrixTravauxPeinture from './pages/articles/PrixTravauxPeinture.tsx'
import NotFound from './pages/NotFound.tsx'
import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'
import WhatsAppButton from './components/WhatsAppButton.tsx'
import ScrollToTop from './components/ScrollToTop.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <main id="main-content">
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/services" element={<Services />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/devenir-pro" element={<DevenirPro />} />
            <Route path="/entreprise" element={<Entreprise />} />
            <Route path="/en-savoir-plus" element={<EnSavoirPlus />} />
            <Route path="/offre-entreprises" element={<OffreEntreprises />} />
            <Route path="/club-kaza" element={<ClubKaza />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog/conseils-nettoyage-saison-pluies" element={<EntretienLogementSaisonPluies />} />
            <Route path="/blog/entretien-jardin-climat-tropical" element={<ProlongerDureeVieClimatiseur />} />
            <Route path="/blog/securite-domicile-guide-complet" element={<PlombsQuiSautent />} />
            <Route path="/blog/prix-travaux-peinture" element={<PrixTravauxPeinture />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)
