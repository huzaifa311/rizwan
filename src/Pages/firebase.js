// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB67reT2IisUHmme3eSTyxokhgs5nuneLY",
    authDomain: "hackathon-59220.firebaseapp.com",
    projectId: "hackathon-59220",
    storageBucket: "hackathon-59220.appspot.com",
    messagingSenderId: "559625626758",
    appId: "1:559625626758:web:200471829924bb991c5d07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const db = getFirestore(app);
const storage = getStorage(app) 

export{
    auth,
    signInWithEmailAndPassword, 
    db,
    createUserWithEmailAndPassword,
    storage
}