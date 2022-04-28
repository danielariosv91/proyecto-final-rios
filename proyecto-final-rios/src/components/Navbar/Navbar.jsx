import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css'

function Navbar(props) {
    return (
        <div className="navbar">
            <ul>
                <li>Tiendita del Comic</li>
                <li>Comic</li>
                <li>Mangas</li>
                <li>Contacto</li>
                <li> <CartWidget/></li>
            </ul>
        </div>
    );
}

function ItemListContainer() {
    
}

export default Navbar;
