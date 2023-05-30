import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFrNnNGSdvJ5rRijWAKKXuuvVQBG-g6SY",
  authDomain: "crown-clothing-db-1992.firebaseapp.com",
  projectId: "crown-clothing-db-1992",
  storageBucket: "crown-clothing-db-1992.appspot.com",
  messagingSenderId: "826108828702",
  appId: "1:826108828702:web:e8545e4c8e27432af0a20f",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  console.log(userAuth.user);
  const userDocRef = doc(db, "users", userAuth.user.uid);

  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth.user;
    console.log(displayName);
    console.log(email);
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  return userDocRef;
};
