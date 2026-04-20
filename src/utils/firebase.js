// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmlRp5KbmbUnDfwIvFIk6M4eFFHM0waTM",
  authDomain: "bingebox-6fbd9.firebaseapp.com",
  projectId: "bingebox-6fbd9",
  storageBucket: "bingebox-6fbd9.firebasestorage.app",
  messagingSenderId: "608777497771",
  appId: "1:608777497771:web:de6e6d6bd20fdb08935bee",
  measurementId: "G-RP7JZGCTH7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();