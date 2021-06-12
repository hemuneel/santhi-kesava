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
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const  snapShot = await userRef.get();
  

  if(!snapShot.exists){
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }catch(error){
      console.log('error creating user', error.message);

    }
  }

  return userRef;

}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;