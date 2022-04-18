import React from 'react';
import './Navbar.css'
import CardWidget from '../CardWidget/CardWidget';

function Navbar(props) {
    return (
        <div className="navbar">
            <ul>
                <li>Tiendita del Comic</li>
                <li>Mangas/Comic</li>
                <li>Contacto</li>
            </ul>
        </div>
    );
}

export default Navbar;
