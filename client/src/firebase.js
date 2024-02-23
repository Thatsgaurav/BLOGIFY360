// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blogify360-ff26c.firebaseapp.com",
  projectId: "blogify360-ff26c",
  storageBucket: "blogify360-ff26c.appspot.com",
  messagingSenderId: "128070395159",
  appId: "1:128070395159:web:f3cb39d049c1e0ba8a4352"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);