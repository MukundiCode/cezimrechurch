import { Redirect } from 'react-router-dom'
import AuthContext, { AuthProvider } from "../context/AuthProvider";
import { useContext, useState } from "react";



const PrivateRoute = ({ children, ...rest }) => {
    let { getCurrentUser } = useContext(AuthContext)
    const user = getCurrentUser()
    return !user ? <Redirect to='/login' /> : children;
}

export default PrivateRoute;