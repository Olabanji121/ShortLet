// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";
// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";
// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCE1tt7LJTsDDiWGzK3Sh5yBFi75Mq0OlY",
    authDomain: "shortletng-3e4e4.firebaseapp.com",
    databaseURL: "https://shortletng-3e4e4.firebaseio.com",
    projectId: "shortletng-3e4e4",
    storageBucket: "shortletng-3e4e4.appspot.com",
    messagingSenderId: "272417268460",
    appId: "1:272417268460:web:302d3559ecfd2c74c37bc9",
    measurementId: "G-8P1K3M78RY"
  };

firebase.initializeApp(firebaseConfig);
// firebase.firestore().settings({timestampsInSnapshots: true});



export default firebase;