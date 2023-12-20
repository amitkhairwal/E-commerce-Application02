import { useState } from "react";
import React from 'react';
import axios from "axios";
const BaseUrl="https://ecommerce-jgon.onrender.com"


const DeleteProduct=()=>{
    const [productlist,setProductlist]= useState([]);
    const [inputvalue,setInputvalue]= useState('')
  

   
    const handleDeleteClick = () => {
        
      axios.delete(`${BaseUrl}/product/delete/${inputvalue}`)
          .then(response => {
            if (response.data.success) {
             
              setProductlist(productlist => productlist.filter(product => product._id !== parseInt(inputvalue)));
              
              setInputvalue('');
              
            }
          })
          .catch(error => console.error('Error deleting data:', error));
      };

   

   


    return(
        <div>
            <div>
                <h2>Which Product you want to Delete?</h2>
            </div>
            <div>
               <input  type="text" value={inputvalue} onChange={(e)=>setInputvalue(e.target.value)} placeholder="Product Id"/>
            </div>
            <div>
                <button className="btn btn-primary  m-2" onClick={handleDeleteClick}>
                    DELETE
                </button>
            </div>
            <div>
            <ul>
        {productlist.map(product => (
          <li key={product._id}>
             ID: ${product._id}
          </li>
        ))}
      </ul>
            </div>
            
             
        </div>
    )
}

export default DeleteProduct;