import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { Constants } from "expo-constants";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//  Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDODhnm1WURkGD4B8zWH9JoOGy9fpWCg14",
  authDomain: "chatapp-ea3a8.firebaseapp.com",
  projectId: "chatapp-ea3a8",
  storageBucket: "chatapp-ea3a8.appspot.com",
  messagingSenderId: "141949111859",
  appId: "1:141949111859:web:8c813e95c32216bd8a9d46",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();
