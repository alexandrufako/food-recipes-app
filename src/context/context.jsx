import {createContext, useContext, useEffect, useState} from "react";
import {auth} from '../utils/api/firebase'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth'


export const Ctx = createContext();

export const useAuth = () => {
    return useContext(Ctx);
}
export const Provider = ({children}) => {
    const [currentUser, setCurrentUser] = useState()
    const createUser = (email, password) => {                           //sign up
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {                               //sign in
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {                                              //log out
        return signOut(auth)
    }




    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user)
            console.log(user)
        })

        return unsubscribe()
    }, [])


    const value = {
        currentUser,
        createUser,
        signIn,
        logOut
    }


    return <Ctx.Provider value={value}>
        {children}
    </Ctx.Provider>;
}
