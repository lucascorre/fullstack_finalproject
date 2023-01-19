import {useContext, useEffect, useState} from "react";
import {useRouter} from "next/router";
import AdminPage from "../../src/components/adminPage/AdminPage";
import {AuthenticationContext} from "../../src/context/AuthenticationContext";

export default function AdminBoard() {

    const router = useRouter();
    const {isAdmin, loading} = useContext(AuthenticationContext)
    // const [isAdmin, setIsAdmin] = useState(false);
    // const [isAdmin, setIsAdmin] = useState(true);

    if (loading) return <div>loading</div>

    if (!isAdmin) {
        return <div>Maybe you are not admin let me check please wait jeune padawan</div>
    }

    return <AdminPage />
}
