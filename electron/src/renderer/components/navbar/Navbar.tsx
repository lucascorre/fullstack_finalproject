import React from 'react';
import classes from './Navbar.module.scss';
import { useNavigate } from 'react-router-dom';
import Button from 'renderer/components/Button';
import logo from 'renderer/images/Logo.svg'

function Navbar() {
  const navigate = useNavigate()
    return (
        <div className={classes.navBar}>
            <div className={classes.nameAndLogo}>
                <a onClick={() => navigate("/")}>
                    <img className={classes.logo} src={logo} alt="logo"/>
                </a>
                <h1 className={classes.name}>RIDE</h1>
            </div>
            <div className={classes.links}>
                <Button onClick={() => {navigate("/login")}} title="Connexion admin" />
            </div>
        </div>
    );
}

export default Navbar;
