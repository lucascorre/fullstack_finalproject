import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";

type AuthenticationContextType = {
    jwt: string
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
    onLogin: () => {},
}


const AuthenticationContext = React.createContext<AuthenticationContextType>(defaultAuthenticationContext)

const AuthenticationProvider = ({children}: AuthenticationProviderType) => {

    const router = useRouter();
    const [jwt, setJwt] = useState("")

    useEffect(() => {
        const token = localStorage.getItem('jwt') || ""
        if (token !== "") {
            setDisabledButton(true);
            setJwt(token)
            setState("you have a token, we check your role")
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
                    if (data.roles.includes("ROLE_ADMIN")) { router.push("/admin/board") }
                    else { setDisabledButton(false) }
                })
        }
    }, [])

    const onLogin = (data: LoginInfoType, setState: (txt: string) => void) => {
        const loginRequestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: data.username,
                password: data.password
            })
        };
        setState("Il va falloir être patient mais ça commence à essayer de te log là")
        fetch('http://localhost:8000/api/login', loginRequestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.token !== undefined) {
                    setState("Tu existe mais es tu admin? On va voir ça...")
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
                                router.push("/admin/board")
                            }
                            else { router.push("/") }
                        })

                } else {
                    router.push('/')
                }
            })
    }

    // useEffect(() => {
    //     const token = localStorage.getItem('jwt') || ""
    //     setJwt(token)
    // }, [jwt])

    return <AuthenticationContext.Provider value={{jwt, onLogin}}>{children}</AuthenticationContext.Provider>
}

export {AuthenticationContext, AuthenticationProvider};