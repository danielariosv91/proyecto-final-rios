import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemListContainer.css'

function ItemListContainer({ greeting }) {
  function dummy() {
    console.log('dummy prop function');
  }

  return (
    <div className='list-item-container'>
        <ItemCount initial={0} stock={5} onAdd={dummy} />
    </div>
  )
}

export default ItemListContainer