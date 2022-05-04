import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail'

function getItem() {
  const myPromise = new Promise((resolve, reject) => {
    const productsList = [
      {
        id: 1,
        title: 'Batman',
        stock: 5,
        price: '$450',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin congue urna non magna accumsan, eget auctor massa pretium. Sed eleifend nunc ligula, sit amet ullamcorper sapien rhoncus ac.',
        imageUrl: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/184/069/products/batman80anivol191-5a4d6411b2ef55dd1315908772450482-480-0.jpg'
      },
      {
        id: 2,
        title: 'Superman',
        stock: 100,
        price: '$600',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin congue urna non magna accumsan, eget auctor massa pretium. Sed eleifend nunc ligula, sit amet ullamcorper sapien rhoncus ac.',
        imageUrl: 'https://www.ecccomics.com/content/productos/10036/Superman_109_30_1a_cubierta_CORR.jpg'
      },
      {
        id: 3,
        title: 'Flash',
        stock: 100,
        price: '$350',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin congue urna non magna accumsan, eget auctor massa pretium. Sed eleifend nunc ligula, sit amet ullamcorper sapien rhoncus ac.',
        imageUrl: 'https://www.ecccomics.com/content/productos/5447/Flash_28.jpg'
      },
      {
        id: 4,
        title: 'Hawgirl',
        stock: 100,
        price: '$350',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin congue urna non magna accumsan, eget auctor massa pretium. Sed eleifend nunc ligula, sit amet ullamcorper sapien rhoncus ac.',
        imageUrl: 'https://www.ecccomics.com/content/productos/5447/Flash_28.jpg'
      },
      {
        id: 5,
        title: 'Jujutsu Kaisen',
        stock: 100,
        price: '$450',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin congue urna non magna accumsan, eget auctor massa pretium. Sed eleifend nunc ligula, sit amet ullamcorper sapien rhoncus ac.',
        imageUrl: 'https://pbs.twimg.com/media/EjUBPF8XsAAQQPY?format=jpg&name=4096x4096'
      },
      {
        id: 6,
        title: 'Battle Royale',
        stock: 100,
        price: '$600',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin congue urna non magna accumsan, eget auctor massa pretium. Sed eleifend nunc ligula, sit amet ullamcorper sapien rhoncus ac.',
        imageUrl: 'https://ramenparados.com/wp-content/uploads/2016/02/Battle-Royale-1.jpg'
      },
      {
        id: 7,
        title: 'Death Note',
        stock: 100,
        price: '$350',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin congue urna non magna accumsan, eget auctor massa pretium. Sed eleifend nunc ligula, sit amet ullamcorper sapien rhoncus ac.',
        imageUrl: 'https://www.ecccomics.com/content/productos/5447/Flash_28.jpg'
      },
      {
        id: 9,
        title: 'Berserk',
        stock: 100,
        price: '$350',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin congue urna non magna accumsan, eget auctor massa pretium. Sed eleifend nunc ligula, sit amet ullamcorper sapien rhoncus ac.',
        imageUrl: 'https://m.media-amazon.com/images/I/51U-SRiOd+L._AC_SY780_.jpg'
      },
    ];
    setTimeout(() => {
      resolve(productsList);
    }, 2000);
  });
  return myPromise;
}

export default function ItemDetailContainer({ detail }) {

  const [product, setProduct] = useState([]);

  useEffect(() => {
    getItem()
      .then(res => {
        const detalle = res.find(product => product.id === parseInt(detail))
        setProduct(detalle);
      })
  }, []);

  return (
    <ItemDetail item={product}></ItemDetail>
  )
}
