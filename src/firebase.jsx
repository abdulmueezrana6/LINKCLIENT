// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDoqagt3a0GtRntjHmIiOJL7SBoVoSTFP8",
  authDomain: "link04-20ffa.firebaseapp.com",
  projectId: "link04-20ffa",
  storageBucket: "link04-20ffa.firebasestorage.app",
  messagingSenderId: "166703970936",
  appId: "1:166703970936:web:bb3236311939d5be574b8d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
