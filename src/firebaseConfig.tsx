// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_f0-dfQOPPNtaTb4Nmj1QXJdkaYI1JPk",
  authDomain: "sycn-sphere.firebaseapp.com",
  projectId: "sycn-sphere",
  storageBucket: "sycn-sphere.appspot.com",
  messagingSenderId: "290400659409",
  appId: "1:290400659409:web:9251417baa6ac10aa1a2f0",
  measurementId: "G-FLLWJJ171L",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const storage = getStorage(app);
export const database = getFirestore(app);
