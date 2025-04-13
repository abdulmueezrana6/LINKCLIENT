// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCgfFs6GwpXBfiYnNVJNnEmmbLctn4kzxw",
  authDomain: "link09-354bf.firebaseapp.com",
  projectId: "link09-354bf",
  storageBucket: "link09-354bf.firebasestorage.app",
  messagingSenderId: "256139356872",
  appId: "1:256139356872:web:0e06f04bd1d96719bf13fd"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
