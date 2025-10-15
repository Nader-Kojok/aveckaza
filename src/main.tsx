import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import CGV from './pages/CGV.tsx'
import FAQ from './pages/FAQ.tsx'
import DevenirPro from './pages/DevenirPro.tsx'
import Entreprise from './pages/Entreprise.tsx'
import EnSavoirPlus from './pages/EnSavoirPlus.tsx'
import OffreEntreprises from './pages/OffreEntreprises.tsx'
import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'
import WhatsAppButton from './components/WhatsAppButton.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cgv" element={<CGV />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/devenir-pro" element={<DevenirPro />} />
        <Route path="/entreprise" element={<Entreprise />} />
        <Route path="/en-savoir-plus" element={<EnSavoirPlus />} />
        <Route path="/offre-entreprises" element={<OffreEntreprises />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </BrowserRouter>
  </StrictMode>,
)
