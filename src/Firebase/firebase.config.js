// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZqlqd5bXaPU9op7LNoQstaVVr2N68wtA",
  authDomain: "b8a9-event-manegment.firebaseapp.com",
  projectId: "b8a9-event-manegment",
  storageBucket: "b8a9-event-manegment.appspot.com",
  messagingSenderId: "817871496462",
  appId: "1:817871496462:web:10b7aed348a4ac8238e35f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;