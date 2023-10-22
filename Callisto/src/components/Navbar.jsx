import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <div className={`navbar ${isNavOpen ? 'open' : ''}`}>
            <div className="navbar-toggle" onClick={toggleNav}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <ul className="navbar-links">
                <li><a href="/">Inicio</a></li>
                <li><a href="/acerca">Acerca</a></li>
                <li><a href="/servicios">Servicios</a></li>
                <li><a href="/contacto">Contacto</a></li>
            </ul>
        </div>
    );
}

export default Navbar;
