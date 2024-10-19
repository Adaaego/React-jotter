import './App.css'
import { useState, useEffect } from 'react';
import ProductList from './components/ProductList';
import { filterByPrice } from './components/ProductUtil';

function App() {


    //state to access the product list and update it 
    const [listItem, setListItem] = useState([]);
    const [filteredList, setFilteredList]  = useState([]);
    const [isFiltered, setIsFiltered] = useState (false)

    //fetching the data from fake store api

    async function getProducts(){
        try{
            const productData  =  await fetch('https://fakestoreapi.com/products');
            const item = await productData.json();
            setListItem(item);
            console.log(item);
        }catch(report){
            console.log('invalid link');
        }
    };

    //use effect to trigger the get product once app renders
    useEffect(() => {
        getProducts();
      }, []);

      const filterHandler =  () => {
        const  minPrice = 100;
        const maxPrice = 500;
        const filtered = filterByPrice(listItem, minPrice, maxPrice);
        setFilteredList(filtered);
        setIsFiltered(true);  // Set the flag to true to display the filtered list
        console.log(filtered);
      };

      
 
     return(

    <div className='App'>
      <button onClick={filterHandler}> filter here</button>
     <ProductList listItem={isFiltered ? filteredList : listItem}/>
    </div>


    )
}


export default App;
