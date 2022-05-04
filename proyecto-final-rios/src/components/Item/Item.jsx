import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

function Item({ item }) {
  return (
    <div className='card'>
      <div className='card__img'>
        <img src={item?.imageUrl} alt="Imagen del producto" />
      </div>
      <div className='card__detail'>
        <h3>{item?.title} </h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Laudantium, nihil illum! Laudantium magni, dolores accusantium.</p>
        <Link className="card__detail" to="/detalle/1"> Ver detalle </Link>
      </div>
    </div>
  )
}

export default Item