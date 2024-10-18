import Product from './Product';

const ProductList = ({listItem}) => {
return(
    <div> 
         {listItem.map(item => <Product item={item} /> )}
    </div>
  
)
};

export default ProductList