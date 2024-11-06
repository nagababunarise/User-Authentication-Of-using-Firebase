// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdhXs0yI96XIqhphgmUYOFXNb3neK7QQo",
  authDomain: "login-9f320.firebaseapp.com",
  projectId: "login-9f320",
  storageBucket: "login-9f320.firebasestorage.app",
  messagingSenderId: "867422774231",
  appId: "1:867422774231:web:e670d54324fb99e2cb6192",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export default app;
