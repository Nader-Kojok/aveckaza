import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.tsx'
import CGV from './pages/CGV.tsx'
import FAQ from './pages/FAQ.tsx'
import DevenirPro from './pages/DevenirPro.tsx'
import Entreprise from './pages/Entreprise.tsx'
import EnSavoirPlus from './pages/EnSavoirPlus.tsx'
import OffreEntreprises from './pages/OffreEntreprises.tsx'
import ClubKaza from './pages/ClubKaza.tsx'
import Blog from './pages/Blog.tsx'
import Services from './pages/Services.tsx'
import ConseilsNettoyageSaisonPluies from './pages/articles/ConseilsNettoyageSaisonPluies.tsx'
import EntretienJardinClimatTropical from './pages/articles/EntretienJardinClimatTropical.tsx'
import SecuriteDomicileGuideComplet from './pages/articles/SecuriteDomicileGuideComplet.tsx'
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
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/services" element={<Services />} />
          <Route path="/cgv" element={<CGV />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/devenir-pro" element={<DevenirPro />} />
          <Route path="/entreprise" element={<Entreprise />} />
          <Route path="/en-savoir-plus" element={<EnSavoirPlus />} />
          <Route path="/offre-entreprises" element={<OffreEntreprises />} />
          <Route path="/club-kaza" element={<ClubKaza />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/conseils-nettoyage-saison-pluies" element={<ConseilsNettoyageSaisonPluies />} />
          <Route path="/blog/entretien-jardin-climat-tropical" element={<EntretienJardinClimatTropical />} />
          <Route path="/blog/securite-domicile-guide-complet" element={<SecuriteDomicileGuideComplet />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)
