import classes from "./AdminPage.module.css"
import {useContext, useEffect, useState} from "react";
import {AuthenticationContext} from "../../context/AuthenticationContext";
import {removeOptionalChainingUndefinedMarkerType} from "tsutils";
import {Button} from "@spideai/my-lib/dist/cjs";

enum Tabs {
    USERS = "users",
    VEHICLES = "vehicles"
}

const AdminPage = () => {
    const {jwt} = useContext(AuthenticationContext)
    const [tab, setTab] = useState<Tabs>(Tabs.USERS)
    const [users, setUsers] = useState<any[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    const onTabClick = (tab: Tabs) => {
      setTab(tab)
    }

    useEffect(() => {
        if (!jwt) alert("no token fdm")
        Promise.all([fetch('http://localhost:8000/api/.user/admin/users', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`
            },
        })
          .then(response => response.json())
          .then(data => {
              setUsers((prev) => [...prev, ...data.users])
              setLoading(false)
          }), fetch('http://localhost:8000/api/.user/admin/users', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`
            },
        })
          .then(response => response.json())
          .then(data => {
              setUsers((prev) => [...prev, ...data.users])
          })]).then(() => {
            setLoading(false)
        })
    }, [])

    const onValidate = (idlol: string) => {
        setLoading(true);
        fetch(`http://localhost:8000/api/.user/admin/validate-users/${idlol}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`
            },
        })
            .then(response => response.json())
            .then(data => {
                setLoading(false)
            })
    }

    if (loading) return <div>loading tamer</div>
    return (
        <div className={classes.pageContainer}>
            <h1> Gestion Backoffice</h1>

            <div className={classes.tabContainer}>
                <h4 onClick={() => onTabClick(Tabs.USERS)} className={`${classes.tab} ${tab === Tabs.USERS && classes.selected}`}>
                    liste des utilisateurs actifs
                </h4>
                <h4 onClick={() => onTabClick(Tabs.VEHICLES)} className={`${classes.tab} ${tab === Tabs.VEHICLES && classes.selected}`}>
                    liste des vehicules
                </h4>
            </div>
            <div>
                <table className={classes.table}>
                    <thead>
                    <tr className={classes.tr}>
                        <th className={classes.th} scope="col">Statut</th>
                        <th className={classes.th} scope="col">Nom / Prénom</th>
                        <th className={classes.th} scope="col">Coordonées</th>
                        <th className={classes.th} scope="col">Nationalité</th>
                        <th className={classes.th} scope="col">Actions</th>
                    </tr>
                    </thead>

                    <tbody>
                    {
                        users.map(({userInfo}) => {
                            if (!userInfo) return undefined
                            return (
                                <tr key={userInfo.id} className={classes.tr}>
                                    <td className={classes.td}>{userInfo.validate ? "enabled" : "disabled"}</td>
                                    <td className={classes.td}>{userInfo.name} {userInfo.lastname}</td>
                                    <td className={classes.td}>{userInfo.email} {userInfo.phone}</td>
                                    <td className={classes.td}>{userInfo.nationality}</td>
                                    <td className={classes.td}>
                                        {!userInfo.validate ? <Button title="Verifier" onClick={() => onValidate(userInfo.id)}/>
                                            : <Button title="Editer"/>}
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AdminPage
