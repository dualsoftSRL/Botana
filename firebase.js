import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxinvbEy86HIjr2IaCBWpCHnxWpzt2IBw",
  authDomain: "botanapanel-35300.firebaseapp.com",
  projectId: "botanapanel-35300",
  storageBucket: "botanapanel-35300.firebasestorage.app",
  messagingSenderId: "97348733531",
  appId: "1:97348733531:web:53ff689b1c41fbcf230d7e",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);