// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyB7V38MRmOJlifa1s4AOknIeK05HphXXrA",
  authDomain: "link03-e3cf2.firebaseapp.com",
  projectId: "link03-e3cf2",
  storageBucket: "link03-e3cf2.firebasestorage.app",
  messagingSenderId: "442138806969",
  appId: "1:442138806969:web:65ee8d3b982ef877156968"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
