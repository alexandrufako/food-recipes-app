import {Context} from "../../context/context";
import './account.css'
import {useNavigate} from "react-router-dom";
import {useState} from "react";

const UserAccountPage = () => {
    const {currentUser, logOut} = Context()
    const navigate = useNavigate()
    const handleLogout = async () => {
        try {
            await logOut()
            navigate('/login')
            localStorage.removeItem('accessToken')
            console.log('you are logged out')
        } catch (e) {
            console.log(e.message)
        }
    }


    return (
        <div className='text-center user-container'>
            <h2>Account</h2>
            <span> User Email: </span>
            <span><b>{currentUser && currentUser.email}</b></span>
            <button onClick={handleLogout}>Logout</button>

        </div>
    )
}

export default UserAccountPage;