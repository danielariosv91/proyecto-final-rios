import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail'

function getItem() {
  const myPromise = new Promise((resolve, reject) => {
    const productDetail = {
      id: 1,
      title: 'Batman',
      price: '$450',
      imageUrl: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/184/069/products/batman80anivol191-5a4d6411b2ef55dd1315908772450482-480-0.jpg',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, nihil illum! Laudantium magni, dolores accusantium suscipit ratione voluptate ipsa voluptas natus quibusdam officiis, odit molestias eius inventore perspiciatis provident atque.'
    };

    setTimeout(() => {
      resolve(productDetail);
    }, 2000);
  });
  return myPromise;
}

export default function ItemDetailContainer() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getItem()
      .then(res => {
        setProduct(res);
      })
  }, []);

  return (
    <ItemDetail item={product}></ItemDetail>
  )
}
