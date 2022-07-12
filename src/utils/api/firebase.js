import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'


const app = initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
})

export const auth = getAuth(app);
export default app

const provider = new GoogleAuthProvider()

//asta trebuie mutata in sign-in
export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            console.log(result)
            const name = result.user.displayName;
            const email = result.user.email;
            const profilePic = result.user.photoURL;

            localStorage.setItem('name', name)
            localStorage.setItem('email', email)
            localStorage.setItem('profilePic', profilePic)
        })
        .catch((e) => {
            console.log(e)
        })

}

// de folosit in profil
// localStorage.getItem('name')
// <img src={localStorage.getItem('profilePic')} />