import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const createUser =(email , password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const UserLogIn =(email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        return signOut(auth);
    }

    // Observe auth state change
    useEffect(() =>{
        const unSubScribe = onAuthStateChanged(auth, (currentUser) =>{
            console.log('Current value of current user: ', currentUser)
            setUser(currentUser)
        })
        return ()=>{
            unSubScribe();
        }
    },[])

    const authInfo = {user , createUser, UserLogIn, logOut }

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