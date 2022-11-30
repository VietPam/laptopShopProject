// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import { getStorage } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRTpkC_WCC7Ka_O827WfbaXVIEhvxVg0c",
  authDomain: "laptop-shop-cb598.firebaseapp.com",
  projectId: "laptop-shop-cb598",
  storageBucket: "laptop-shop-cb598.appspot.com",
  messagingSenderId: "856197441930",
  appId: "1:856197441930:web:2b95018dbbe423faa0c073"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getFirestore(app);
export const storage=getStorage(app);
export default app;