import React from "react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth"
import {doc, getDoc, setDoc, serverTimestamp} from 'firebase/firestore'
import {db} from '../firebase';
import { useNavigate } from "react-router";

export default function OAuth() {
  const navigate = useNavigate();
  async function onGoogleClick() {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      
      //Check for the user
      const docRef = doc(db, 'users', user.uid)
      const docSnap = await getDoc(docRef)
      
      if(!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email : user.email,
          timestamp: serverTimestamp()
        })
      }
      navigate('/')
  
      
    } catch (error) {
      toast.error("Could not authorized with Google!")    
    }
  }
  return (
    <button onClick={onGoogleClick} type="button" className="flex w-full bg-red-700 text-white uppercase justify-center items-center py-3 px-7 rounded shadow-sm hover:bg-red-800 active:bg-red-900 hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out ">
      <FcGoogle className="mr-3 bg-white rounded-full text-2xl" />
      Continue with Google
    </button>
  );
}
