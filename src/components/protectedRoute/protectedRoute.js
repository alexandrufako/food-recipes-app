import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Context } from "../../context/context";

const ProtectedRoute = ({children}) => {
    const { currentUser } = Context()
    const token = localStorage.getItem('accessToken');

    if(!token) {
        console.log(token)
        return <Navigate to={'/login'} />
    }

    <Navigate to={'/'} />;
    return children;
}

export default ProtectedRoute