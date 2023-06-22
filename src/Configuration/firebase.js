// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
import { getAuth,signInWithPopup,GoogleAuthProvider } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDxNCSCJjwT4y2DNYk-kqEpC3Nz_OyADEE",
    authDomain: "cook-admin-86ba7.firebaseapp.com",
    databaseURL: "https://cook-admin-86ba7-default-rtdb.firebaseio.com",
    projectId: "cook-admin-86ba7",
    storageBucket: "cook-admin-86ba7.appspot.com",
    messagingSenderId: "637405091641",
    appId: "1:637405091641:web:08b38cc4762b5724bb3ae8"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
    return signInWithPopup(auth,provider).then((result) => {
        console.log(result);
        return new Promise( resolve => {resolve(true)} )
    }).catch((error) => {
        console.log(error);
        return false;
    })
    }