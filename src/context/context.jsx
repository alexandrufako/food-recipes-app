import {createContext, useContext, useEffect, useState} from "react";
import {auth} from '../utils/api/firebase'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth'


export const Ctx = createContext();

export const Context = () => {
    return useContext(Ctx);
}
export const Provider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null)

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

        return () => unsubscribe()
    }, [])


    return <Ctx.Provider value={{
        currentUser,
        createUser,
        signIn,
        logOut
    }}>
        {children}
    </Ctx.Provider>;
}
