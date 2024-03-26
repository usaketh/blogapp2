
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC3WXZQbFbTg1f-sp5cX9LhcGgoBI8h4-A",
  authDomain: "fir-ad15d.firebaseapp.com",
  projectId: "fir-ad15d",
  storageBucket: "fir-ad15d.appspot.com",
  messagingSenderId: "646935660703",
  appId: "1:646935660703:web:7c278826aebe826ba63aaa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
