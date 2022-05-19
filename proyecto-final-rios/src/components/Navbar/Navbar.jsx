import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css'

function Navbar(props) {
    return (
        <div className="container-navbar">
            <div className="navbar">
                <ul>
                    <li><Link to={'/'}>Tiendita del Comic</Link></li>
                    <li><Link to={'/comics'}>Comics</Link></li>
                    <li><Link to={'/mangas'}>Mangas</Link></li>
                    <li><Link to={'/contacto'}>Contacto</Link></li>
                    <li> <CartWidget /></li>
                </ul>
            </div>
        </div>
    );
}

function ItemListContainer() {

}

export default Navbar;
