const brands = [
  "Adidas", "Nike", "Puma", "New Balance", "Reebok", "Campus", "Good Lee", "JQR Sports", "Lakhani Touch", "Action"
];

export default function Brands() {
  return (
    <section className="py-16 bg-gray-900 border-y-4 border-brand-red overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center mb-8">
        <h2 className="text-white font-heading font-black tracking-widest uppercase text-sm opacity-50">Top Brands Traded</h2>
      </div>
      
      {/* Auto-scrolling marquee effect */}
      <div className="relative flex overflow-x-hidden group">
        <div className="py-4 animate-marquee whitespace-nowrap flex items-center gap-12 sm:gap-24 px-12">
          {brands.map((brand, idx) => (
            <span key={idx} className="text-3xl sm:text-5xl font-heading font-black text-white/20 hover:text-white transition-colors duration-300 cursor-default">
              {brand}
            </span>
          ))}
        </div>
        <div className="absolute top-0 py-4 animate-marquee2 whitespace-nowrap flex items-center gap-12 sm:gap-24 px-12">
          {brands.map((brand, idx) => (
            <span key={'dup-'+idx} className="text-3xl sm:text-5xl font-heading font-black text-white/20 hover:text-white transition-colors duration-300 cursor-default">
              {brand}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 25s linear infinite;
        }
        group:hover .animate-marquee, group:hover .animate-marquee2 {
          animation-play-state: paused;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
      `}</style>
    </section>
  );
}
