import { Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useProducts } from '../lib/useProducts';

export default function NewArrivals() {
  const { products, loading } = useProducts();

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
          <Link to="/categories?selected=All" className="bg-brand-black text-white px-6 py-3 rounded-xl font-bold hover:bg-brand-red transition-all inline-block text-center whitespace-nowrap active:scale-95">
            Check All on Store
          </Link>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 gap-3 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[1,2,3,4].map((i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 animate-pulse flex flex-col">
                <div className="aspect-[4/3] bg-gray-200 shrink-0"></div>
                <div className="p-3 sm:p-5 flex-grow flex flex-col justify-between space-y-3">
                  <div>
                    <div className="h-3 bg-gray-200 rounded w-1/3 mb-1"></div>
                    <div className="h-5 bg-gray-200 rounded w-2/3 mb-1"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                  </div>
                  <div className="h-8 sm:h-10 bg-gray-100 rounded-lg mt-4"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 gap-3 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4 shrink-0">
              {products.slice(0, 8).map((product) => (
                <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 flex flex-col">
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 shrink-0">
                    <span className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-brand-red text-white text-[8px] sm:text-[9px] font-black uppercase px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-sm z-10">New</span>
                    <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-3 sm:p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-[9px] sm:text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">{product.brand}</p>
                      <h3 className="font-heading font-bold text-xs sm:text-base md:text-xl text-brand-black mb-1 line-clamp-1">{product.name}</h3>
                      <p className="text-[10px] sm:text-xs md:text-sm text-gray-500 font-medium mb-2 line-clamp-1 sm:line-clamp-none">{product.benefit}</p>
                      <p className="text-sm sm:text-base md:text-lg font-black text-brand-red mb-4">
                        ₹{Number(product.price) ? Number(product.price).toLocaleString('en-IN') : product.price}
                      </p>
                    </div>
                    <a href={`https://wa.me/918058102782?text=I%20want%20to%20buy%20${encodeURIComponent(product.name)}%20by%20${encodeURIComponent(product.brand)}%20for%20RS%20${encodeURIComponent(product.price)}`} target="_blank" rel="noopener noreferrer" className="w-full bg-gray-100 hover:bg-brand-whatsapp hover:text-white text-brand-black font-bold py-2 sm:py-2.5 rounded-lg text-center text-xs sm:text-sm transition-colors mt-auto block">
                      Reserve via WhatsApp
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {products.length > 8 && (
              <div className="text-center mt-12">
                <Link 
                  to="/categories?selected=All" 
                  className="inline-flex items-center gap-2 bg-brand-black text-white hover:bg-brand-red px-8 py-4 rounded-xl font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-black/10"
                >
                  Show More Shoes
                  <ArrowRight size={18} />
                </Link>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
