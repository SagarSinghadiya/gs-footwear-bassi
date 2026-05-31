import { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Where is GS Footwear located in Bassi, Jaipur?",
    answer: "GS Footwear is centrally located in the heart of Bassi, Jaipur (Rajasthan 303301). You can find us directly Opposite Canara Bank, near Bidaji Ka Mandir and the New Low Floor Bus Stand. We are easily accessible with ample local parking."
  },
  {
    question: "Which brands of shoes are available at your store?",
    answer: "We trade in 100% genuine and authentic shoes from top national and international brands. This includes popular sports and lifestyle brands like Nike, Adidas, Puma, Campus, JQR Sports, Lakhani Touch, Action, and New Balance."
  },
  {
    question: "How does the online shoe reservation system work?",
    answer: "It is simple and customer-first! Browse our online Store Catalog page, filter by your favorite category or search for styles, and click the 'Reserve via WhatsApp' button. This generates a pre-filled WhatsApp message to us (+91 80581 02782) to hold your shoe size. You can then visit our store to try them on and pick them up."
  },
  {
    question: "What shoe categories do you offer?",
    answer: "We offer all major footwear varieties under one roof: high-performance running/sports shoes, trendy casual sneakers, premium leather formal shoes, durable daily wear slippers, rugged casual boots, and kids' footwear."
  },
  {
    question: "What are the opening hours for GS Footwear?",
    answer: "We are open 7 days a week, from Monday to Sunday, between 9:00 AM and 9:00 PM. Feel free to visit us any day of the week to check out our latest arrivals!"
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 -ml-10 w-48 h-48 rounded-full bg-brand-red opacity-5 blur-3xl pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-brand-red font-bold text-xs uppercase tracking-widest mb-3">
            <HelpCircle size={14} /> Clear Doubts
          </div>
          <h2 className="text-4xl sm:text-5xl font-heading font-black text-brand-black tracking-tight mb-4">
            Frequently Asked <span className="text-brand-red">Questions</span>
          </h2>
          <p className="text-gray-600 text-lg">GS Footwear se related sabhi common sawaal aur unke answers yahan dekhin.</p>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left font-bold text-brand-black hover:text-brand-red transition-colors duration-200"
                >
                  <span className="text-base sm:text-lg font-heading tracking-tight">{faq.question}</span>
                  <span className="text-gray-400 shrink-0">
                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </span>
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-1 border-t border-gray-50 text-gray-600 leading-relaxed text-sm sm:text-base font-medium">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
