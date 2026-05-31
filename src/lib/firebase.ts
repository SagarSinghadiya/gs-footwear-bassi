import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyAcgR9U9wVnoy5N4o-V2bBPjhEEo4v0V9Q",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "gs-footwear-bassi-client.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "gs-footwear-bassi-client",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "gs-footwear-bassi-client.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "950201331875",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:950201331875:web:792f0545b36fde6f974f16"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
