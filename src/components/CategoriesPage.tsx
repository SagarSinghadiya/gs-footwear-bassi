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
    const fullTitle = `${categoryTitle} | GS Footwear Bassi - Branded Shoes`;
    document.title = fullTitle;
    
    // Dynamic meta description content
    const descText = activeCategory === 'All'
      ? 'Browse the premium shoe catalog at GS Footwear Bassi, Jaipur. Shop running shoes, lifestyle sneakers, formal wear, and boots at best prices.'
      : `Explore our ${activeCategory.toLowerCase()} collection at GS Footwear Bassi, Jaipur. Shop premium authentic designs, latest sizes, and reserve via WhatsApp.`;

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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {filteredProducts.map((product) => (
                    <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 flex flex-row sm:flex-col h-auto sm:h-full">
                      <div className="relative w-28 h-28 sm:w-full sm:aspect-[4/3] sm:h-auto overflow-hidden bg-gray-100 shrink-0">
                        <span className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-brand-red text-white text-[8px] sm:text-[9px] font-black uppercase px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-sm z-10">
                          {product.category}
                        </span>
                        <img src={product.imageUrl} alt={`${product.brand} ${product.name} at GS Footwear Bassi`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="p-3 sm:p-5 flex-grow flex flex-col justify-between min-w-0">
                        <div className="min-w-0">
                          <p className="text-[9px] sm:text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5 sm:mb-1">{product.brand}</p>
                          <h3 className="font-heading font-bold text-sm sm:text-base md:text-xl text-brand-black mb-0.5 sm:mb-1 group-hover:text-brand-red transition-colors truncate sm:line-clamp-1">{product.name}</h3>
                          <p className="text-[10px] sm:text-xs md:text-sm text-gray-500 font-medium mb-1.5 sm:mb-2 truncate sm:line-clamp-none">{product.benefit}</p>
                          <p className="text-sm sm:text-base md:text-lg font-black text-brand-red mb-2 sm:mb-4">
                            ₹{Number(product.price) ? Number(product.price).toLocaleString('en-IN') : product.price}
                          </p>
                        </div>
                        <a 
                          href={`https://wa.me/918058102782?text=I%20want%20to%20buy%20${encodeURIComponent(product.name)}%20by%20${encodeURIComponent(product.brand)}%20for%20RS%20${encodeURIComponent(product.price)}`} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="w-full bg-gray-100 hover:bg-brand-whatsapp hover:text-white text-brand-black font-bold py-1.5 sm:py-2.5 rounded-lg text-center text-xs sm:text-sm transition-colors mt-auto block whitespace-nowrap overflow-hidden text-ellipsis"
                        >
                          Reserve via WhatsApp
                        </a>
                      </div>
                    </div>
                  ))}
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
