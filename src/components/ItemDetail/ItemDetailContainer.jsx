import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import teclado from '../Item/teclados';

const ItemDetailContainer = () => {
    const [teclado, setItem] = useState([]);

    const GetProduct = () => new Promise((resolve, reject) =>{
        setTimeout(()=> resolve(teclado.find(teclado => teclado.id === 1)), 2000)
    })
   
    useEffect(() =>{
        GetProduct()
        .then(response => setItem(response))
    },{})

    return(
        <ItemDetail teclado={teclado}/>
    )

  };
  
  export default ItemDetailContainer;
   