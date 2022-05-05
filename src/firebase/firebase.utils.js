import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {
  doc, getDoc, getFirestore, setDoc
} from 'firebase/firestore';


const config = {
  apiKey: "AIzaSyBwbrbsR-TPKsjLZpcIlL_ek4d7HUmq8Jg",
  authDomain: "e-commerce-react-redux-def61.firebaseapp.com",
  projectId: "e-commerce-react-redux-def61",
  storageBucket: "e-commerce-react-redux-def61.appspot.com",
  messagingSenderId: "258701909032",
  appId: "1:258701909032:web:1f5e67ddca5400c3afa91d",
  measurementId: "G-J3F5B4RW3X",
};

initializeApp(config);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log('User Doc Ref::', userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log('userSnapshot:: ', userSnapshot);

  if(!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch(error) {
      console.log('Error creating the user', error.message)
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};
