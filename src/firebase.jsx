// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAJiPnnehS8oJrvY_XgPLUxYikXMN8kaIs",
  authDomain: "link07-e4f12.firebaseapp.com",
  projectId: "link07-e4f12",
  storageBucket: "link07-e4f12.firebasestorage.app",
  messagingSenderId: "178742127840",
  appId: "1:178742127840:web:b09649627af513d7e8f485"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
