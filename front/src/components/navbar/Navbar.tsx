import React from 'react';
import classes from './Navbar.module.scss';
import {useRouter} from "next/router";
import {Button} from "../../../.yalc/my-lib/dist/cjs";

function Navbar() {
  const router = useRouter();

    return (
        <div className={classes.navBar}>
            <div className={classes.nameAndLogo}>
                <a onClick={() => router.push(("/"))}>
                    <img className={classes.logo} src="/Logo.svg" alt="logo"/>
                </a>
                <h1 className={classes.name}>RIDE</h1>
            </div>
            <div className={classes.links}>
                <Button onClick={() => {router.push("/login")}} title="Connexion admin" />
            </div>
        </div>
    );
}

export default Navbar;