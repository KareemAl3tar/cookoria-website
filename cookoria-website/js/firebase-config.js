import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBP9VQ4JCu7GzSwsPL4dCGQzPgX60iwm54",
  authDomain: "cookoria.firebaseapp.com",
  projectId: "cookoria",
  storageBucket: "cookoria.firebasestorage.app",
  messagingSenderId: "997454322582",
  appId: "1:997454322582:web:5d6b274601a7b2c6a01bb7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);