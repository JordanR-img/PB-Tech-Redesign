// import axios from "axios";

// export default function Result(req, res) {
//   axios
//     .get("localhost:4444/api")
//     .then((res) => {
//       console.log(res.data);
//     })
//     .catch(() => {
//       alert("Data has not been received");
//     });
// }

import React, { useState } from 'react'
import axios from 'axios'

export default function ProductList(){
    const [products, setProducts] =  useState([])

    const fetchProducts = ()=>{
       axios.get(`http://localhost:4444/laptop`)
      .then(response => {
        const products = response.data
        setProducts(products)
      })      
     
    }
    
    
    return (
        <>
          <p>Product List</p>
          <p><button onClick={fetchProducts}>Get the laptops I need</button></p>
          <ul>
          {
            products
              .map(laptop =>
                <li key={laptop._id}>{laptop.model} {laptop.type}</li>
              )
          }
          </ul>
        </>
    )
}