import React, { useState, useRef } from "react"
import { useNavigate } from 'react-router-dom'
import {useAuth} from "../../context/context";
import {Alert} from "react-bootstrap";
import { auth } from '../../utils/api/firebase'


const SignUp = (props) => {
    let [authMode, setAuthMode] = useState("signup")
    const [error, setError] = useState('')
    const [loading, setLoading] =useState(false)
    const navigate = useNavigate()

    const changeAuthMode = () => {
        setAuthMode(authMode === "signin" ? "signup" : "signin")
    }

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const fullNameRef = useRef()
    // eslint-disable-next-line no-unused-vars
    const { createUser, currentUser, signIn } = useAuth()

    const handleSignUp = async (e) => {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await createUser(email, password)
            navigate('/user')

        } catch(e) {
            setError(e.message)
            console.log(e.message)
        }
        setLoading(false)
    }

    const handleSignIn = async (e) => {
        e.preventDefault()
        try{
            setError('')
            await signIn(email, password)
            navigate('/user')
        }catch(e){
            setError(e.message)
            console.log(e.message)
        }
    }

    if (authMode === "signin") {
        return (
            <div className="Auth-form-container">
                <form className="Auth-form" onSubmit={handleSignIn}>
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Sign In</h3>
                        <div className="text-center">
                            {currentUser && currentUser.email}
                            {error && <Alert variant='danger'>{error}</Alert> }
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
        )
    }

    return (
        <div className="Auth-form-container">
            <form className="Auth-form" onSubmit={handleSignUp}>
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign Up</h3>
                    <div className="text-center">
                        {currentUser?.email}
                        {error && <Alert variant='danger'>{error}</Alert> }
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
                            placeholder="e.g Jane Doe"
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
                            placeholder="Password"
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button disabled={loading} type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                    <p className="text-center mt-2">
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        Forgot <a href="#">password?</a>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default SignUp
