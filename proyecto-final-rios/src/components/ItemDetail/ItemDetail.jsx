import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import CartContext from '../../store/cart-context';
import ItemCount from './../ItemCount/ItemCount'
import './ItemDetail.css'

export default function ItemDetail({ item }) {
  const cartContext = useContext(CartContext)

  function onAdd(quantityToAdd) {
    cartContext.addProduct({ quantity: quantityToAdd, ...item });
  }

  return (
    <div className="card-detail">
      <div className="card-detail__container-img">
        <img src={item?.imageUrl} alt="Imagen del producto" />
      </div>
      <div className="card-detail__container-description">
        <h2>{item?.title} </h2>
        <p>{item?.description}</p>
        <span>Precio: {item?.price}</span>

        <div className="card-detail__footer">
          <ItemCount initial={0} stock={item.stock} onAdd={onAdd}> </ItemCount>
          <button onClick={() => console.log(cartContext.products)} >Imprimir carrito</button>
          <button onClick={() => cartContext.removeProduct(item.id)} >Eliminar producto</button>
          <button onClick={() => cartContext.clear()} >Limpiar</button>
          <button onClick={() => console.log(cartContext.isInCart(item.id))} >En el carrito</button>
          <button onClick={() => console.log(cartContext.getCartQuantity())} >Cantidad</button>
          {cartContext.products.length &&
            <button onClick={() => console.log(cartContext)}>
              <Link to='/cart'>
                Terminar la compra ({cartContext.getCartQuantity()} items)
              </Link>
            </button>
          }
        </div>
      </div>
    </div>
  )
}
