// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRTHQTjxxU8pLUY6iHRn-WzhiJ5zZZtMY",
  authDomain: "gadget-heaven-be8b5.firebaseapp.com",
  projectId: "gadget-heaven-be8b5",
  storageBucket: "gadget-heaven-be8b5.firebasestorage.app",
  messagingSenderId: "1070472976258",
  appId: "1:1070472976258:web:237f06a7ce4d6cd3cd619b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);