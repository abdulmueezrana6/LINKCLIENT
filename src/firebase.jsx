// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBhK3ZSxoFxtCNHgwGu4W4x466tVoa66CI",
  authDomain: "link02-422b1.firebaseapp.com",
  projectId: "link02-422b1",
  storageBucket: "link02-422b1.firebasestorage.app",
  messagingSenderId: "247015992493",
  appId: "1:247015992493:web:a819f551a72575b6512a24"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
