import React from 'react';
import Item from './Item';

const ItemList = ({ list }) => {
  return (
    <ul>
      {list.map((teclado) => (
        <Item teclado={teclado} key={teclado.nombre} />
      ))}
    </ul>
  );
};

export default ItemList;
