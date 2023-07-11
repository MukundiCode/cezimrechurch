import { createContext } from 'react'
import axios from 'axios';


const AuthContext = createContext()

export default AuthContext;

export const AuthProvider = ({ children }) => {

    const API_URL = "/api/auth/";

    let loginUser = async (e, username, password) => {
        e.preventDefault()
        return axios
            .post(API_URL + 'signin', {
                username,
                password,
            })
            .then((response) => {
                if (response.data.username) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }
                window.location.replace("/");
                return response.data;
            })
    }

    let logout = () => {
        localStorage.removeItem("user");
        return axios.post(API_URL + "signout").then((response) => {
            return response.data;
        });
    };


    const getCurrentUser = () => {
        // return "Mukundi";
        return JSON.parse(localStorage.getItem("user"));
    };

    let contextData = {
        loginUser: loginUser,
        logout: logout,
        getCurrentUser: getCurrentUser,
    }

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}