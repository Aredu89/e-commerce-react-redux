import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import {
  doc,
  getDoc,
  getFirestore,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
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

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd,
  field = 'title'
) => {
  const collectionReference = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionReference, object[field].toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapshop = await getDocs(q);
  return querySnapshop.docs.map(docSnapshot => docSnapshot.data());
};

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

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

  return userSnapshot;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsuscribe = onAuthStateChanged(
      auth, 
      (userAuth) => {
        unsuscribe();
        resolve(userAuth);
      },+
      reject,
    );
  });
};
