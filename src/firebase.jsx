// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBmXaFjpoidl3bU9RZQHs_oaSb_YD01kzU",
  authDomain: "link18-40f6f.firebaseapp.com",
  projectId: "link18-40f6f",
  storageBucket: "link18-40f6f.firebasestorage.app",
  messagingSenderId: "752658618857",
  appId: "1:752658618857:web:4a548375b349f9106a1378"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
