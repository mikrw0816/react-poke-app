// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-ccYItLZv_89SAtn5fNYGBT6q0sPjqWM",
  authDomain: "react-poke-app-1f586.firebaseapp.com",
  projectId: "react-poke-app-1f586",
  storageBucket: "react-poke-app-1f586.appspot.com",
  messagingSenderId: "628466380892",
  appId: "1:628466380892:web:8d45a7abc8c41d19e9b699"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;