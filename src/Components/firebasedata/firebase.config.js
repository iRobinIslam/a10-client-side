// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7CLHNb5sJCpHW2lSErpnYoU0DUBfSx2c",
  authDomain: "a10-client-side-c8ebd.firebaseapp.com",
  projectId: "a10-client-side-c8ebd",
  storageBucket: "a10-client-side-c8ebd.firebasestorage.app",
  messagingSenderId: "1069132518047",
  appId: "1:1069132518047:web:d380fd9d5037120e8d88aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);