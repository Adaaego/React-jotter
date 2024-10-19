

const Button = () => {

    const filterHandler =  () => {
        const  minPrice = 100;
        const maxPrice = 500;
        const filtered = filterByPrice(listItem, minPrice, maxPrice);
        setFilteredList(filtered);
        setIsFiltered(true);  // Set the flag to true to display the filtered list
        console.log(filtered);
      };

    return(
        <button onClick={filterHandler}>Filter Here</button>
    )
};



export default Button;