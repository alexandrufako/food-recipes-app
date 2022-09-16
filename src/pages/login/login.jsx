/* eslint-disable no-unused-vars */
import React, {useState, useRef, useEffect} from "react"
import {useNavigate} from 'react-router-dom';
import {Context} from "../../context/context";
import {Alert} from "react-bootstrap";
import {auth} from '../../utils/api/firebase';
import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import './login.css';


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
    const {createUser, currentUser, signIn} = Context()

    const handleSignUp = async (e) => {
        e.preventDefault()

        try {
            setError('')
            const user = await createUser(email, password)
            localStorage.setItem('accessToken', user.user.accessToken)
            navigate('/')
        } catch (e) {
            setError(e.message)
            console.log(e.message)
        }
    }

    const handleSignIn = async (e) => {
        e.preventDefault()
        try {
            setError('')
            const user = await signIn(email, password)
            localStorage.setItem('accessToken', user.user.accessToken)
            navigate('/')
        } catch (e) {
            setError(e.message)
            console.log(e.message)
        }
    }


    const provider = new GoogleAuthProvider()

    const signInWithGoogle = () => {
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
// // localStorage.getItem('name')
// // <img src={localStorage.getItem('profilePic')} />


    if (authMode === "signin") {
        return (
            <div className="Auth-form-container d-flex flex-column">
                <div className='logo'><img src={require('../../img/cantina-logo .png')} height='200px'
                                           style={{padding: "30px", marginTop: '-110px', marginBottom: '120px'}} alt='gif'/></div>
                <div className='background'></div>
                <div className='d-flex flex-row' style={{
                    padding: '25px',
                    boxShadow: 'rgb(0 0 0 / 20%) 1px 1px 20px',
                    border: '3px solid white',
                    borderRadius: '10px'
                }}>
                    <div className='left-column'></div>
                    <form className="Auth-form" onSubmit={handleSignIn}>
                        <div className="Auth-form-content">
                            <div className='text-center'><img src={require('../../img/dff7c253319193.592ffe6375e53.gif')}
                                                              height='250px' alt='gif'/></div>
                            <h3 className="Auth-form-title">Sign In</h3>
                            <div className="text-center">
                                {currentUser && currentUser.email}
                                {error && <Alert variant='danger'>{error}</Alert>}
                                Not registered yet?{" "}
                                <span className="link-primary" onClick={changeAuthMode} style={{cursor: 'pointer'}}>
                Sign Up
              </span>
                            </div>
                            <div className="form-group mt-4">
                                <label>Email address</label>
                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    className="form-control mt-1"
                                    placeholder="Enter email"
                                />
                            </div>
                            <div className="form-group mt-4">
                                <label>Password</label>
                                <input
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password"
                                    className="form-control mt-1"
                                    placeholder="Enter password"
                                />
                            </div>
                            <div className="d-grid gap-2 mt-4">
                                <button disabled={loading} type="submit" className="btn btn-primary">
                                    Submit
                                </button>
                                {/* <button onClick={signInWithGoogle} className="btn"
                                        style={{border: '1px solid black'}}>Continue
                                    with <img src={require('../../img/google-logo.png')} height='22px' alt='g'/>
                                </button> */}
                            </div>
                            <p className="text-center mt-4" style={{fontSize: 16}}>
                                Forgot <a href="#">password?</a>
                            </p>
                        </div>
                    </form>
                </div>
                <div style={{padding: '10px'}}><b>At the moment, we're not accepting new users.</b></div>
            </div>
        )
    }

    return (

        <div className="Auth-form-container d-flex flex-column">
            <div className='logo'><img src={require('../../img/cantina-logo .png')} height='200px'
                                       style={{padding: "30px", marginTop: '-110px', marginBottom: '120px'}} alt='gif'/></div>
            <div className='background'></div>
            <div className='d-flex flex-row' style={{
                padding: '25px',
                boxShadow: 'rgb(0 0 0 / 20%) 1px 1px 20px',
                border: '3px solid white',
                borderRadius: '10px'
            }}>
                <div className='left-column'></div>
                <form className="Auth-form" onSubmit={handleSignUp}>
                    <div className="Auth-form-content">
                        <div className='text-center'><img src={require('../../img/dff7c253319193.592ffe6375e53.gif')} alt='gif'/>
                        </div>
                        <h3 className="Auth-form-title">Sign Up</h3>
                        <div className="text-center">
                            {currentUser && currentUser.email}
                            {error && <Alert variant='danger'>{error}</Alert>}
                            Already registered?{" "}
                            <span className="link-primary" onClick={changeAuthMode} style={{cursor: 'pointer'}}>

              Sign In
            </span>
                        </div>
                        <div className="form-group mt-4">
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
                            {/* <button onClick={signInWithGoogle} className="btn"
                                    style={{border: '1px solid black'}}>Continue
                                with <img src={require('../../img/google-logo.png')} height='22px' alt='g'/>
                            </button> */}
                        </div>
                    </div>
                </form>
            </div>
            <div style={{padding: '10px'}}><b>At the moment, we're not accepting new users.</b></div>
        </div>

    )
}

export default LoginPage
