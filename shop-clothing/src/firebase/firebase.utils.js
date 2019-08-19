// Pulling utility library from firebase
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// Firebase Configuration.
const config = {
    apiKey: "AIzaSyAs8mDGqgDCsv-2IN7KGHUieA4b9YoOpIQ",
    authDomain: "e-commerce-e6092.firebaseapp.com",
    databaseURL: "https://e-commerce-e6092.firebaseio.com",
    projectId: "e-commerce-e6092",
    storageBucket: "",
    messagingSenderId: "325983603055",
    appId: "1:325983603055:web:15f11636313c6293"
  };


export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  // it does exist, query inside firestore to see if exist.
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const {displayName,  email} = userAuth;
    const createAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      })
    }catch(error){
      console.log('error creating user', error.message);
    }

  }
  return userRef;
};

// 1. Initialize Firebase
firebase.initializeApp(config);

// 2. Create an instance of the google provider object.
const provider  = new  firebase.auth.GoogleAuthProvider();

// 3. Trigger google pop up when authenticationg
provider.setCustomParameters({prompt: 'select_account'});

// 4. Authenticate with Firebase using the google provider object.
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// Exporting to use anywhere in our app where 
// user authentication is needed.
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export default firebase;












