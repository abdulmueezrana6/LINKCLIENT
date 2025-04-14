// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBGyMbYgbxmTRQ9ixnChTnw9gr0A1G-clc",
  authDomain: "link11-ce21b.firebaseapp.com",
  projectId: "link11-ce21b",
  storageBucket: "link11-ce21b.firebasestorage.app",
  messagingSenderId: "55380598925",
  appId: "1:55380598925:web:9aae3600955d9777b302c4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
