import Product from './Product';

const ProductList = ({listItem, filteredList}) => {
return(
    <div> 
         {listItem.map(item => <Product item={item} /> )}
    </div>
  
)
};

export default ProductList