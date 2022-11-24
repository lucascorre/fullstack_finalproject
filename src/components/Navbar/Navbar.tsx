import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <ul>
            <li><a href="default.asp">Home</a></li>
            <li><a href="news.asp">News</a></li>
            <li><a href="contact.asp">Contact</a></li>
            <li><a className="active" href="#about">About</a></li>
        </ul>
    );
}

export default Navbar;