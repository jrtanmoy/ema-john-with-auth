// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJSZLhT9U7bFdzpBcHirp9teQ0ojrfwxM",
  authDomain: "ema-john-simple-with-aut-6bda1.firebaseapp.com",
  projectId: "ema-john-simple-with-aut-6bda1",
  storageBucket: "ema-john-simple-with-aut-6bda1.appspot.com",
  messagingSenderId: "853822723438",
  appId: "1:853822723438:web:4b6492de97254e34809d7f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;