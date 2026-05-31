import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import NewArrivals from './components/NewArrivals';
import Categories from './components/Categories';
import Brands from './components/Brands';
import Testimonials from './components/Testimonials';
import Location from './components/Location';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import AdminDashboard from './components/admin/AdminDashboard';
import CategoriesPage from './components/CategoriesPage';

function HomePage() {
  // Reset dynamic metadata and canonical headers on homepage mount
  useEffect(() => {
    document.title = "GS Footwear Bassi | Best Branded Shoes in Bassi";
    
    const defaultDesc = "Shop branded shoes at reasonable prices. Located opposite Canara Bank, Bassi. New stock alert! WhatsApp us for orders.";
    
    // Standard Meta Description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', defaultDesc);
    }

    // OpenGraph Dynamic Tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', "GS Footwear Bassi | Best Branded Shoes in Bassi");
    }
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', defaultDesc);
    }
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', "https://gsfootwear.in/");
    }

    // Canonical link tag
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', 'https://gsfootwear.in/');
  }, []);

  return (
    <main className="relative bg-white selection:bg-brand-red selection:text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustStrip />
      <NewArrivals />
      <Categories />
      <Brands />
      <Testimonials />
      <Location />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/categories" element={<CategoriesPage />} />
      </Routes>
    </BrowserRouter>
  );
}
