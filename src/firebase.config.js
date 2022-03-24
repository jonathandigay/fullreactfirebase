import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDoEFZt1iNGftdxvzEghoqtO2Y_IQe80ag",
  authDomain: "fullreactfirebase.web.app",
  projectId: "fullreactfirebase",
  storageBucket: "fullreactfirebase.appspot.com",
  messagingSenderId: "889742980166",
  appId: "1:889742980166:web:f7e2592cbb327ad1214647",
};

const app = initializeApp(firebaseConfig);

export const Auth = getAuth();
export const GoogleProvider = new GoogleAuthProvider();
export const FacebookProvider = new FacebookAuthProvider();
export const db = getFirestore();
export default app;
