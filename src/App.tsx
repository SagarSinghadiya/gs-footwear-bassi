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

function HomePage() {
  return (
    <main className="relative bg-white selection:bg-brand-red selection:text-white">
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
      </Routes>
    </BrowserRouter>
  );
}
