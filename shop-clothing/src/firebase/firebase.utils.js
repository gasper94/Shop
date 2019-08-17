// Pulling utility library from firebase
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyAs8mDGqgDCsv-2IN7KGHUieA4b9YoOpIQ",
    authDomain: "e-commerce-e6092.firebaseapp.com",
    databaseURL: "https://e-commerce-e6092.firebaseio.com",
    projectId: "e-commerce-e6092",
    storageBucket: "",
    messagingSenderId: "325983603055",
    appId: "1:325983603055:web:15f11636313c6293"
  };


firebase.initializeApp(config);

// Exporting to use anywhere where 
// user authentication is needed.
export const auth = firebase.auth();
export const firestore = firebase.firestore();


// google authentication utility
const provider  = new  firebase.auth.GoogleAuthProvider();

// Trigger google pop up when authenticationg
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;












