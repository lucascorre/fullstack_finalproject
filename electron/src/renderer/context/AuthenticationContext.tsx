import React, {useEffect, useState} from "react";

type AuthenticationContextType = {
    jwt: string
    loading: boolean
    isAdmin: boolean
    isAuthenticated: boolean
    onLogin: (
        data: LoginInfoType,
        setState: (txt: string) => void,
    ) => void
}

type AuthenticationProviderType = {
    children: React.ReactNode
}

type LoginInfoType = {
    username: string
    password: string
}

const defaultAuthenticationContext = {
    jwt: "",
    loading: true,
    isAdmin: false,
    isAuthenticated: false,
    onLogin: () => {},
}


const AuthenticationContext = React.createContext<AuthenticationContextType>(defaultAuthenticationContext)

const AuthenticationProvider = ({children}: AuthenticationProviderType) => {
   const [jwt, setJwt] = useState("")
    const [loading, setLoading] = useState(true)
    const [isAdmin, setIsAdmin] = useState(false)
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem('jwt') || ""
        const admin = localStorage.getItem("isAdmin") || ""
        if (token !== "" && admin === "true") {
            setJwt(token)
            setLoading(false)
            setIsAuthenticated(true)
            setIsAdmin(true)
            return
        }
        if (token !== "") {
            setJwt(token)
            const checkUserRequestOptions = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            };
            fetch('http://localhost:8000/api/.user/user', checkUserRequestOptions)
                .then(response => response.json())
                .then(data => {
                    if (data.roles.includes("ROLE_ADMIN")) {
                        setIsAdmin(true)
                        localStorage.setItem('isAdmin', "true")

                    }
                    setLoading(false)
                    setIsAuthenticated(true)
                })
        } else {
            setLoading(false)
        }
    }, [])

    const onLogin = async (data: LoginInfoType) => {
        setLoading(true)
        const loginRequestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: data.username,
                password: data.password
            })
        };
        return fetch('http://localhost:8000/api/login', loginRequestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.token !== undefined) {
                    const token = data.token;
                    const checkRoleRequestOptions = {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`
                        },
                        body: JSON.stringify({
                            role: "ROLE_ADMIN"
                        })
                    };
                    fetch('http://localhost:8000/api/.user/check-role', checkRoleRequestOptions)
                        .then(response => response.json())
                        .then(data => {
                            if (data.hasRole) {
                                setJwt(token)
                                localStorage.setItem('jwt', token)
                                setIsAdmin(true)
                                setLoading(false)
                                setIsAuthenticated(true)
                                return "success"
                            }
                            else {
                                setIsAdmin(false)
                                setJwt(token)
                                setLoading(false)
                                setIsAuthenticated(true)
                                return "success"
                            }
                        })
                } else {
                    setIsAuthenticated(false)
                    setLoading(false)
                    return "failure"
                }
            })
    }

    // useEffect(() => {
    //     const token = localStorage.getItem('jwt') || ""
    //     setJwt(token)
    // }, [jwt])

    return <AuthenticationContext.Provider
        value={{
            jwt,
            onLogin,
            loading,
            isAdmin,
            isAuthenticated
    }}>
        {children}
    </AuthenticationContext.Provider>
}

export {AuthenticationContext, AuthenticationProvider};
