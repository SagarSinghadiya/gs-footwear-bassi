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
              {products.slice(0, 8).map((product) => {
                const numPrice = Number(product.price);
                const mrpPrice = numPrice ? Math.round(numPrice * 1.35) : null;

                return (
                  <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 group border border-gray-100 flex flex-col hover:-translate-y-1">
                    <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 shrink-0">
                      <span className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-brand-red text-white text-[9px] sm:text-[10px] font-black uppercase px-2 py-0.5 rounded-sm z-10 shadow-xs">
                        {product.category || 'Featured'}
                      </span>
                      <span className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-black/60 backdrop-blur-xs text-white text-[9px] font-bold px-1.5 py-0.5 rounded z-10">
                        100% Genuine
                      </span>
                      <img 
                        src={product.imageUrl} 
                        alt={`${product.brand} ${product.name} - Latest Arrival at GS Footwear`} 
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500" 
                      />
                    </div>
                    <div className="p-3 sm:p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between gap-1 mb-1">
                          <p className="text-[10px] sm:text-xs font-black text-gray-400 uppercase tracking-wider">{product.brand}</p>
                          <span className="text-[10px] text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded font-bold">In Store</span>
                        </div>
                        <h3 className="font-heading font-bold text-xs sm:text-base text-brand-black mb-1 line-clamp-1 group-hover:text-brand-red transition-colors">{product.name}</h3>
                        <p className="text-[10px] sm:text-xs text-gray-500 font-medium mb-2 line-clamp-1">{product.benefit}</p>

                        {/* Available Sizes Strip */}
                        <div className="flex items-center gap-1 my-2 overflow-x-auto no-scrollbar py-0.5">
                          <span className="text-[9px] font-bold text-gray-400 uppercase mr-0.5 shrink-0">Sizes:</span>
                          {['6', '7', '8', '9', '10'].map((sz) => (
                            <span key={sz} className="text-[9px] sm:text-[10px] font-semibold bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded border border-gray-200/60 shrink-0">
                              {sz}
                            </span>
                          ))}
                        </div>

                        {/* Price Display */}
                        <div className="flex items-baseline gap-2 mb-3">
                          <p className="text-sm sm:text-lg font-black text-brand-red">
                            ₹{numPrice ? numPrice.toLocaleString('en-IN') : product.price}
                          </p>
                          {mrpPrice && (
                            <span className="text-xs text-gray-400 line-through font-medium">
                              ₹{mrpPrice.toLocaleString('en-IN')}
                            </span>
                          )}
                        </div>
                      </div>
                      <a 
                        href={`https://wa.me/918058102782?text=I%20want%20to%20reserve%20${encodeURIComponent(product.name)}%20by%20${encodeURIComponent(product.brand)}%20for%20RS%20${encodeURIComponent(product.price)}`} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-full bg-brand-black hover:bg-brand-whatsapp text-white font-bold py-2 sm:py-2.5 rounded-xl text-center text-xs sm:text-sm transition-all duration-300 mt-auto flex items-center justify-center gap-1.5 shadow-xs group-hover:shadow-md"
                      >
                        <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                        </svg>
                        <span>Reserve via WhatsApp</span>
                      </a>
                    </div>
                  </div>
                );
              })}
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
