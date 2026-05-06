import { useState, useEffect } from 'react';
import { signOut, onAuthStateChanged, User } from 'firebase/auth';
import { collection, addDoc, deleteDoc, doc, query, orderBy, onSnapshot, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../../lib/firebase';
import { Product } from '../../lib/useProducts';
import { LogOut, Plus, Trash2, Upload, Package, Image, X, ShoppingBag, AlertCircle } from 'lucide-react';
import AdminLogin from './AdminLogin';

const CATEGORIES = [
  "Sports / Running",
  "Sneakers",
  "Formal Shoes",
  "Slippers",
  "Casual Boots",
  "Kids' Shoes",
  "Casual",
  "Other",
];

// Compress and resize image to base64
function compressImage(file: File, maxWidth = 800, quality = 0.7): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new window.Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let { width, height } = img;

        // Scale down if too large
        if (width > maxWidth) {
          height = (height * maxWidth) / width;
          width = maxWidth;
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d')!;
        ctx.drawImage(img, 0, 0, width, height);

        // Convert to compressed JPEG base64
        const base64 = canvas.toDataURL('image/jpeg', quality);
        resolve(base64);
      };
      img.onerror = reject;
      img.src = e.target?.result as string;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export default function AdminDashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [deleting, setDeleting] = useState<string | null>(null);

  // Form state
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [benefit, setBenefit] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  // Auth listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setAuthLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Products listener
  useEffect(() => {
    if (!user) return;
    const q = query(collection(db, 'products'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((d) => ({ id: d.id, ...d.data() })) as Product[];
      setProducts(data);
    });
    return () => unsubscribe();
  }, [user]);

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        alert('Image 10MB se chhoti honi chahiye!');
        return;
      }
      setImageFile(file);
      const reader = new FileReader();
      reader.onload = () => setImagePreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!imageFile) {
      alert('Please select an image!');
      return;
    }

    setUploading(true);
    try {
      // Compress image to base64
      const base64Image = await compressImage(imageFile, 800, 0.7);

      // Add product to Firestore with base64 image
      await addDoc(collection(db, 'products'), {
        name,
        brand,
        category,
        benefit,
        imageUrl: base64Image,
        createdAt: serverTimestamp(),
      });

      // Reset form
      setName('');
      setBrand('');
      setCategory(CATEGORIES[0]);
      setBenefit('');
      setImageFile(null);
      setImagePreview(null);
      setShowForm(false);
    } catch (err) {
      console.error('Error adding product:', err);
      alert('Product add karne me error aaya. Dobara try karein.');
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (product: Product) => {
    if (!confirm(`"${product.name}" delete karna hai? Ye wapas nahi aayega!`)) return;
    
    setDeleting(product.id);
    try {
      await deleteDoc(doc(db, 'products', product.id));
    } catch (err) {
      console.error('Error deleting product:', err);
      alert('Delete karne me error aaya.');
    } finally {
      setDeleting(null);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

  if (authLoading) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-brand-red/30 border-t-brand-red rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!user) {
    return <AdminLogin onLogin={() => {}} />;
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-xl font-heading font-black tracking-tighter uppercase">
              GS Footwear <span className="text-brand-red">Admin</span>
            </div>
            <span className="hidden sm:inline bg-brand-red/20 text-brand-red text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
              Dashboard
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="/" className="text-gray-400 hover:text-white text-sm font-medium transition-colors hidden sm:block">
              ← Website dekho
            </a>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-gray-400 hover:text-red-400 text-sm font-medium transition-colors"
            >
              <LogOut size={16} />
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Stats + Add Button */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-heading font-black tracking-tight">
              Products <span className="text-brand-red">({products.length})</span>
            </h1>
            <p className="text-gray-400 text-sm mt-1">Yahan se apne shoes add ya delete karein</p>
          </div>
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-2 bg-brand-red hover:bg-brand-red-hover text-white px-6 py-3 rounded-xl font-bold transition-colors active:scale-95 shadow-lg shadow-red-500/20"
          >
            <Plus size={20} />
            Naya Product Add Karo
          </button>
        </div>

        {/* Info banner for empty state */}
        {products.length === 0 && (
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-6 mb-8 flex items-start gap-4">
            <AlertCircle size={24} className="text-blue-400 shrink-0 mt-0.5" />
            <div>
              <h3 className="text-blue-300 font-bold mb-1">Abhi koi product nahi hai</h3>
              <p className="text-blue-300/70 text-sm">
                "Naya Product Add Karo" button dabao aur apni shoes ki photo aur details bharo. 
                Website pe automatic show hone lagegi!
              </p>
            </div>
          </div>
        )}

        {/* Add Product Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-800 flex items-center justify-between sticky top-0 bg-gray-900 rounded-t-2xl">
                <h2 className="text-xl font-heading font-bold flex items-center gap-2">
                  <ShoppingBag size={20} className="text-brand-red" />
                  Naya Product Add Karo
                </h2>
                <button onClick={() => setShowForm(false)} className="text-gray-400 hover:text-white p-1">
                  <X size={20} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-5">
                {/* Image Upload */}
                <div>
                  <label className="block text-gray-300 text-sm font-semibold mb-2">
                    <Image size={14} className="inline mr-1" />
                    Shoe ki Photo *
                  </label>
                  {imagePreview ? (
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-800 mb-2">
                      <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                      <button
                        type="button"
                        onClick={() => { setImageFile(null); setImagePreview(null); }}
                        className="absolute top-2 right-2 bg-red-500 text-white p-1.5 rounded-full hover:bg-red-600"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  ) : (
                    <label className="flex flex-col items-center justify-center aspect-[4/3] border-2 border-dashed border-gray-700 rounded-xl cursor-pointer hover:border-brand-red hover:bg-gray-800/50 transition-colors">
                      <Upload size={32} className="text-gray-500 mb-2" />
                      <p className="text-gray-400 text-sm font-medium">Photo select karo</p>
                      <p className="text-gray-600 text-xs mt-1">JPG, PNG — Max 10MB</p>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageSelect}
                        className="hidden"
                      />
                    </label>
                  )}
                </div>

                {/* Name */}
                <div>
                  <label className="block text-gray-300 text-sm font-semibold mb-2">Shoe ka Naam *</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Sports Runner X1"
                    className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-red placeholder:text-gray-600 font-medium"
                    required
                  />
                </div>

                {/* Brand */}
                <div>
                  <label className="block text-gray-300 text-sm font-semibold mb-2">Brand *</label>
                  <input
                    type="text"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    placeholder="e.g. Nike, Puma, Campus"
                    className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-red placeholder:text-gray-600 font-medium"
                    required
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="block text-gray-300 text-sm font-semibold mb-2">Category *</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-red font-medium"
                  >
                    {CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                {/* Benefit */}
                <div>
                  <label className="block text-gray-300 text-sm font-semibold mb-2">Key Feature / Benefit *</label>
                  <input
                    type="text"
                    value={benefit}
                    onChange={(e) => setBenefit(e.target.value)}
                    placeholder="e.g. Lightweight and comfortable"
                    className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-red placeholder:text-gray-600 font-medium"
                    required
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={uploading}
                  className="w-full bg-brand-red hover:bg-brand-red-hover text-white font-bold py-3.5 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-lg"
                >
                  {uploading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Uploading...
                    </>
                  ) : (
                    <>
                      <Package size={20} />
                      Product Add Karo
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Products Grid */}
        {products.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden group hover:border-gray-700 transition-colors"
              >
                <div className="aspect-[4/3] overflow-hidden bg-gray-800 relative">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-2 left-2 bg-brand-red text-white text-[10px] font-black uppercase px-2 py-1 rounded">
                    {product.category}
                  </span>
                </div>
                <div className="p-4">
                  <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-0.5">{product.brand}</p>
                  <h3 className="font-heading font-bold text-lg text-white mb-0.5 leading-tight">{product.name}</h3>
                  <p className="text-sm text-gray-400 mb-4">{product.benefit}</p>
                  <button
                    onClick={() => handleDelete(product)}
                    disabled={deleting === product.id}
                    className="w-full flex items-center justify-center gap-2 text-red-400 hover:text-white hover:bg-red-500/20 border border-red-500/20 px-4 py-2 rounded-lg text-sm font-medium transition-colors disabled:opacity-50"
                  >
                    {deleting === product.id ? (
                      <div className="w-4 h-4 border-2 border-red-400/30 border-t-red-400 rounded-full animate-spin"></div>
                    ) : (
                      <Trash2 size={14} />
                    )}
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
