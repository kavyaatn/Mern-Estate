// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-b7cf5.firebaseapp.com",
  projectId: "mern-estate-b7cf5",
  storageBucket: "mern-estate-b7cf5.firebasestorage.app",
  messagingSenderId: "1005697053207",
  appId: "1:1005697053207:web:2d92a85567a34e4266a252",
  measurementId: "G-6PQE27R9HM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
