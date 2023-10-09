import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../Firebase/firebase.config";

const googleProvider = new GoogleAuthProvider;

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const UserRegitration =(email , password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const UserLogIn =(email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        return signOut(auth);
    }
    
    const GoogleLogin =() =>{
        return signInWithPopup(auth, googleProvider)
    }


    // Observe auth state change
    useEffect(() =>{
        const unSubScribe = onAuthStateChanged(auth, (currentUser) =>{
            console.log('Current user: ', currentUser)
            setUser(currentUser)
        })
        return ()=>{
            unSubScribe();
        }
    },[])

    const authInfo = {user , UserRegitration, UserLogIn, logOut, GoogleLogin }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes ={
    children: PropTypes.node
}