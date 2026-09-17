import { Phone, MapPin, Menu, X, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', href: '/#home', isRoute: false },
    { name: 'Categories', href: '/categories', isRoute: true },
    { name: 'New Arrivals', href: '/#new-arrivals', isRoute: false },
    { name: 'Location', href: '/#location', isRoute: false },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/90 border-b border-gray-100/80 shadow-xs transition-all">
      {/* Top Bar for immediate contact & announcement */}
      <div className="bg-brand-navy text-white text-[11px] sm:text-xs font-semibold py-2 px-4 flex justify-between items-center sm:px-8">
        <a href="/#location" className="flex items-center gap-1.5 hover:text-red-200 transition-colors">
          <MapPin size={12} className="text-brand-red shrink-0" /> 
          <span className="hidden sm:inline">Opp. Canara Bank, Bassi, Jaipur</span>
          <span className="sm:hidden">Bassi, Jaipur</span>
        </a>
        <div className="hidden lg:flex items-center gap-1.5 text-red-200 text-[11px]">
          <Sparkles size={12} className="text-yellow-400" />
          <span>New Season Drops: Nike, Campus & Puma in Store</span>
        </div>
        <a href="tel:+918058102782" className="flex items-center gap-1.5 hover:text-red-200 transition-colors">
          <Phone size={12} className="text-brand-whatsapp shrink-0" /> 
          <span>+91 80581 02782</span>
        </a>
      </div>

      <div className="px-4 py-3.5 sm:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0 flex items-center group">
          <div className="text-xl sm:text-2xl font-heading font-black tracking-tighter uppercase text-brand-black group-hover:scale-102 transition-transform">
            GS <span className="text-brand-red">Footwear</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-7 text-sm font-semibold items-center">
          {links.map((link) => {
            const isActive = link.isRoute && location.pathname === link.href;
            return link.isRoute ? (
              <Link 
                key={link.name} 
                to={link.href} 
                className={`transition-colors py-1 ${
                  isActive ? 'text-brand-red font-bold' : 'text-gray-600 hover:text-brand-red'
                }`}
              >
                {link.name}
              </Link>
            ) : (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-gray-600 hover:text-brand-red transition-colors py-1"
              >
                {link.name}
              </a>
            );
          })}
          <a 
            href="https://wa.me/918058102782?text=Hello%20GS%20Footwear,%20I'm%20looking%20for%20shoes" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-brand-whatsapp hover:bg-brand-whatsapp-hover text-white px-5 py-2 rounded-full font-bold shadow-md shadow-green-500/20 transition-all hover:scale-105 active:scale-95 text-xs flex items-center gap-1.5"
          >
            <span>WhatsApp Us</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-brand-black p-1">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-6 shadow-lg pb-8">
          <div className="flex flex-col space-y-4 text-center text-lg font-medium">
            {links.map((link) => (
               link.isRoute ? (
                 <Link key={link.name} to={link.href} onClick={() => setIsOpen(false)} className="text-gray-800 hover:text-brand-red py-2 border-b border-gray-50 block">
                   {link.name}
                 </Link>
               ) : (
                 <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-gray-800 hover:text-brand-red py-2 border-b border-gray-50 block">
                   {link.name}
                 </a>
               )
            ))}
            <a href="https://wa.me/918058102782?text=Hello%20GS%20Footwear,%20I'm%20looking%20for%20shoes" target="_blank" rel="noopener noreferrer" className="bg-brand-whatsapp text-white py-3 mt-4 rounded-full font-bold text-center block text-sm">
              WhatsApp Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
