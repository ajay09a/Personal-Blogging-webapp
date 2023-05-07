import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import {getStorage} from 'firebase/storage';
import {getAuth} from 'firebase/auth';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCI-MmeitqCLOfqFML-tuny1NyAcF7CcIU",
  authDomain: "personal-blog-5fbac.firebaseapp.com",
  databaseURL: "https://personal-blog-5fbac-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "personal-blog-5fbac",
  storageBucket: "personal-blog-5fbac.appspot.com",
  messagingSenderId: "1014094481534",
  appId: "1:1014094481534:web:254b675da186c24039b02f",
  measurementId: "G-Q1C1NZMSTC"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const firestore = firebase.firestore();

export const storage = getStorage();

export const auth = getAuth();