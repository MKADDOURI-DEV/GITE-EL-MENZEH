import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import HomePage from "@/pages/HomePage";
import LeRiadPage from "@/pages/LeRiadPage";
import HebergementPage from "@/pages/HebergementPage";
import RestaurationPage from "@/pages/RestaurationPage";
import GaleriePage from "@/pages/GaleriePage";
import ServicesPage from "@/pages/ServicesPage";
import ContactPage from "@/pages/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/le-riad" element={<LeRiadPage />} />
            <Route path="/hebergement" element={<HebergementPage />} />
            <Route path="/restauration" element={<RestaurationPage />} />
            <Route path="/galerie" element={<GaleriePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}

export default App;
