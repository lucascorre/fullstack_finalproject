import React from 'react';
import classes from './Navbar.module.scss';
import {Button} from "@spideai/my-lib/dist/cjs";
import {useRouter} from "next/router";

function Navbar() {
  const router = useRouter();

    return (
        <div className={classes.navBar}>
            <div className={classes.nameAndLogo}>
                <img className={classes.logo} src="Logo.svg" alt="logo"/>
                <h1 className={classes.name}>RIDE</h1>
            </div>
            <div className={classes.links}>
                <Button onClick={() => {router.push("/login")}} title="Connexion admin" />
            </div>
        </div>
    );
}

export default Navbar;