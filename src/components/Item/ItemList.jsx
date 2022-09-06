import React, { useState } from "react";
import Item from "./Item/Item";

const ItemList = ({ teclados }) => {
    return (
        <div className="row">
        {teclados.map((teclados) => {
          return (
            <Item
              key={teclados.id}
              nombre={teclados.nombre}
              img={teclados.img}
              precio={teclados.precio}
            />
          );  
        })}
      </div>
    );
  };
  
  export default ItemList;

