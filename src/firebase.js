// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBePkxKhtkfLy9I9c44tT3HmkGGl_XG5HY",
    authDomain: "realtor-clone-react-7ce4a.firebaseapp.com",
    projectId: "realtor-clone-react-7ce4a",
    storageBucket: "realtor-clone-react-7ce4a.appspot.com",
    messagingSenderId: "126125829802",
    appId: "1:126125829802:web:d99f8e0704c6dc97ecead3"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()