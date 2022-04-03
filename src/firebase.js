import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDcNu7ksxTEBaKxVCIF2mLaumcKUiy4R5I",
  authDomain: "pclmessenger.firebaseapp.com",
  projectId: "pclmessenger",
  storageBucket: "pclmessenger.appspot.com",
  messagingSenderId: "752937527945",
  appId: "1:752937527945:web:0fb1714279721b60dd7458",
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
