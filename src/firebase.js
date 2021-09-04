import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFJ3LijGD8BngiNc_nX-Cw8KvZaUq_vkw",
  authDomain: "web9-a853e.firebaseapp.com",
  projectId: "web9-a853e",
  storageBucket: "web9-a853e.appspot.com",
  messagingSenderId: "507626573106",
  appId: "1:507626573106:web:a270fe3c64f75ee94e9b2b",
  measurementId: "G-BX0GXY18P4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
