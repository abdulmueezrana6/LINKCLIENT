// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDBnvpZh4iVSOFfoETzzUTenzKRHNmtJLU",
  authDomain: "link17-b77f6.firebaseapp.com",
  projectId: "link17-b77f6",
  storageBucket: "link17-b77f6.firebasestorage.app",
  messagingSenderId: "884357707550",
  appId: "1:884357707550:web:2736b0b8701c1739b43b0f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
