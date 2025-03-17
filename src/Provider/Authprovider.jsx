import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Components/firebasedata/firebase.config';
 export const AuthContext = createContext(null)
const Authprovider = ({children}) => {
    const [user,setuser] = useState(null);
    const [loading,setloading] =useState(true);
    const googleprovider = new GoogleAuthProvider()


    const CreateUser = (email,password) =>{
        setloading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
   
    const signInuser = (email,password)=>{
        setloading(true);
        return signInWithEmailAndPassword(auth,email,password)

    }  

   const hanadlelogout = () =>{
    signOut(auth)
   }

   const handlegooglelogin=()=>{
   return signInWithPopup(auth,googleprovider);
   }

   const updateprofile = (name,image)=>{
  return  updateProfile(auth.currentUser,{
      displayName:name,photoURL:image
    })
   }

    const userinfo ={
        user,loading,CreateUser,signInuser,hanadlelogout,handlegooglelogin,updateprofile,setuser
    }

   useEffect(()=>{
   const unsubscrive = onAuthStateChanged (auth,(currentuser)=>{
   // console.log(currentuser);
   
   if(currentuser){
    setuser(currentuser)
   }
   else{
    setuser(null)
   }
   setloading(null);

    return ()=>{
        unsubscrive()
    }
   })
   },[])


    return (
        <AuthContext.Provider value={userinfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default Authprovider;
