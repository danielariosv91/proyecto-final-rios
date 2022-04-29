import React from 'react'
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
        <span>{item?.price}</span>
        <button>Agregar al carrito</button>
      </div>
    </div>
  )
}
