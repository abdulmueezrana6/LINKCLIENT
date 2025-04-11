// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBq68SLH91GEzgnHc6xChg1_D1K-ZthwUo",
  authDomain: "link06-50846.firebaseapp.com",
  projectId: "link06-50846",
  storageBucket: "link06-50846.firebasestorage.app",
  messagingSenderId: "435563095973",
  appId: "1:435563095973:web:8e6a69b4ef61a31bcdea4c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
