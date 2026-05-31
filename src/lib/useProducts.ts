import { useState, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from './firebase';

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  benefit: string;
  price: string;
  imageUrl: string;
  createdAt: any;
}

// Hardcoded fallback products (shown when Firestore is empty)
export const fallbackProducts: Product[] = [
  {
    id: 'fallback-1',
    name: "Sports Runner X1",
    brand: "Nike",
    category: "Sports / Running",
    benefit: "Lightweight and comfortable",
    price: "1599",
    imageUrl: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop",
    createdAt: null,
  },
  {
    id: 'fallback-2',
    name: "Urban Classic Sneaker",
    brand: "Puma",
    category: "Sneakers",
    benefit: "Premium look, easy to wear",
    price: "1899",
    imageUrl: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&auto=format&fit=crop",
    createdAt: null,
  },
  {
    id: 'fallback-3',
    name: "Action Grip Pro",
    brand: "Campus",
    category: "Sports / Running",
    benefit: "Anti-skid sole",
    price: "1299",
    imageUrl: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&auto=format&fit=crop",
    createdAt: null,
  },
  {
    id: 'fallback-4',
    name: "Daily Comfort Slip-on",
    brand: "Skechers",
    category: "Casual",
    benefit: "Cushioned insole, Best for daily wear",
    price: "1499",
    imageUrl: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&auto=format&fit=crop",
    createdAt: null,
  },
];

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [usingFallback, setUsingFallback] = useState(false);

  useEffect(() => {
    const q = query(collection(db, 'products'), orderBy('createdAt', 'desc'));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      if (snapshot.empty) {
        setProducts(fallbackProducts);
        setUsingFallback(true);
      } else {
        const productData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Product[];
        setProducts(productData);
        setUsingFallback(false);
      }
      setLoading(false);
    }, (error) => {
      console.error('Error fetching products:', error);
      setProducts(fallbackProducts);
      setUsingFallback(true);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return { products, loading, usingFallback };
}
