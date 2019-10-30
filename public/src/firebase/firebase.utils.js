import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCkmxIuR8JGHNKAa4YU7Zy_VwirAPgqwZU",
    authDomain: "crwn-clothing-52d58.firebaseapp.com",
    databaseURL: "https://crwn-clothing-52d58.firebaseio.com",
    projectId: "crwn-clothing-52d58",
    storageBucket: "crwn-clothing-52d58.appspot.com",
    messagingSenderId: "771965822915",
    appId: "1:771965822915:web:4a17d9d28e47f4e3de3f76",
    measurementId: "G-TZLCEYW4XK"
  };

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;