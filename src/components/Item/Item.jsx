import React from 'react'

const Item = ({teclado}) => {
  return <li>{teclado.nombre} {teclado.precio}</li>
}

export default Item