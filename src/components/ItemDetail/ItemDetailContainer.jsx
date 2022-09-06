import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import teclados from '../Item/teclados';

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);

    const GetProduct = () => new Promise((resolve, reject) =>{
        setTimeout(()=> resolve(teclados.find(teclado => teclado.id === 5)), 2000)
    })
   
    useEffect(() =>{
        GetProduct()
        .then(response => setItem(response))
    },[])

    return(
        <ItemDetail item={item} />
    )

  };
  
  export default ItemDetailContainer;
   