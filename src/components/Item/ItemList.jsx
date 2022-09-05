import React, { useState } from "react";
import Item from "./Item/Item";


/*const Items = () => {
 

  return (
    <div className="row">
      {items.map((item) => {
        return (
          <Item
            key={item.id}
            nombre={item.nombre}
            img={item.img}
            precio={item.precio}
          />
        );  
      })}
    </div>
  );
};

export default Items;*/

const ItemList = ({ teclados }) => {
    return (
        <div className="row">
        {teclados.map((teclado) => {
          return (
            <Item
              key={teclado.id}
              nombre={teclado.nombre}
              img={teclado.img}
              precio={teclado.precio}
            />
          );  
        })}
      </div>
    );
  };
  
  export default ItemList;

