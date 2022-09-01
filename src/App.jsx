import React from 'react';
import Navbar from './components/navbar/Navbar';
import ItemListContainer from './components/Item/ItemListContainer';


const App = () => {
    return (
        <>
         <Navbar/>  
         <div className='container'>
         <ItemListContainer/>  
         </div>


        </>
    );
}

export default App;
