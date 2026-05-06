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

export default function App() {
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
