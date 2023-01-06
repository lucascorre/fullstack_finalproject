import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";

type AuthenticationContextType = {
    jwt: string
    onLogin: (data: LoginInfoType) => void
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
    onLogin: () => {}
}

const AuthenticationContext = React.createContext<AuthenticationContextType>(defaultAuthenticationContext)

const AuthenticationProvider = ({children}: AuthenticationProviderType) => {

    const router = useRouter();
    const [jwt, setJwt] = useState("")

    const onLogin = (data: LoginInfoType) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: data.username,
                password: data.password
            })
        };
        fetch('http://localhost:8000/api/login', requestOptions)
            .then(response => response.json())
            .then(data => { setJwt(data.token) })
    }

    useEffect(() => {
        const token = localStorage.getItem('jwt') || ""
        setJwt(token)
    }, [jwt])

    return <AuthenticationContext.Provider value={{jwt, onLogin}}>{children}</AuthenticationContext.Provider>
}

export {AuthenticationContext, AuthenticationProvider};