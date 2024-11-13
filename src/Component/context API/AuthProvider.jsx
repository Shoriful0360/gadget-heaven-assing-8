import React, { Children, createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/Firebase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from 'firebase/auth';


export const authContext=createContext(null)
const AuthProvider = ({children}) => {

 const [user,setUser]=useState(null)
 const [loading,setLoading]=useState(null)
 const [userName,setUserName]=useState(null)


//  create user
 const createUser=(email,password,name)=>{
    console.log(name)
    
 return  createUserWithEmailAndPassword(auth,email,password)
  
  
 }

//  Login
const  logInUser=(email,password)=>{
    
    return signInWithEmailAndPassword(auth,email,password)
}
// sign out
const signOutUser=()=>{
    signOut(auth)
}

// reset password
const resetPassword=(email)=>{
return sendPasswordResetEmail(auth,email)
}




//  goenda
useEffect(()=>{

    const unSubscripe=onAuthStateChanged(auth,currentUser=>{
setUser(currentUser)
    })
    return()=>{
        unSubscripe()
    }
},[])
    const authInfo={
        createUser,
        logInUser,user,signOutUser,setUser,userName,resetPassword
    }


    return (
        <div>
            <authContext.Provider value={authInfo}>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default AuthProvider;