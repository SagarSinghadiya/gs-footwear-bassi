import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
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
import FAQ from './components/FAQ';

function HomePage() {
  // Reset dynamic metadata and canonical headers on homepage mount
  useEffect(() => {
    document.title = "GS Footwear | Best Branded Shoes in Bassi";
    
    const defaultDesc = "Shop branded shoes at reasonable prices. Located opposite Canara Bank, Bassi. New stock alert! WhatsApp us for orders.";
    
    // Standard Meta Description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', defaultDesc);
    }

    // OpenGraph Dynamic Tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', "GS Footwear | Best Branded Shoes in Bassi");
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
      <FAQ />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

function AnalyticsTracker() {
  const location = useLocation();
  const gaId = import.meta.env.VITE_GA_ID;

  useEffect(() => {
    if (!gaId) return;

    // 1. Check if the script tag has already been injected to prevent duplicates
    const scriptId = 'google-analytics-script';
    let script = document.getElementById(scriptId) as HTMLScriptElement;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
      document.head.appendChild(script);

      // Disable default landing page_view trigger on script inject to prevent double counting in SPA
      (window as any).gtag('config', gaId, { send_page_view: false });
    }

    // 2. Track route changes dynamically
    if (typeof (window as any).gtag === 'function') {
      (window as any).gtag('config', gaId, {
        page_path: location.pathname + location.search,
        page_title: document.title,
      });
    }
  }, [location, gaId]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <AnalyticsTracker />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/categories" element={<CategoriesPage />} />
      </Routes>
    </BrowserRouter>
  );
}
