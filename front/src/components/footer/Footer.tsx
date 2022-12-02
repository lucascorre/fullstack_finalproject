import React from 'react';
import classes from './Footer.module.scss';

function Footer() {
    return (
        <footer className={classes.footer}>
            <div className={classes.links}>
                <a href="#">Contact</a>
                <a href="#">Conditions générales pdf</a>
            </div>
            <p>RIDE 2022 - tout droits réservés</p>
        </footer>
    );
}

export default Footer;