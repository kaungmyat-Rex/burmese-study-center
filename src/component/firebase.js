// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_API_LINK}`,
  authDomain: "burma-study-center-review.firebaseapp.com",
  projectId: "burma-study-center-review",
  storageBucket: "burma-study-center-review.appspot.com",
  messagingSenderId: "188914809512",
  appId: "1:188914809512:web:ea25845d0ebe9d1fae209d",
  measurementId: "G-NSJQKHX9JY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
