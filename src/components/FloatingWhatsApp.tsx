import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function FloatingWhatsApp() {
  return (
    <motion.a
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
      href="https://wa.me/918058102782?text=Hi%20GS%20Footwear%20Bassi,%20I%20want%20to%20know%20more%20about%20your%20shoes!"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-brand-whatsapp hover:bg-brand-whatsapp-hover text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-transform hover:scale-110 active:scale-95 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={32} className="fill-current" />
      {/* Pulse rings */}
      <span className="absolute w-full h-full rounded-full border-2 border-brand-whatsapp group-hover:animate-ping opacity-50"></span>
    </motion.a>
  );
}
