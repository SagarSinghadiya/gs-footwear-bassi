import { Instagram, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white pt-20 pb-10 border-t-8 border-brand-red">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-12 mb-16">
          
          <div className="flex flex-col gap-6 col-span-2 md:col-span-1">
             <div className="text-3xl font-heading font-black tracking-tighter uppercase text-white">
               GS Footwear <span className="text-brand-red">Bassi</span>
             </div>
             <p className="text-gray-400 font-medium leading-relaxed max-w-sm">
               Your trusted local footwear retailer. We bring the latest branded shoes to Bassi at prices you will love. Comfort + style guaranteed.
             </p>
             <div className="flex flex-col gap-3 mt-2">
               <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Follow Us On Instagram</span>
               <a 
                 href="https://instagram.com/gsfootwearbassi" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="flex items-center gap-3 w-fit bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white font-bold px-5 py-2.5 rounded-xl transition-all shadow-md hover:shadow-xl hover:shadow-pink-500/10 active:scale-95 group text-sm"
               >
                 <Instagram size={18} className="group-hover:rotate-12 transition-transform duration-300" />
                 <span>@gsfootwearbassi</span>
               </a>
             </div>
          </div>

          <div className="flex flex-col gap-6 col-span-1">
            <h4 className="font-heading font-bold text-xl uppercase tracking-wider text-white">Contact Us</h4>
            <div className="flex flex-col gap-4 text-gray-400 font-medium">
              <a href="tel:+918058102782" className="flex items-center gap-3 hover:text-brand-red transition-colors text-sm sm:text-base">
                <Phone size={18} className="text-brand-red shrink-0" />
                <span className="truncate">+91 80581 02782</span>
              </a>
              <a href="https://wa.me/918058102782" className="flex items-center gap-3 hover:text-brand-whatsapp transition-colors text-sm sm:text-base">
                 <svg className="w-[18px] h-[18px] fill-current text-brand-whatsapp shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                 <span>WhatsApp Us</span>
              </a>
              <div className="flex items-start gap-3 mt-2 text-sm sm:text-base">
                <MapPin size={18} className="text-brand-red shrink-0 mt-1" />
                <p>Opposite Canara Bank, Bassi<br/>Jaipur, Rajasthan</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 col-span-1">
            <h4 className="font-heading font-bold text-xl uppercase tracking-wider text-white">Quick Links</h4>
            <div className="flex flex-col gap-3 text-gray-400 font-medium text-sm sm:text-base">
              <a href="/#home" className="hover:text-brand-red w-fit transition-colors">Home</a>
              <a href="/#new-arrivals" className="hover:text-brand-red w-fit transition-colors">New Arrivals</a>
              <Link to="/categories" className="hover:text-brand-red w-fit transition-colors">Categories</Link>
              <a href="/#location" className="hover:text-brand-red w-fit transition-colors">Visit Store</a>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-row items-center justify-between gap-4 text-gray-500 text-[10px] sm:text-sm font-medium">
          <p>© {new Date().getFullYear()} GS Footwear Bassi. All rights reserved.</p>
          <p className="hidden xs:block">Bassi's Premium Retailer</p>
        </div>
      </div>
    </footer>
  );
}
