import React from 'react';
import classes from './Navbar.module.scss';
import Button from "../../../../my-lib/src/components/Button/Button";

function Navbar() {
    return (
        <div className={classes.navBar}>
            <div className={classes.nameAndLogo}>
                <img className={classes.logo} src="Logo.svg" alt="logo"/>
                <h1 className={classes.name}>RIDE</h1>
            </div>
            <div className={classes.links}>
                <Button title="Connexion admin" />
            </div>
        </div>
    );
}

export default Navbar;