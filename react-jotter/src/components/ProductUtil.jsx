export function filterByPrice (products, minPrice, maxPrice){
    return products.filter(product => product.price >= minPrice && product.price <= maxPrice);

};

