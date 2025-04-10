// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCl5uAUv308Lw11Lx8upNmC-RJ_vOH_7AA",
  authDomain: "link05-799c5.firebaseapp.com",
  projectId: "link05-799c5",
  storageBucket: "link05-799c5.firebasestorage.app",
  messagingSenderId: "1098683839419",
  appId: "1:1098683839419:web:df94369e7cf7e404280a9e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
