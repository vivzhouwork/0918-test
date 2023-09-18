// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from"firebase/auth";
import {getFirestore} from"firebase/firestore";
import {getStorage} from"firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQRP3xdnuoE5jnnrT-NSt4yivYDt1kZpQ",
  authDomain: "test-19c8e.firebaseapp.com",
  projectId: "test-19c8e",
  storageBucket: "test-19c8e.appspot.com",
  messagingSenderId: "1024801012523",
  appId: "1:1024801012523:web:b95f8d40983775e83f636e"
};

// Initialize Firebase
export const firebase_app = initializeApp(firebaseConfig);
// export const auth = getAuth(firebase_app)
export const db = getFirestore(firebase_app);
export const storage = getStorage(firebase_app);