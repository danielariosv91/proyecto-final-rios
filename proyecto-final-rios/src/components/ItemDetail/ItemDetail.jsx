import React from 'react'
import ItemCount from './../ItemCount/ItemCount'
import './ItemDetail.css'

export default function ItemDetail({ item }) {
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
          <ItemCount> </ItemCount>
        </div>
      </div>
    </div>
  )
}
