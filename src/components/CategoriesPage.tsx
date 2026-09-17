import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useProducts, Product } from '../lib/useProducts';
import { Search, ShoppingBag, ArrowLeft, RefreshCw } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingWhatsApp from './FloatingWhatsApp';

const CATEGORIES = [
  "All",
  "Sports / Running",
  "Sneakers",
  "Formal Shoes",
  "Slippers",
  "Casual Boots",
  "Kids' Shoes",
  "Casual",
  "Other"
];

export default function CategoriesPage() {
  const { products, loading } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  
  // URL Param reader/writer
  const activeCategory = searchParams.get('selected') || 'All';
  const [searchQuery, setSearchQuery] = useState('');

  // Scroll to top and update dynamic SEO headers on page/category change
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Dynamic page title based on active category
    const categoryTitle = activeCategory === 'All' ? 'Store Catalog' : `${activeCategory} Collection`;
    const fullTitle = `${categoryTitle} | GS Footwear - Branded Shoes`;
    document.title = fullTitle;
    
    // Dynamic meta description content
    const descText = activeCategory === 'All'
      ? 'Browse the premium shoe catalog at GS Footwear, Jaipur. Shop running shoes, lifestyle sneakers, formal wear, and boots at best prices.'
      : `Explore our ${activeCategory.toLowerCase()} collection at GS Footwear, Jaipur. Shop premium authentic designs, latest sizes, and reserve via WhatsApp.`;

    // Standard Meta Description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', descText);
    }

    // Dynamic OpenGraph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', fullTitle);
    }
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', descText);
    }
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', `https://gsfootwear.in/categories?selected=${encodeURIComponent(activeCategory)}`);
    }

    // Dynamic Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', `https://gsfootwear.in/categories?selected=${encodeURIComponent(activeCategory)}`);
  }, [activeCategory]);

  const handleCategorySelect = (categoryName: string) => {
    setSearchParams({ selected: categoryName });
  };

  // Filtering logic
  const filteredProducts = products.filter((product) => {
    const matchesCategory = activeCategory === 'All' || product.category.toLowerCase() === activeCategory.toLowerCase();
    const matchesSearch = 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (product.benefit && product.benefit.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  // Calculate counts for badges
  const getCategoryCount = (categoryName: string) => {
    if (categoryName === 'All') return products.length;
    return products.filter((p) => p.category.toLowerCase() === categoryName.toLowerCase()).length;
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans overflow-x-hidden">
      <Navbar />

      {/* Main Content Spacer */}
      <div className="pt-24 md:pt-32 flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6">
          
          {/* Header & Back Navigation */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
            <div>
              <Link to="/" className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-500 hover:text-brand-red mb-3 group transition-colors">
                <ArrowLeft size={16} className="transform group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </Link>
              <h1 className="text-2xl sm:text-4xl font-heading font-black text-brand-black tracking-tight flex items-center gap-3">
                Store <span className="text-brand-red">Catalog</span>
              </h1>
              <p className="text-gray-500 text-xs sm:text-sm mt-1">Browse premium shoes by category and reserve yours via WhatsApp.</p>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search by brand or style..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-gray-200 text-brand-black rounded-xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red transition-all shadow-sm"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8 items-start">
            
            {/* Sidebar / Left Column (Desktop) & Top Horizontal Bar (Mobile) */}
            <div className="lg:col-span-1 lg:sticky lg:top-36 z-25 w-full min-w-0">
              {/* Desktop Categories Panel */}
              <div className="hidden lg:block bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Categories</h3>
                <div className="flex flex-col gap-2">
                  {CATEGORIES.map((cat) => {
                    const isActive = activeCategory.toLowerCase() === cat.toLowerCase();
                    const count = getCategoryCount(cat);
                    return (
                      <button
                        key={cat}
                        onClick={() => handleCategorySelect(cat)}
                        className={`flex items-center justify-between px-4 py-3 rounded-xl font-bold transition-all text-left group ${
                          isActive 
                            ? 'bg-brand-black text-white shadow-md' 
                            : 'text-gray-600 hover:bg-gray-50 hover:text-brand-red'
                        }`}
                      >
                        <span>{cat}</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full font-black ${
                          isActive 
                            ? 'bg-brand-red text-white' 
                            : 'bg-gray-100 text-gray-400 group-hover:bg-red-50 group-hover:text-brand-red'
                        }`}>
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Mobile Horizontally Scrollable Pills */}
              <div className="lg:hidden w-full max-w-full overflow-x-auto no-scrollbar flex gap-2 pb-3 mb-6 border-b border-gray-100">
                {CATEGORIES.map((cat) => {
                  const isActive = activeCategory.toLowerCase() === cat.toLowerCase();
                  const count = getCategoryCount(cat);
                  return (
                    <button
                      key={cat}
                      onClick={() => handleCategorySelect(cat)}
                      className={`whitespace-nowrap px-4 py-2.5 rounded-full font-bold text-xs transition-all flex items-center gap-1.5 shrink-0 ${
                        isActive 
                          ? 'bg-brand-black text-white shadow' 
                          : 'bg-white border border-gray-100 text-gray-600 hover:text-brand-red'
                      }`}
                    >
                      <span>{cat}</span>
                      <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-black ${
                        isActive ? 'bg-brand-red text-white' : 'bg-gray-100 text-gray-400'
                      }`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Products Display (Right 3 Columns) */}
            <div className="lg:col-span-3 w-full min-w-0">
              {loading ? (
                // Skeleton Grid Loaders (Fully responsive list-on-mobile / grid-on-desktop structure)
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 animate-pulse flex flex-row sm:flex-col h-auto sm:h-full">
                      <div className="w-28 h-28 sm:w-full sm:aspect-[4/3] sm:h-auto bg-gray-200 shrink-0"></div>
                      <div className="p-3 sm:p-5 flex-grow flex flex-col justify-between space-y-3 min-w-0">
                        <div>
                          <div className="h-3 bg-gray-200 rounded w-1/3 mb-1"></div>
                          <div className="h-4 bg-gray-200 rounded w-2/3 mb-1"></div>
                          <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                        </div>
                        <div className="h-6 sm:h-10 bg-gray-100 rounded-lg mt-2 sm:mt-4"></div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : filteredProducts.length > 0 ? (
                // Products Grid (Optimized responsive 1-column horizontal-card list layout on mobile, 3-column vertical grid on desktop)
                // Products Grid (Optimized responsive 1-column horizontal-card list layout on mobile, 3-column vertical grid on desktop)
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {filteredProducts.map((product) => {
                    const numPrice = Number(product.price);
                    const mrpPrice = numPrice ? Math.round(numPrice * 1.35) : null;

                    return (
                      <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 group border border-gray-100 flex flex-row sm:flex-col h-auto sm:h-full hover:-translate-y-0.5">
                        <div className="relative w-32 h-32 sm:w-full sm:aspect-[4/3] sm:h-auto overflow-hidden bg-gray-100 shrink-0">
                          <span className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-brand-red text-white text-[9px] sm:text-[10px] font-black uppercase px-2 py-0.5 rounded-sm z-10 shadow-xs">
                            {product.category}
                          </span>
                          <span className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-black/60 backdrop-blur-xs text-white text-[9px] font-bold px-1.5 py-0.5 rounded z-10 hidden sm:inline">
                            100% Genuine
                          </span>
                          <img 
                            src={product.imageUrl} 
                            alt={`${product.brand} ${product.name} at GS Footwear`} 
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500" 
                          />
                        </div>
                        <div className="p-3 sm:p-5 flex-grow flex flex-col justify-between min-w-0">
                          <div className="min-w-0">
                            <div className="flex items-center justify-between gap-1 mb-0.5 sm:mb-1">
                              <p className="text-[10px] sm:text-xs font-black text-gray-400 uppercase tracking-wider">{product.brand}</p>
                              <span className="text-[10px] text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded font-bold">In Stock</span>
                            </div>
                            <h3 className="font-heading font-bold text-sm sm:text-base md:text-lg text-brand-black mb-0.5 sm:mb-1 group-hover:text-brand-red transition-colors truncate">{product.name}</h3>
                            <p className="text-[10px] sm:text-xs text-gray-500 font-medium mb-1.5 truncate sm:line-clamp-2">{product.benefit}</p>

                            {/* Sizes Strip */}
                            <div className="flex items-center gap-1 my-1.5 overflow-x-auto no-scrollbar py-0.5">
                              <span className="text-[9px] font-bold text-gray-400 uppercase mr-0.5 shrink-0">Sizes:</span>
                              {['6', '7', '8', '9', '10'].map((sz) => (
                                <span key={sz} className="text-[9px] font-semibold bg-gray-100 text-gray-700 px-1.5 py-0.2 rounded border border-gray-200/60 shrink-0">
                                  {sz}
                                </span>
                              ))}
                            </div>

                            {/* Price */}
                            <div className="flex items-baseline gap-2 mb-2 sm:mb-3">
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
                            className="w-full bg-brand-black hover:bg-brand-whatsapp text-white font-bold py-2 sm:py-2.5 rounded-xl text-center text-xs sm:text-sm transition-all duration-300 mt-auto flex items-center justify-center gap-1.5 shadow-xs"
                          >
                            <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                            </svg>
                            <span>Reserve via WhatsApp</span>
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                // Beautiful Empty State Fallback
                <div className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-12 text-center max-w-lg mx-auto shadow-sm mt-10">
                  <div className="bg-gray-50 text-gray-400 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <ShoppingBag size={24} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-brand-black mb-2">Koi shoes nahi mile!</h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-6">
                    Category **"{activeCategory}"** me search queries matching results nahi hain. Brand change karein ya fir custom shoe poochhne ke liye WhatsApp visit karein.
                  </p>
                  <div className="flex justify-center gap-3">
                    <button 
                      onClick={() => { setSearchQuery(''); handleCategorySelect('All'); }}
                      className="bg-brand-black hover:bg-brand-red text-white font-bold px-4 py-2 sm:px-6 sm:py-2.5 rounded-xl transition-all active:scale-95 text-[10px] sm:text-xs flex items-center gap-1.5"
                    >
                      <RefreshCw size={12} /> Clear Filters
                    </button>
                    <a 
                      href="https://wa.me/918058102782?text=Hi,%20I'm%20looking%20for%20shoes%20which%20are%20not%20listed%20on%20site" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-gray-100 hover:bg-gray-200 text-brand-black font-bold px-4 py-2 sm:px-6 sm:py-2.5 rounded-xl transition-all text-[10px] sm:text-xs"
                    >
                      WhatsApp Support
                    </a>
                  </div>
                </div>
              )}
            </div>

          </div>

        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
