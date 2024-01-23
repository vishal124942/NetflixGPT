// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7rZPNlMvMT5lc1OYGSVcwjEnh6Zf1LLM",
  authDomain: "netflixgpt-cd93f.firebaseapp.com",
  projectId: "netflixgpt-cd93f",
  storageBucket: "netflixgpt-cd93f.appspot.com",
  messagingSenderId: "195042878622",
  appId: "1:195042878622:web:80937a4b7c949c6bc4478f",
  measurementId: "G-52R3HMVX2R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
