import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAGytywtgAFixlJK44hKZMTmOG7JU71pf0",
  authDomain: "proyectofrontera-cic.firebaseapp.com",
  projectId: "proyectofrontera-cic",
  storageBucket: "proyectofrontera-cic.appspot.com",
  messagingSenderId: "79117538158",
  appId: "1:79117538158:web:3a4eca9c286e27d775677f",
  measurementId: "G-P012ZKFJRP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);