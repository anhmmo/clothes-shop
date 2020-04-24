import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDgOoF55FKVug7vX9XvMFU-LTJ3qjpVZ-w",
  authDomain: "clothes-stores.firebaseapp.com",
  databaseURL: "https://clothes-stores.firebaseio.com",
  projectId: "clothes-stores",
  storageBucket: "clothes-stores.appspot.com",
  messagingSenderId: "834489353031",
  appId: "1:834489353031:web:c17cfadeb02563c1360262",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
