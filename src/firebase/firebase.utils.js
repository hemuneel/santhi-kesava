import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBy4l97P2ZbZ9Zna8Sd7xQHiPXdfx9QD4Q",
    authDomain: "sk-db-8f781.firebaseapp.com",
    projectId: "sk-db-8f781",
    storageBucket: "sk-db-8f781.appspot.com",
    messagingSenderId: "890844688473",
    appId: "1:890844688473:web:1a8e0cb39432b8eb278148",
    measurementId: "G-6677WLR8D5"
  }


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt : 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;