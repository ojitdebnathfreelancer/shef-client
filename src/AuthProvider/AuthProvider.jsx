import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../Firebase/Firebase.init.config';

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    const signupUser = (email, password) =>{
        setLoading(false);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    // sign up user with email and pass 

    const signinUser = (email, password) =>{
        setLoading(false);
        return signInWithEmailAndPassword(auth,email, password);
    };
    // user log in by email and pass
    
    const googleUser = () =>{
        setLoading(false);
        return signInWithPopup(auth, googleProvider);
    }
    // user login by google 

    const signoutUser = () =>{
        return signOut(auth);
    };
    // signout user 

    const updateUser = (profile) =>{
        return updateProfile(auth.currentUser, profile);
    };
    // user update 

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        });
        return ()=> unsubscribe();
    },[]);

    const info = { user, signupUser, signinUser, updateUser, signoutUser, googleUser, loading, setLoading };
    return (
        <div>
            <AuthContext.Provider value={info}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;