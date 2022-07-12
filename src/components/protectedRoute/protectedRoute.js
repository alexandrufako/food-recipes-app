import React from "react";
import { Navigate} from "react-router-dom";
import { Context } from "../../context/context";

const ProtectedRoute = ({children}) => {
    const { currentUser } = Context()

    if(!currentUser) {
        return <Navigate to={'/login'} />
    }
    return children;
}

export default ProtectedRoute