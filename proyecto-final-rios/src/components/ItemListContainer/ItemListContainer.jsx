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
      },
      {
        id: 4,
        title: 'Hawgirl',
        price: '$350',
        imageUrl: 'https://www.ecccomics.com/content/productos/5447/Flash_28.jpg'
      },
      {
        id: 5,
        title: 'Jujutsu Kaisen',
        price: '$450',
        imageUrl: 'https://pbs.twimg.com/media/EjUBPF8XsAAQQPY?format=jpg&name=4096x4096'
      },
      {
        id: 6,
        title: 'Battle Royale',
        price: '$600',
        imageUrl: 'https://ramenparados.com/wp-content/uploads/2016/02/Battle-Royale-1.jpg'
      },
      {
        id: 7,
        title: 'Death Note',
        price: '$350',
        imageUrl: 'https://www.ecccomics.com/content/productos/5447/Flash_28.jpg'
      },
      {
        id: 9,
        title: 'Berserk',
        price: '$350',
        imageUrl: 'https://m.media-amazon.com/images/I/51U-SRiOd+L._AC_SY780_.jpg'
      },
    ];
    setTimeout(() => {
      resolve(productsList);
    }, 2000);
  });
  return myPromise;
}

function ItemListContainer({ greeting }) {
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