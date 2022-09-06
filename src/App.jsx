import React from 'react';
import Navbar from './components/navbar/Navbar';
import ItemListContainer from './components/Item/ItemListContainer';
import ItemDetailContainer from './/components/ItemDetail/ItemDetailContainer';


const App = () => {
    return (
        <>
         <Navbar/>  
         <div className='container'>
         <ItemListContainer/>  
         </div>
         <div className='container'>
         <ItemDetailContainer/>  
         </div>


        </>
    );
}

export default App;
