import { Phone, MapPin, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', href: '/#home', isRoute: false },
    { name: 'Categories', href: '/categories', isRoute: true },
    { name: 'New Arrivals', href: '/#new-arrivals', isRoute: false },
    { name: 'Location', href: '/#location', isRoute: false },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b border-gray-100 shadow-sm">
      {/* Top Bar for immediate contact */}
      <div className="bg-brand-navy text-white text-xs font-semibold py-2 px-4 flex justify-between items-center sm:px-8">
        <a href="/#location" className="flex items-center gap-1 hover:text-gray-200">
          <MapPin size={12} /> <span className="hidden sm:inline">Opp. Canara Bank, Bassi, Jaipur</span><span className="sm:hidden">Bassi, Jaipur</span>
        </a>
        <a href="tel:+918058102782" className="flex items-center gap-1 hover:text-gray-200">
          <Phone size={12} /> +91 80581 02782
        </a>
      </div>

      <div className="px-4 py-4 sm:px-8 flex justify-between items-center bg-white">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0 flex items-center">
          <div className="text-lg sm:text-2xl font-heading font-black tracking-tighter uppercase text-brand-black">
            GS Footwear <span className="text-brand-red">Bassi</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-sm font-medium items-center">
          {links.map((link) => (
             link.isRoute ? (
               <Link key={link.name} to={link.href} className="text-gray-600 hover:text-brand-red transition-colors">
                 {link.name}
               </Link>
             ) : (
               <a key={link.name} href={link.href} className="text-gray-600 hover:text-brand-red transition-colors">
                 {link.name}
               </a>
             )
          ))}
          <a href="https://wa.me/918058102782?text=Hello%20GS%20Footwear,%20I'm%20looking%20for%20shoes" target="_blank" rel="noopener noreferrer" className="bg-brand-whatsapp hover:bg-brand-whatsapp-hover text-white px-5 py-2 rounded-full font-bold shadow-md transition-all active:scale-95 text-xs">
            WhatsApp Us
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
