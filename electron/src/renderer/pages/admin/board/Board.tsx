import {useContext, useEffect, useState} from "react";
import { AuthenticationContext } from 'renderer/context/AuthenticationContext';
import AdminPage from 'renderer/components/adminPage/AdminPage';

export default function AdminBoard() {

    const {isAdmin, loading} = useContext(AuthenticationContext)

    if (loading) return <div>loading</div>

    if (!isAdmin) {
        return <div>Maybe you are not admin let me check please wait jeune padawan</div>
    }

    return <AdminPage />
}
