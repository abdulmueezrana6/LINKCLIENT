// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCRivmkZW7hsBTKj7bbM0LJFSXha2OO_nE",
  authDomain: "link13-a3100.firebaseapp.com",
  projectId: "link13-a3100",
  storageBucket: "link13-a3100.firebasestorage.app",
  messagingSenderId: "385867835888",
  appId: "1:385867835888:web:9a0fee1ede35c633e89535"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
