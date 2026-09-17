import { useState } from 'react';
import { MapPin, Phone, Clock, ArrowRight, Copy, Check, Bus, Building2, Car, Navigation } from 'lucide-react';
import { useStoreStatus } from '../lib/storeStatus';

export default function Location() {
  const { isOpen, timingText, fullBadgeText } = useStoreStatus();
  const [copied, setCopied] = useState(false);

  const fullAddress = "Opposite Canara Bank, near Bidaji Ka Mandir, New Low Floor Bus Stand, Bassi, Jaipur, Rajasthan 303301";

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="location" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-left mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-brand-red font-bold text-xs uppercase tracking-widest mb-3">
            <MapPin size={14} /> Local Flagship Store
          </div>
          <h2 className="text-4xl sm:text-5xl font-heading font-black text-brand-black tracking-tight mb-3">
            Visit Us In <span className="text-brand-red">Bassi</span>
          </h2>
          <p className="text-gray-600 text-lg">Aapke local area me original branded shoes ki dedicated shop.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          
          <div className="flex flex-col gap-6 w-full">
            <div className="bg-gray-50 p-6 sm:p-8 rounded-3xl flex flex-col gap-6 border border-gray-100 shadow-xs">
              
              {/* Live Store Status Ribbon */}
              <div className={`flex items-center justify-between px-4 py-3 rounded-2xl border text-xs font-bold ${
                isOpen 
                  ? 'bg-emerald-50 border-emerald-200/80 text-emerald-800' 
                  : 'bg-amber-50 border-amber-200/80 text-amber-800'
              }`}>
                <div className="flex items-center gap-2">
                  <span className={`h-2.5 w-2.5 rounded-full ${isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`}></span>
                  <span>{isOpen ? 'STORE IS OPEN TODAY' : 'STORE IS CURRENTLY CLOSED'}</span>
                </div>
                <span>{timingText}</span>
              </div>

              {/* Store Address & Copy Action */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-red text-white p-3 rounded-2xl shrink-0 shadow-xs">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-brand-black mb-1">Store Address</h3>
                    <p className="text-gray-600 leading-relaxed font-medium text-sm sm:text-base">
                      Opposite Canara Bank, Bassi<br/>
                      Near Bidaji Ka Mandir,<br/>
                      New Low Floor Bus Stand,<br/>
                      Jaipur, Rajasthan 303301
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleCopyAddress}
                  className="shrink-0 flex items-center gap-1.5 text-xs font-bold px-3 py-2 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 transition-all hover:border-brand-red active:scale-95 shadow-xs"
                  title="Copy full address"
                >
                  {copied ? (
                    <>
                      <Check size={14} className="text-emerald-600" />
                      <span className="text-emerald-700">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="h-px bg-gray-200/80 w-full"></div>

              {/* Operating Hours */}
              <div className="flex items-start gap-4">
                <div className="bg-brand-red text-white p-3 rounded-2xl shrink-0 shadow-xs">
                  <Clock size={22} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-brand-black mb-1">Working Hours</h3>
                  <p className="text-gray-600 font-medium text-sm sm:text-base">Monday to Sunday (Open 7 Days)<br/>9:00 AM – 9:00 PM IST</p>
                </div>
              </div>

              <div className="h-px bg-gray-200/80 w-full"></div>

              {/* Phone / WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="bg-brand-whatsapp text-white p-3 rounded-2xl shrink-0 shadow-xs">
                  <Phone size={22} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-brand-black mb-1">Call / WhatsApp Support</h3>
                  <a href="tel:+918058102782" className="text-gray-900 hover:text-brand-red font-bold text-base sm:text-lg transition-colors">
                    +91 80581 02782
                  </a>
                </div>
              </div>
            </div>

            {/* Landmark Quick Info Cards */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-gray-50 border border-gray-100 p-3.5 rounded-2xl text-center flex flex-col items-center">
                <Building2 size={20} className="text-brand-red mb-1" />
                <p className="text-[10px] font-bold text-gray-400 uppercase">Landmark</p>
                <p className="text-xs font-bold text-gray-800 leading-tight mt-0.5">Opp. Canara Bank</p>
              </div>
              <div className="bg-gray-50 border border-gray-100 p-3.5 rounded-2xl text-center flex flex-col items-center">
                <Bus size={20} className="text-brand-navy mb-1" />
                <p className="text-[10px] font-bold text-gray-400 uppercase">Transit</p>
                <p className="text-xs font-bold text-gray-800 leading-tight mt-0.5">1 Min from Bus Stand</p>
              </div>
              <div className="bg-gray-50 border border-gray-100 p-3.5 rounded-2xl text-center flex flex-col items-center">
                <Car size={20} className="text-emerald-600 mb-1" />
                <p className="text-[10px] font-bold text-gray-400 uppercase">Convenience</p>
                <p className="text-xs font-bold text-gray-800 leading-tight mt-0.5">Free Front Parking</p>
              </div>
            </div>

            <a 
              href="https://maps.google.com/?q=Canara+Bank+Bassi+Jaipur" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-between bg-brand-black hover:bg-gray-800 text-white px-8 py-4 sm:py-5 rounded-2xl font-bold text-base sm:text-lg shadow-xl shadow-black/10 transition-all active:scale-95 group"
            >
              <span className="flex items-center gap-2">
                <Navigation size={20} className="text-brand-red" />
                Get Directions in Google Maps
              </span>
              <ArrowRight size={22} className="group-hover:translate-x-1.5 transition-transform" />
            </a>
          </div>

          <div className="bg-gray-200 rounded-3xl overflow-hidden shadow-sm h-[400px] lg:h-[530px] border border-gray-100 flex items-center justify-center">
            {/* Embed Google Maps or functional placeholder */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113885.19504787968!2d75.98661649999999!3d26.837839399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396ce22a16c1ec03%3A0xe4c3af4a8b79b29d!2sBassi%2C%20Rajasthan%20303301!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[30%] hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
