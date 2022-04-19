import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css'

function Navbar(props) {
    return (
        <div className="navbar">
            <ul>
                <li>Tiendita del Comic</li>
                <li>Mangas/Comic</li>
                <li>Contacto</li>
            </ul>

            <CartWidget/>
        </div>
    );
}

function ItemListContainer() {
    
}

export default Navbar;
