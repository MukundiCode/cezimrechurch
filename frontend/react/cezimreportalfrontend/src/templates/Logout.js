import AuthContext from "../context/AuthProvider";
import { useContext, useState } from "react";
import { Redirect } from 'react-router-dom'

const Logout = () => {
    let {logout} = useContext(AuthContext)
    logout()
    return <Redirect to='/login' />
}

export default Logout