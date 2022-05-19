import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
// import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'

function getProducts(category) {
  debugger;
  const db = getFirestore();
  const itemsCollection = category ? query(collection(db, "Items"), where('category', '==', 'manga')) :
    collection(db, 'items');


  return getDocs(itemsCollection)
}

function ItemListContainer({ greeting }) {
  const { categoryId } = useParams()
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts(categoryId)
      .then(snapshot => {
        setProducts(snapshot.docs.map(doc => { return { ...doc.data(), id: doc.id } }));
      })
  }, []);

  return (
    <div key="list-item-container" className="list-item-container">
      <ul>
        <li><Link to={'/category'}>Todas las categorías</Link></li>
        <li><Link to={'/category/manga'}>Contacto</Link></li>
        <li><Link to={'/category/dc-comids'}>Contacto</Link></li>
      </ul>
      <ItemList items={products} />
      {/* <ItemCount initial={0} stock={5} onAdd={dummy} /> */}
    </div>
  )
}

export default ItemListContainer