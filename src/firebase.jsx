// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAUP3xrpxcJmx9fcVXoYYNAeipH_Ja3xlE",
  authDomain: "link01-46b50.firebaseapp.com",
  projectId: "link01-46b50",
  storageBucket: "link01-46b50.firebasestorage.app",
  messagingSenderId: "200534591087",
  appId: "1:200534591087:web:5e2bd637f9000e94a36f9a"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
