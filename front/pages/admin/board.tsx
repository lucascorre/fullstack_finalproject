import {useContext, useEffect, useState} from "react";
import {useRouter} from "next/router";
import AdminPage from "../../src/components/adminPage/AdminPage";

export default function AdminBoard() {

    const router = useRouter();
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('jwt') || ""
        if (token !== "") {
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
                    if (!data.hasRole) { router.push("/login") }
                    else { setIsAdmin(true) }
                })
        } else { router.push("/login") }
    }, [])

    if (!isAdmin) {
        return <div>Maybe you are not admin let me check please wait jeune padawan</div>
    }

    return <AdminPage />
}
