// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoL4BfpPJNeTePg1RDA-fNpPNSYqXY81Q",
  authDomain: "cars-doctor-2c0f4.firebaseapp.com",
  projectId: "cars-doctor-2c0f4",
  storageBucket: "cars-doctor-2c0f4.appspot.com",
  messagingSenderId: "493720395110",
  appId: "1:493720395110:web:0c47e13b890c13d1ffbca7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;