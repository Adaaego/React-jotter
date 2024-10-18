import React, { useState, useEffect } from "react";

const Product = ({item}) =>{


      return (
        <div className="products">
            <ul>
                <li> the item is : {item.title}</li>
                <li></li>
                <li></li>
                <image></image>
            </ul>
        </div>
      )
      

};



export default Product;