import { ArrowRight, MapPin, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-100 text-brand-red font-bold text-xs uppercase tracking-widest w-fit mx-auto lg:mx-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-red"></span>
              </span>
              New Stock Alert ⚡
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-heading font-black leading-[1.1] text-brand-black tracking-tight">
              Best Branded<br />
              <span className="text-brand-red">Footwear</span> In Bassi.
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 font-medium max-w-xl mx-auto lg:mx-0">
              Comfort + style + price, all in one place. Latest models from top brands at reasonable prices. <span className="text-brand-black font-semibold">Limited stock! Jaldi visit karein.</span>
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto justify-center lg:justify-start">
              <a href="https://wa.me/918058102782?text=Hello,%20I%20want%20to%20order%20shoes" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-brand-whatsapp hover:bg-brand-whatsapp-hover text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-green-500/30 transition-all active:scale-95">
                <MessageCircle size={22} className="fill-current" />
                WhatsApp Order
              </a>
              <a href="#location" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-brand-black hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-black/20 transition-all active:scale-95">
                <MapPin size={20} />
                Visit Store
              </a>
            </div>
            
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-4 text-sm text-gray-500 font-medium font-sans">
              <div className="flex -space-x-2">
                {[1,2,3,4].map((i) => (
                  <img key={i} className="w-8 h-8 rounded-full border-2 border-white object-cover object-center" src={`https://images.unsplash.com/photo-${i===1?'1534528741775-53994a69daeb':i===2?'1506794778202-cad84cf45f1d':i===3?'1517841905240-472988babdf9':'1500648767791-00dcc994a43e'}?w=100&h=100&fit=crop`} alt="Customer" />
                ))}
              </div>
              <p>Trusted by 500+ locals</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative lg:h-[600px] w-full flex items-center justify-center z-10 mt-8 lg:mt-0"
          >
            {/* Main Hero Image */}
            <div className="relative w-full max-w-md mx-auto aspect-[4/5] sm:aspect-square lg:aspect-auto lg:h-full rounded-2xl overflow-hidden shadow-2xl group">
              <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1400&auto=format&fit=crop" alt="Premium Red Sneakers" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              {/* Floating Tag */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur px-5 py-4 rounded-xl shadow-xl flex items-center justify-between">
                  <div>
                    <p className="font-heading font-bold text-brand-black text-xl">Nike Red Edition</p>
                    <p className="text-sm font-medium text-brand-red">🔥 Size khatam hone se pehle visit karein</p>
                  </div>
                  <div className="bg-brand-black text-white p-2 rounded-full">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements for design flair */}
            <div className="absolute hidden lg:block -left-12 top-20 bg-white p-3 rounded-2xl shadow-xl rotate-[-6deg]">
               <img src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=200&h=200&fit=crop" alt="Shoe detail" className="w-24 h-24 rounded-xl object-cover" />
            </div>
             <div className="absolute hidden lg:block -right-8 bottom-32 bg-white p-3 border-4 border-white rounded-full shadow-2xl rotate-[12deg] z-20">
               <div className="w-20 h-20 bg-brand-red rounded-full flex flex-col items-center justify-center text-white font-black leading-none text-center">
                 <span className="text-xl">100%</span>
                 <span className="text-[10px] tracking-widest uppercase">Genuine</span>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
