import firebase from 'firebase'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyDjM1aK5AOgqsnGWcSjzhN4IovVlcfl0tY",
    authDomain: "chatapp-90850.firebaseapp.com",
    databaseURL: "https://chatapp-90850.firebaseio.com",
    projectId: "chatapp-90850",
    storageBucket: "chatapp-90850.appspot.com",
    messagingSenderId: "351644755026",
    appId: "1:351644755026:web:c907b609176ac090"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
 
 export const db = firebase.firestore();
 