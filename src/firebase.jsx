// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBlcJmeUnVXjdR8wZSWPaG-vHqzdGLAFys",
  authDomain: "link01-9c854.firebaseapp.com",
  projectId: "link01-9c854",
  storageBucket: "link01-9c854.firebasestorage.app",
  messagingSenderId: "778897475528",
  appId: "1:778897475528:web:18db679bf7fb68745662fd"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
