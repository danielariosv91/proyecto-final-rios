import React, { useEffect, useState } from 'react';
import { getFirestore, collection, query, where, doc, getDoc } from "firebase/firestore";
import ItemDetail from '../ItemDetail/ItemDetail'

async function getItem(id) {
  const db = getFirestore();

  let collec = collection(db, 'items');
  let docReference = doc(collec, id);
  let snapshot = await getDoc(docReference);

  return { ...snapshot.data(), id: snapshot.id };
}

export default function ItemDetailContainer({ id }) {

  const [product, setProduct] = useState([]);

  useEffect(() => {
    getItem(id).then(response => {
      setProduct(response)
    })
  }, [id]);

  return (
    <ItemDetail item={product}></ItemDetail>
  )
}
