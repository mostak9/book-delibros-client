// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDI1Lx-9753ZkYJj7_9KGFqjYYj7mf0kTM",
  authDomain: "library-management-d2da6.firebaseapp.com",
  projectId: "library-management-d2da6",
  storageBucket: "library-management-d2da6.appspot.com",
  messagingSenderId: "841985577485",
  appId: "1:841985577485:web:2c371900d41685589e7b44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;