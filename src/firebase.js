import firebase from 'firebase'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4H7wnWvlpAkIdD2SPQ9xGN5swJ4Fd7QU",
  authDomain: "clone-40677.firebaseapp.com",
  projectId: "clone-40677",
  storageBucket: "clone-40677.appspot.com",
  messagingSenderId: "736003042541",
  appId: "1:736003042541:web:93df33c49b03171c83b0e4",
  measurementId: "G-65EKXBCTXK"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
