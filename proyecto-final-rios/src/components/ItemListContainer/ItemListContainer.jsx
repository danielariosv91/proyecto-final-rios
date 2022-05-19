import React, { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore'
// import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'

function getProducts() {
  const db = getFirestore();
  const itemsCollection = collection(db, 'items');


  return getDocs(itemsCollection)
}

function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then(snapshot => {
        setProducts(snapshot.docs.map(doc => { return { ...doc.data(), id: doc.id } }));
      })
  }, []);

  return (
    <div key="list-item-container" className="list-item-container">
      <ul>
        <li>Todas las categorías</li>
        <li>Acción</li>
        <li>Ciencia-Ficción</li>
        <li>Romance</li>
      </ul>
      <ItemList items={products} />
      {/* <ItemCount initial={0} stock={5} onAdd={dummy} /> */}
    </div>
  )
}

export default ItemListContainer