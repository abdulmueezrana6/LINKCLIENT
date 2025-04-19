// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXa2xQkumKzvwdXrmjOyxbgGJgHvSatrE",
  authDomain: "link19-95a9f.firebaseapp.com",
  projectId: "link19-95a9f",
  storageBucket: "link19-95a9f.firebasestorage.app",
  messagingSenderId: "10615834714",
  appId: "1:10615834714:web:a7ac0fe30a403e33833063"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
