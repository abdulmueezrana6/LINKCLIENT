// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAEN1nOIEIDlBbwEcnkSSp6LhmBWgFBE9Y",
  authDomain: "link15-133e0.firebaseapp.com",
  projectId: "link15-133e0",
  storageBucket: "link15-133e0.firebasestorage.app",
  messagingSenderId: "974667322643",
  appId: "1:974667322643:web:6880aa8d78f0656999f6e6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
