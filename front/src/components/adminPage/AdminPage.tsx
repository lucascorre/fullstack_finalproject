import classes from "./AdminPage.module.css"
import {useContext, useState} from "react";
import {AuthenticationContext} from "../../context/AuthenticationContext";

enum Tabs {
    USERS = "users",
    VEHICLES = "vehicles"
}

const AdminPage = () => {
    const {jwt} = useContext(AuthenticationContext)
    const [tab, setTab] = useState<Tabs>(Tabs.USERS)
    
    const onTabClick = (tab: Tabs) => {
      setTab(tab)
    }

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
                        <tr className={classes.tr}>
                            <td className={classes.td}>Enabled</td>
                            <td className={classes.td}>Mark otto</td>
                            <td className={classes.td}>longueCoordonnéedemerde@pouette.pouette</td>
                            <td className={classes.td}>truite</td>
                            <td className={classes.td}>bonton</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AdminPage