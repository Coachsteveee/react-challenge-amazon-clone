// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAUSgrfedClscluzpDXH4mPZYg0TFdeJCs",
    authDomain: "bilquis-dfab3.firebaseapp.com",
    projectId: "bilquis-dfab3",
    storageBucket: "bilquis-dfab3.appspot.com",
    messagingSenderId: "752239369293",
    appId: "1:752239369293:web:5fe6ac82de30ce7d73d004",
    measurementId: "G-N9GKRVXXCB"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export{ db, auth};