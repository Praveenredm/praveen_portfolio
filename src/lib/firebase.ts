// lib/firebase.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyD09_03Q7nKlvOUmxffma_nz6EMdujIQgY",
  authDomain: "dsu-483b3.firebaseapp.com",
  projectId: "dsu-483b3",
  storageBucket: "dsu-483b3.firebasestorage.app",
  messagingSenderId: "467594249217",
  appId: "1:467594249217:web:e2a7811b12ecda666a6c00",
};

// Initialize Firebase app
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Firestore
const db = getFirestore(app);

export { db };
