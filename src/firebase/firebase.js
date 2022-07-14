// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
import {
    getAuth, createUserWithEmailAndPassword,
    signOut,signInWithEmailAndPassword,
    onAuthStateChanged
  } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBwq3qc5uwj7efLxOifDhdGZ_8ICqxvMdg",
  authDomain: "new-food-delivery.firebaseapp.com",
  projectId: "new-food-delivery",
  storageBucket: "new-food-delivery.appspot.com",
  messagingSenderId: "1084218016944",
  appId: "1:1084218016944:web:3351970f564074e18ca775",
  measurementId: "G-JNJPM27DY4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore();
export const auth = getAuth();