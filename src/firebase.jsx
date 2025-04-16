// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBIjaU9_3ZK-Nz3QDO-xabKQrj01LCjGMU",
  authDomain: "link14-f5067.firebaseapp.com",
  projectId: "link14-f5067",
  storageBucket: "link14-f5067.firebasestorage.app",
  messagingSenderId: "739286858482",
  appId: "1:739286858482:web:d478b0c438fd0f59af6e6b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
