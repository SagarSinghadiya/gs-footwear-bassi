import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCHrgl6DB8DPJ3FjqJJH6ztzcP2_DBhZ_s",
  authDomain: "gs-footwear-bassi.firebaseapp.com",
  projectId: "gs-footwear-bassi",
  storageBucket: "gs-footwear-bassi.firebasestorage.app",
  messagingSenderId: "371045105472",
  appId: "1:371045105472:web:700c923af86018a07704a5"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
