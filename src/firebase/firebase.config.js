// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBss87esW0CAzudX9CKWiNW7INtIIjC5F8",
  authDomain: "toy-tour.firebaseapp.com",
  projectId: "toy-tour",
  storageBucket: "toy-tour.appspot.com",
  messagingSenderId: "631578994820",
  appId: "1:631578994820:web:12bba0e66ec2e380213ad1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;