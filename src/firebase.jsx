// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAFqX1svG7C7noGJId4Mnf8Qn8DoqJ9nX8",
  authDomain: "link12-f2bfd.firebaseapp.com",
  projectId: "link12-f2bfd",
  storageBucket: "link12-f2bfd.firebasestorage.app",
  messagingSenderId: "42986386547",
  appId: "1:42986386547:web:c38289503c46fc0543e606"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
