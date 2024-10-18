import './App.css'
import { useState, useEffect } from 'react';

import Product from './components/Product';
import ProductList from './components/ProductList';

function App() {


    //state to access the product list and update it 
    const [listItem, setListItem] = useState([]);

    //fetching the data from fake store api

    async function getProducts(){
        try{
            const productData  =  await fetch('https://fakestoreapi.com/products');
            const item = await productData.json();
            setListItem(item);
        }catch(report){
            console.log('invalid link');
        }
    }

    useEffect(() => {
        getProducts();
      }, []);
 
     return(

    <div className='App'>
     <ProductList listItem ={listItem} />
    </div>


    )
}

export default App
