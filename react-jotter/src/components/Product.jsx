import React, { useState, useEffect } from "react";

const Product = ({item}) =>{


      return (
        <div className="products">
            <ul>
                <li> the item is : {item.title}</li>
                <li>${item.price}</li>
                <li>{item.description}</li>
                <image></image>
            </ul>
        </div>
      )
      

};



export default Product;