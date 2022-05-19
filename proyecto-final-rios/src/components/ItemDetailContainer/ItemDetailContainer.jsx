import React, { useEffect, useState } from 'react';
import { getFirestore, collection, query, where, doc, getDoc } from "firebase/firestore";
import ItemDetail from '../ItemDetail/ItemDetail'

function getItem(id) {
  const db = getFirestore();
  return getDoc(doc(db, 'Items', id))
}

export default function ItemDetailContainer({ detail }) {

  const [product, setProduct] = useState([]);

  useEffect(() => {
    getItem(detail)
      .then(snapshot => {
        console.log({id: snapshot.id, ...snapshot.data()})
      })
  }, [detail]);

  return (
    <ItemDetail item={product}></ItemDetail>
  )
}
