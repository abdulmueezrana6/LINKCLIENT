// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyC_5YcWxPCPqFNlNsXTPchgcDtq1CYkh94",
  authDomain: "link04-c199d.firebaseapp.com",
  projectId: "link04-c199d",
  storageBucket: "link04-c199d.firebasestorage.app",
  messagingSenderId: "136646464136",
  appId: "1:136646464136:web:a4b331185c5c8bb83a853d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
