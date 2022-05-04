import React, { useEffect, useState } from 'react'
import ItemCount from './../ItemCount/ItemCount'
import './ItemDetail.css'

export default function ItemDetail({ item }) {

  let [quantity, setQuantity] = useState(item.stock);

  useEffect(() => {
      setQuantity(item.stock)
  })

  function onAdd(quantityToAdd) {
    setQuantity(quantityToAdd)
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
        <span>Disponibles: {quantity}</span>

        <div className="card-detail__footer">
          <ItemCount initial={0} stock={quantity} onAdd={onAdd}> </ItemCount>
        </div>
      </div>
    </div>
  )
}
