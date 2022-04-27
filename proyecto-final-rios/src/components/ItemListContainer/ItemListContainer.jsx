import React, { useEffect, useState } from 'react';
// import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'

function getProducts() {
  const myPromise = new Promise((resolve, reject) => {
    const productsList = [
      {
        id: 1,
        title: 'Batman',
        price: '$450',
        imageUrl: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/184/069/products/batman80anivol191-5a4d6411b2ef55dd1315908772450482-480-0.jpg'
      },
      {
        id: 2,
        title: 'Superman',
        price: '$600',
        imageUrl: 'https://www.ecccomics.com/content/productos/10036/Superman_109_30_1a_cubierta_CORR.jpg'
      },
      {
        id: 3,
        title: 'Flash',
        price: '$350',
        imageUrl: 'https://www.ecccomics.com/content/productos/5447/Flash_28.jpg'
      }
    ];
    setTimeout(() => {
      resolve(productsList);
    }, 2000);
  });
  return myPromise;
}

function ItemListContainer({ greeting }) {
  // function dummy() {
  //   console.log('dummy prop function');
  // }

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then(res => {
        setProducts(res);
      })
  }, []);

  return (
    <div className='list-item-container'>
      <ItemList items={products} />
        {/* <ItemCount initial={0} stock={5} onAdd={dummy} /> */}
    </div>
  )
}

export default ItemListContainer