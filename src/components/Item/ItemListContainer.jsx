import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import teclados from '../Item/teclados';

const ItemListContainer = () => {
    const [teclado, setTeclados] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {

  
      const getTeclados = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(teclado);
        }, 2000);
      });
  
      getTeclados
        .then((response) => setTeclados(response))
        .finally(() => setIsLoading(false));
    }, []);
  
    return isLoading ? <h2>Cargando...</h2> : <ItemList teclados={teclados} />;
  };
  
  export default ItemListContainer;
  