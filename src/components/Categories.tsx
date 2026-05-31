import { Link } from 'react-router-dom';

const categories = [
  { name: "Sports / Running", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop" },
  { name: "Sneakers", img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&auto=format&fit=crop" },
  { name: "Formal Shoes", img: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=600&auto=format&fit=crop" },
  { name: "Slippers", img: "/images/slippers.png" },
  { name: "Casual Boots", img: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=600&auto=format&fit=crop" },
  { name: "Kids' Shoes", img: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=600&auto=format&fit=crop" }
];

export default function Categories() {
  return (
    <section id="categories" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-4xl sm:text-5xl font-heading font-black text-brand-black tracking-tight mb-4">
            Shop By Category
          </h2>
          <p className="text-gray-600 text-lg">Sabhi variety available hai ek hi roof ke niche. Find your perfect fit!</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {categories.map((cat, idx) => (
            <Link 
              key={idx} 
              to={`/categories?selected=${encodeURIComponent(cat.name)}`}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden group cursor-pointer bg-gray-100 block shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <img src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
                <h3 className="text-white font-heading font-bold text-xl sm:text-2xl">{cat.name}</h3>
                <div className="w-8 h-1 bg-brand-red mt-2 transform origin-left group-hover:scale-x-150 transition-transform"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
