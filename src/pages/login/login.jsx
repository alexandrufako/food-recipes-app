import React, {useState, useRef, useEffect} from "react"
import {useNavigate} from 'react-router-dom'
import {Context} from "../../context/context";
import {Alert} from "react-bootstrap";
import {auth} from '../../utils/api/firebase'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import './login.css'


const LoginPage = (props) => {
    const [authMode, setAuthMode] = useState("signup")
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const changeAuthMode = () => {
        setAuthMode(authMode === "signin" ? "signup" : "signin")
    }

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const fullNameRef = useRef()
    // eslint-disable-next-line no-unused-vars
    const {createUser, currentUser, signIn} = Context()

    const handleSignUp = async (e) => {
        e.preventDefault()

        try {
            setError('')
            await createUser(email, password)
            setLoading(true)
            navigate('/user')
            console.log(currentUser)
        } catch (e) {
            setError(e.message)
            console.log(e.message)
        }
        setLoading(false)
    }

    const handleSignIn = async (e) => {
        e.preventDefault()
        try {
            setError('')
            await signIn(email, password)
            navigate('/user')
        } catch (e) {
            setError(e.message)
            console.log(e.message)
        }
    }

//     const provider = new GoogleAuthProvider()
//
// //asta trebuie mutata in sign-in
//     const signInWithGoogle = () => {
//         signInWithPopup(auth, provider)
//             .then((result) => {
//                 console.log(result)
//                 const name = result.user.displayName;
//                 const email = result.user.email;
//                 const profilePic = result.user.photoURL;
//
//                 localStorage.setItem('name', name)
//                 localStorage.setItem('email', email)
//                 localStorage.setItem('profilePic', profilePic)
//             })
//             .catch((e) => {
//                 console.log(e)
//             })
//
//     }
//
// // de folosit in profil
// // localStorage.getItem('name')
// // <img src={localStorage.getItem('profilePic')} />

    // <img src={require('../../img/her-vietnamese-food.jpg')} height='550px'/>
    if (authMode === "signin") {
        return (
            <div className="Auth-form-container d-flex flex-column">
                <div className='d-flex flex-row' style={{boxShadow: 'rgb(0 0 0 / 20%) 1px 1px 20px', borderRadius: '10px'}}>
                    <div className='left-column'></div>
                    <form className="Auth-form" onSubmit={handleSignIn}>
                        <div className="Auth-form-content">
                            <h3 className="Auth-form-title">Sign In</h3>
                            <div className="text-center">
                                {currentUser && currentUser.email}
                                {error && <Alert variant='danger'>{error}</Alert>}
                                Not registered yet?{" "}
                                <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
                            </div>
                            <div className="form-group mt-3">
                                <label>Email address</label>
                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    className="form-control mt-1"
                                    placeholder="Enter email"
                                />
                            </div>
                            <div className="form-group mt-3">
                                <label>Password</label>
                                <input
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password"
                                    className="form-control mt-1"
                                    placeholder="Enter password"
                                />
                            </div>
                            <div className="d-grid gap-2 mt-3">
                                <button disabled={loading} type="submit" className="btn btn-primary">
                                    Submit
                                </button>
                            </div>
                            <p className="text-center mt-2">
                                Forgot <a href="#">password?</a>
                            </p>
                        </div>
                    </form>
                </div>
                <div style={{padding: '10px'}}><b>At the moment, we're not accepting new users</b></div>
            </div>
        )
    }

    return (
        <div className="Auth-form-container d-flex flex-column">
            <div className='d-flex flex-row' style={{boxShadow: 'rgb(0 0 0 / 20%) 1px 1px 20px', borderRadius: '10px'}}>
                <div className='left-column'></div>
                <form className="Auth-form" onSubmit={handleSignUp}>
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Sign Up</h3>
                        <div className="text-center">
                            {currentUser && currentUser.email}
                            {error && <Alert variant='danger'>{error}</Alert>}
                            Already registered?{" "}
                            <span className="link-primary" onClick={changeAuthMode}>

              Sign In
            </span>
                        </div>
                        <div className="form-group mt-3">
                            <label>Full Name</label>
                            <input
                                ref={fullNameRef}
                                type="text"
                                className="form-control mt-1"
                                placeholder="ex Jane Doe"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Email address</label>
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                className="form-control mt-1"
                                placeholder="Email Address"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Password</label>
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                className="form-control mt-1"
                                placeholder="Password (min. 6 char)"
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button disabled={loading} type="submit" className="btn btn-primary">
                                Submit
                            </button>
                            {/*<button onClick={signInWithGoogle} className="btn"*/}
                            {/*        style={{border: '1px solid black'}}>Continue*/}
                            {/*    with <img src={require('../../img/google-logo.png')} height='22px' alt='g'/></button>*/}
                        </div>
                        <p className="text-center mt-2">
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            Forgot <a href="#">password?</a>
                        </p>
                    </div>
                </form>
            </div>
            <div style={{padding: '10px'}}><b>At the moment, we're not accepting new users</b></div>
        </div>
    )
}

export default LoginPage
