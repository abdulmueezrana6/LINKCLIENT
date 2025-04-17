// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDQSevdV1wBObSokojHm-QHu_CV__6Wr9w",
  authDomain: "link16-b44af.firebaseapp.com",
  projectId: "link16-b44af",
  storageBucket: "link16-b44af.firebasestorage.app",
  messagingSenderId: "695836585324",
  appId: "1:695836585324:web:c94e4df2e891430b141749"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
