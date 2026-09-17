import { ArrowRight, MapPin, MessageCircle, ShieldCheck, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { useStoreStatus } from '../lib/storeStatus';

export default function Hero() {
  const { isOpen, fullBadgeText } = useStoreStatus();

  return (
    <section id="home" className="pt-28 pb-12 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-28 overflow-hidden relative">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-brand-red opacity-10 blur-3xl mix-blend-multiply pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-brand-navy opacity-5 blur-3xl mix-blend-multiply pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-6 text-center lg:text-left z-10"
          >
            {/* Top Status & Stock Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200/60 text-brand-red font-bold text-xs uppercase tracking-widest shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-red"></span>
                </span>
                New Stock Alert ⚡
              </div>

              {/* Dynamic Live Store Open/Closed Badge */}
              <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-bold transition-all shadow-xs ${
                isOpen 
                  ? 'bg-emerald-50 border-emerald-200/80 text-emerald-800' 
                  : 'bg-amber-50 border-amber-200/80 text-amber-800'
              }`}>
                <span className={`h-2 w-2 rounded-full ${isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`}></span>
                <span>{fullBadgeText}</span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-black leading-[1.08] text-brand-black tracking-tight">
              Best Branded<br />
              <span className="bg-gradient-to-r from-brand-red via-red-600 to-brand-red bg-clip-text text-transparent">Footwear</span> In Bassi.
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed">
              100% authentic models from top brands at honest, reasonable prices. <span className="text-brand-black font-semibold">Store visit karke try karein aur WhatsApp par instant hold karein!</span>
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3.5 pt-2 w-full sm:w-auto justify-center lg:justify-start">
              <a 
                href="https://wa.me/918058102782?text=Hello%20GS%20Footwear,%20I%20want%20to%20reserve%20shoes" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-brand-whatsapp hover:bg-brand-whatsapp-hover text-white px-7 py-4 rounded-xl font-bold text-base sm:text-lg shadow-lg shadow-green-500/25 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageCircle size={22} className="fill-current" />
                <span>WhatsApp Order</span>
              </a>
              <a 
                href="#location" 
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-brand-black hover:bg-gray-800 text-white px-7 py-4 rounded-xl font-bold text-base sm:text-lg shadow-xl shadow-black/15 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <MapPin size={20} className="text-brand-red" />
                <span>Visit Store</span>
              </a>
            </div>
            
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-gray-500 font-medium">
              <div className="flex -space-x-2">
                {[1,2,3,4].map((i) => (
                  <img key={i} className="w-8 h-8 rounded-full border-2 border-white object-cover object-center shadow-xs" src={`https://images.unsplash.com/photo-${i===1?'1534528741775-53994a69daeb':i===2?'1506794778202-cad84cf45f1d':i===3?'1517841905240-472988babdf9':'1500648767791-00dcc994a43e'}?w=100&h=100&fit=crop`} alt="Customer" />
                ))}
              </div>
              <p className="font-medium text-gray-600">Trusted by 500+ local customers in Bassi</p>
              <span className="hidden sm:inline text-gray-300">•</span>
              <span className="inline-flex items-center gap-1 text-brand-black font-semibold">
                <ShieldCheck size={16} className="text-emerald-600" /> Free Size Trial
              </span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative lg:h-[600px] w-full flex items-center justify-center z-10 mt-6 lg:mt-0"
          >
            {/* Main Hero Image Container */}
            <div className="relative w-full max-w-md mx-auto aspect-[4/5] sm:aspect-square lg:aspect-auto lg:h-full rounded-3xl overflow-hidden shadow-2xl group border border-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1400&auto=format&fit=crop" 
                alt="Premium Red Sneakers at GS Footwear Bassi" 
                fetchPriority="high"
                decoding="async"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"></div>
              
              {/* Floating Top Tag */}
              <div className="absolute top-4 left-4 z-20">
                <span className="inline-flex items-center gap-1.5 bg-black/60 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1.5 rounded-full border border-white/20 shadow-lg">
                  <Sparkles size={13} className="text-yellow-400" /> Trending in Bassi
                </span>
              </div>

              {/* Floating Bottom Card */}
              <div className="absolute bottom-5 left-5 right-5 z-20">
                <div className="bg-white/95 backdrop-blur-md px-5 py-4 rounded-2xl shadow-xl flex items-center justify-between border border-white/40">
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <p className="font-heading font-black text-brand-black text-lg sm:text-xl">Nike Red Edition</p>
                      <span className="text-[10px] bg-red-100 text-brand-red px-2 py-0.5 rounded-full font-bold uppercase">Original</span>
                    </div>
                    <p className="text-xs sm:text-sm font-medium text-gray-500">📍 Opposite Canara Bank, Bassi</p>
                  </div>
                  <a 
                    href="#location"
                    aria-label="Visit store"
                    className="bg-brand-red hover:bg-brand-red-hover text-white p-2.5 rounded-xl transition-transform hover:scale-105 active:scale-95 shadow-md shadow-red-500/20"
                  >
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Floating Elements for Streetwear Flair */}
            <div className="absolute hidden lg:block -left-10 top-16 bg-white/90 backdrop-blur-md p-2.5 rounded-2xl shadow-xl rotate-[-6deg] border border-gray-100">
               <img src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=200&h=200&fit=crop" alt="Shoe detail" className="w-20 h-20 rounded-xl object-cover" />
               <p className="text-[10px] font-bold text-center mt-1.5 text-gray-700">Nike Court</p>
            </div>
            <div className="absolute hidden lg:block -right-6 bottom-28 bg-white p-2 rounded-full shadow-2xl rotate-[10deg] z-20 border border-gray-100">
               <div className="w-20 h-20 bg-gradient-to-tr from-brand-red to-red-600 rounded-full flex flex-col items-center justify-center text-white font-black leading-none text-center shadow-inner">
                 <span className="text-lg">100%</span>
                 <span className="text-[9px] tracking-widest uppercase mt-0.5">Genuine</span>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
