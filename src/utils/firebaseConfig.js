// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkfpI1WG6jDH-siOYfPZ61mN4rrPL1nhQ",
  authDomain: "netflixgpt-dd2e5.firebaseapp.com",
  projectId: "netflixgpt-dd2e5",
  storageBucket: "netflixgpt-dd2e5.appspot.com",
  messagingSenderId: "528598039019",
  appId: "1:528598039019:web:ba42f154c943c9f0e101ae",
  measurementId: "G-T1F9CGER9M"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
export const auth = getAuth();
