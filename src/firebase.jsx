// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCwNW7IjsRLhABR8cbMil8Q0dMQT9vEoqo",
  authDomain: "link08-1a05a.firebaseapp.com",
  projectId: "link08-1a05a",
  storageBucket: "link08-1a05a.firebasestorage.app",
  messagingSenderId: "613621369529",
  appId: "1:613621369529:web:dad1b5aa7ff7059c142968"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
