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
  measurementId: "G-J3F5B4RW3X"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;