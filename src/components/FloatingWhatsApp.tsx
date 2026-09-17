import { useState, useEffect, type MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [showBubble, setShowBubble] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Show conversational assistant bubble after 2.5 seconds
    const timer = setTimeout(() => {
      if (!dismissed) setShowBubble(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, [dismissed]);

  const handleDismiss = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowBubble(false);
    setDismissed(true);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">
      {/* Interactive Concierge Speech Bubble */}
      <AnimatePresence>
        {showBubble && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="pointer-events-auto bg-white rounded-2xl shadow-2xl p-4 border border-gray-100 max-w-xs text-left relative group/bubble"
          >
            <div className="flex items-center justify-between gap-2 mb-1.5">
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-brand-whatsapp animate-pulse"></span>
                <span className="text-xs font-bold text-gray-900 font-heading">GS Footwear Assistant</span>
              </div>
              <button 
                onClick={handleDismiss}
                className="text-gray-400 hover:text-gray-600 p-0.5 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Dismiss chat prompt"
              >
                <X size={14} />
              </button>
            </div>
            <a 
              href="https://wa.me/918058102782?text=Hello%20GS%20Footwear,%20I'm%20looking%20for%20shoes!" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-xs font-medium text-gray-600 hover:text-brand-whatsapp transition-colors leading-relaxed"
            >
              Koi specific shoe size ya model dhoondh rahe hain? Humse direct WhatsApp par poochhiye! 👟✨
            </a>
            {/* Triangular arrow indicator */}
            <div className="absolute -bottom-2 right-6 w-3 h-3 bg-white border-b border-r border-gray-100 rotate-45"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Button */}
      <motion.a
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
        href="https://wa.me/918058102782?text=Hi%20GS%20Footwear%20Bassi,%20I%20want%20to%20know%20more%20about%20your%20shoes!"
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto relative bg-brand-whatsapp hover:bg-brand-whatsapp-hover text-white p-3.5 sm:p-4 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 group"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-7 h-7 sm:w-8 sm:h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
        </svg>

        {/* Unread badge dot */}
        <span className="absolute -top-1 -right-1 bg-brand-red text-white text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-md">
          1
        </span>

        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full border-2 border-brand-whatsapp group-hover:animate-ping opacity-60"></span>
      </motion.a>
    </div>
  );
}
