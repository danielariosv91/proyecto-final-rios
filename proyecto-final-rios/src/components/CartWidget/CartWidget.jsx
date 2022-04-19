/** Clase que extiende de componente (rcc) */
import React, { Component } from 'react'

/** Assets */
import './CartWidget.css';
import carritoPng from '../../assets/carrito-de-compras.png';

export default class CartWidget extends Component {
    render() {
        return (
            <img className="cartWidget" src={ carritoPng } />
        )
    }
}


