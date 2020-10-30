import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebase_config = {
  apiKey: "AIzaSyBBMK-nDxr55zuEQBBvmnpgITnFe3Vmp-I",
  authDomain: "e-wallet-a2885.firebaseapp.com",
  databaseURL: "https://e-wallet-a2885.firebaseio.com",
  projectId: "e-wallet-a2885",
  storageBucket: "e-wallet-a2885.appspot.com",
  messagingSenderId: "275073782558",
  appId: "1:275073782558:web:483a4ce4ec5120ebde2f0f",
};
// Initialize Firebase
firebase.initializeApp(firebase_config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
googleAuthProvider.setCustomParameters({
  prompt: "select_account",
});
export const signInWithGoogle = () => auth.signInWithPopup(googleAuthProvider);
export default firebase;
