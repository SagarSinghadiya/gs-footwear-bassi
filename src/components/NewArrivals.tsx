import { Zap } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Sports Runner X1",
    benefit: "Lightweight and comfortable",
    img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop",
    brand: "Nike"
  },
  {
    id: 2,
    name: "Urban Classic Sneaker",
    benefit: "Premium look, easy to wear",
    img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&auto=format&fit=crop",
    brand: "Puma"
  },
  {
    id: 3,
    name: "Action Grip Pro",
    benefit: "Anti-skid sole",
    img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&auto=format&fit=crop",
    brand: "Campus"
  },
  {
    id: 4,
    name: "Daily Comfort Slip-on",
    benefit: "Cushioned insole, Best for daily wear",
    img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&auto=format&fit=crop",
    brand: "Skechers"
  }
];

export default function NewArrivals() {
  return (
    <section id="new-arrivals" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-brand-red font-bold text-sm tracking-uppercase tracking-wider mb-2">
              <Zap size={16} className="fill-current" /> NEW STOCK ALERT
            </div>
            <h2 className="text-4xl sm:text-5xl font-heading font-black text-brand-black tracking-tight">
              Latest Arrivals
            </h2>
            <p className="text-gray-600 mt-3 max-w-xl text-lg">New stock aa gaya hai. Limited sizes available, size khatam hone se pehle book karein!</p>
          </div>
          <a href="https://wa.me/918058102782?text=Hi,%20show%20me%20all%20new%20arrivals" target="_blank" rel="noopener noreferrer" className="bg-brand-black text-white px-6 py-3 rounded-xl font-bold hover:bg-gray-800 transition-colors inline-block text-center whitespace-nowrap">
            Check All on WhatsApp
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 shrink-0">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 p-4 shrink-0">
                <span className="absolute top-3 left-3 bg-brand-red text-white text-[10px] font-black uppercase px-2 py-1 rounded-sm z-10">New</span>
                <img src={product.img} alt={product.name} className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">{product.brand}</p>
                  <h3 className="font-heading font-bold text-xl text-brand-black mb-1">{product.name}</h3>
                  <p className="text-sm text-gray-500 font-medium mb-4">{product.benefit}</p>
                </div>
                <a href={`https://wa.me/918058102782?text=I%20want%20to%20buy%20${product.name}%20by%20${product.brand}`} target="_blank" rel="noopener noreferrer" className="w-full bg-gray-100 hover:bg-gray-200 text-brand-black font-bold py-2.5 rounded-lg text-center text-sm transition-colors mt-auto">
                  Reserve via WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
