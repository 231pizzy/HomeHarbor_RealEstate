// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "homeharbor-196d6.firebaseapp.com",
  projectId: "homeharbor-196d6",
  storageBucket: "homeharbor-196d6.appspot.com",
  messagingSenderId: "476791108594",
  appId: "1:476791108594:web:72bdd1e6f0f70ef349f16b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
