import React from 'react';
import './Item.css';

function Item({ item }) {
  return (
    <div className='card'>
      <div className='card__img'>
        <img src={item?.imageUrl} alt="Imagen del producto" />
      </div>
      <div className='card__detail'>
        <h3>{item?.title} </h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Laudantium, nihil illum! Laudantium magni, dolores accusantium suscipit ratione voluptate ipsa voluptas natus quibusdam officiis, odit molestias eius inventore perspiciatis provident atque.</p>
        <button>Ver más</button>
      </div>
    </div>
  )
}

export default Item