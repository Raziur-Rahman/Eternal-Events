import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../Firebase/firebase.config";


const googleProvider = new GoogleAuthProvider;

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const UserRegitration =(email , password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const UserLogIn =(email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }
    
    const GoogleLogin =() =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }


    // Observe auth state change
    useEffect(() =>{
        const unSubScribe = onAuthStateChanged(auth, (currentUser) =>{
            console.log('Current user: ', currentUser)
            setUser(currentUser)
            setLoading(false);
        })
        return ()=>{
            unSubScribe();
        }
    },[])

    const authInfo = {user , UserRegitration, UserLogIn, loading, logOut, GoogleLogin }

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