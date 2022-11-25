import React from 'react';
import './Navbar.scss';

function Navbar() {
    return (
        <div className="navBar">
            <div className="nameAndLogo">
                <img className="logo" src="Logo.svg" alt="logo"/>
                <h1 className="name">RIDE</h1>
            </div>
            <div className="links">
                <button type="button" className="btn">Connexion admin</button>
            </div>
        </div>
    );
}

export default Navbar;