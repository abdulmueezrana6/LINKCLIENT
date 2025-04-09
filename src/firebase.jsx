// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAzkAvnIXzfBMBRhe6fRSp-CffCiXVT5W4",
  authDomain: "link03-5462f.firebaseapp.com",
  projectId: "link03-5462f",
  storageBucket: "link03-5462f.firebasestorage.app",
  messagingSenderId: "409125491462",
  appId: "1:409125491462:web:f4d84064e9f9721d40c487"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
