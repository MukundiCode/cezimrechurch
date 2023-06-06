import { Redirect } from 'react-router-dom'
import AuthContext from "../../context/AuthProvider";
import { useContext, useState } from "react";



const PrivateRoute = ({children, ...rest}) => {

    let { user } = useContext(AuthContext)

    console.log(user)
    return !user ?  <Redirect to='/login'/> : children;
}

export default PrivateRoute;