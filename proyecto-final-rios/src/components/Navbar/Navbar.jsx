import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css'

function Navbar(props) {
    return (
        <div className="navbar">
            <ul>
                <li>Tiendita del Comic</li>
                <li><Link to={'/comics'}>Comics</Link></li>
                <li><Link to={'/mangas'}>Mangas</Link></li>
                <li><Link to={'/contacto'}>Contacto</Link></li>
                <li> <CartWidget/></li>
            </ul>
        </div>
    );
}

function ItemListContainer() {
    
}

export default Navbar;
