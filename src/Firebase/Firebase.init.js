// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBwe-wSyNEMGJk6XVebXlUc--pwyc4m73Y",
    authDomain: "doctors-portal-mini.firebaseapp.com",
    projectId: "doctors-portal-mini",
    storageBucket: "doctors-portal-mini.appspot.com",
    messagingSenderId: "65594032221",
    appId: "1:65594032221:web:eafae9cb63b47dda708db4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;