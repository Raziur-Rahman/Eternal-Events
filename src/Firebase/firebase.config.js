// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDId1Rbu6DdrHcu1vOIIZNW-4kJ43EZJx4",
  authDomain: "event-menagement-f6354.firebaseapp.com",
  projectId: "event-menagement-f6354",
  storageBucket: "event-menagement-f6354.appspot.com",
  messagingSenderId: "376937825671",
  appId: "1:376937825671:web:fc14483488d4cf63a13f22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;