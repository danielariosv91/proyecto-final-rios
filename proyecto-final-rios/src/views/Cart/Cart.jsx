import React, { useContext } from 'react'
import ItemCount from './../../components/ItemCount/ItemCount';
import CartContext from '../../store/cart-context';
import './Cart.css';

export default function Cart() {
  const cartContext = useContext(CartContext);

  return (
    <>
      <h2> Resumen de compra </h2>
      <div className="cart-container">
        <div className="cart-container__items">
          <div className="cart-container__card">
            <table className="cart-container__table">
              <thead>
                <tr>
                  <th>Titulo</th>
                  <th>Precio unitario</th>
                  <th>Cantidad</th>
                  <th>Precio final</th>
                  <th>Eliminar</th>
                </tr>
              </thead>
              <tbody>
                {cartContext.products.map(item => (
                  <tr>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                    <td>{item.price * item.quantity}</td>
                    <td>x</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="cart-container__resume">
          <div className="cart-container__resume-cart">
            <h4> Resumen de compra</h4>

            <p> Sub total: $1000</p>
            <button> Preceder comprar </button>
          </div>
        </div>
      </div>
    </>
  )
}
