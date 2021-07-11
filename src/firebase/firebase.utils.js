import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBwbrbsR-TPKsjLZpcIlL_ek4d7HUmq8Jg",
  authDomain: "e-commerce-react-redux-def61.firebaseapp.com",
  projectId: "e-commerce-react-redux-def61",
  storageBucket: "e-commerce-react-redux-def61.appspot.com",
  messagingSenderId: "258701909032",
  appId: "1:258701909032:web:1f5e67ddca5400c3afa91d",
  measurementId: "G-J3F5B4RW3X",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error) {
      console.log("Error creating user ", error.message)
    };
  };

  return userRef;

};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase