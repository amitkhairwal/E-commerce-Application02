import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "./Products";
const BaseUrl="https://ecommerce-jgon.onrender.com"

const FetchProduct = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    handleClick();
  }, []);

  const handleClick = async () => {
    try {
      const response = await axios.get(`${BaseUrl}/product`);
        setProduct(response.data);
    } catch (error) {
        console.log(error)
    }
   
  };
  return (
   <>
   <div className='  container'>
   <div className=" flex flex-wrap g-col-4">
   {products.map((product, index) => (
        <Product  {...product} key={index}  
        
        ></Product>
      ))}
      </div>
      </div>
   </>
  )
};

export default FetchProduct;
