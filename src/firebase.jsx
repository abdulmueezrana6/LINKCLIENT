// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBZ_a5m-b0R1ms-h0a-hMuRcwlFnwnBDdk",
  authDomain: "link10-93357.firebaseapp.com",
  projectId: "link10-93357",
  storageBucket: "link10-93357.firebasestorage.app",
  messagingSenderId: "98624373892",
  appId: "1:98624373892:web:2bb202e132715a5f3b6ed1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
