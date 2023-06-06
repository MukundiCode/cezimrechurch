import { createContext, useState, useEffect } from 'react'
import jwtDecode from 'jwt-decode';
import { Redirect , useHistory} from 'react-router-dom'


const AuthContext = createContext()

export default AuthContext;

export const AuthProvider = ({ children }) => {

    let [user, setUser] = useState(() => (localStorage.getItem('authTokens') ? jwtDecode(localStorage.getItem('authTokens')) : null))
    let [authTokens, setAuthTokens] = useState(() => (localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null))

    let loginUser = async (e, username, password) => {
        e.preventDefault()
        const member = {
            username: username,
            password: password,
        };
        const response = await fetch('http://127.0.0.1:8000/auth/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(member)
        });

        let data = await response.json();

        if (data) {
            localStorage.setItem('authTokens', JSON.stringify(data));
            setAuthTokens(data)
            setUser(jwtDecode(data.access))
            console.log("Tokens " + authTokens)
            console.log(authTokens)
            console.log("User" + user)
            console.log(user)
            window.location.href = "/"
        } else {
            alert('Something went wrong while loggin in the user!')
        }
    }

    let logoutUser = (e) => {
        e.preventDefault()
        localStorage.removeItem('authTokens')
        setAuthTokens(null)
        setUser(null)
    }

    let contextData = {
        user: user,
        authTokens: authTokens,
        loginUser: loginUser,
        logoutUser: logoutUser,
    }

    const updateToken = async () => {
        const response = await fetch('http://127.0.0.1:8000/auth/login/refresh/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ refresh: authTokens?.refresh })
        })

        const data = await response.json()
        if (response.status === 200) {
            setAuthTokens(data)
            setUser(jwtDecode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
        } else {
            logoutUser()
            window.location.href = "/login"
        }

        if (loading) {
            setLoading(false)
        }
    }

    let [loading, setLoading] = useState(true)

    useEffect(() => {

        const REFRESH_INTERVAL = 1000 * 60 * 4 // 4 minutes
        let interval = setInterval(() => {
            if (authTokens) {
                updateToken()
            }
        }, REFRESH_INTERVAL)
        return () => clearInterval(interval)

    }, [authTokens])

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}