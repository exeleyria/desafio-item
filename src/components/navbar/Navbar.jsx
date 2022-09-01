
import React from 'react';
import Form from './form';
import CartWidget from './CartWidget';

function Navbar() {
  
 
  
  return (
    < >
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">eTKL</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Cositas</a>
              </li>
            </ul>
            <Form contBuscar="Productos"/>
            <CartWidget/>

          </div>
        </div>
      </nav>


    </>
  );
}

export default Navbar;


