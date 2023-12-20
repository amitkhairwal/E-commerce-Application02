import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const BaseUrl="https://ecommerce-jgon.onrender.com"


const AddNewProduct = () => {
  const [title, setTitle] = useState("");
  

  const [price, setPrice] = useState("");

  const [discountPercentage, setDiscountPercentage] = useState("");
  
  const [brand, setBrand] = useState("");
  const [catergory, setCategory] = useState("");
  const [thumbnail,setThumbnail]=useState('')

  const navigate = useNavigate();

  const addProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${BaseUrl}/product`, {
        title,
        price,
       
        discountPercentage,
     
        catergory,
        thumbnail,
        brand
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
   
    
<form className="form-horizontal container" onSubmit={addProduct}>
      <fieldset>
       
        <legend> Add Product</legend>
        
        <div  className="col-md-4">
          <label className="col-md-4 control-label" htmlFor="title">
            Title
          </label>
          <div  >
            <input
              id="title"
              name="title"
              type="text"
              placeholder="title"
              className="form-control input-md"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>
        <div  className="col-md-4">
          <label className="col-md-4 control-label" htmlFor="thumbnail">
            Thumbnail
          </label>
          <div >
            <input
              id="thumbnail"
              name="thumbnail"
              type="text"
              placeholder="thumbnail"
              className="form-control input-md"
              value={thumbnail}
              onChange={(e) => setThumbnail(e.target.value)}
            />
          </div>
        </div>
        <div  className="col-md-4">
          <label className="col-md-4 control-label" htmlFor="price">
            Price
          </label>
          <div >
            <input
              id="price"
              name="price"
              type="number"
              placeholder="price"
              className="form-control input-md"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>
        {/* Select Basic */}
        <div  className="col-md-4">
          <label className="col-md-4 control-label" htmlFor="category">
            Category
          </label>
          <div >
            <select
              id="category"
              name="category"
              className="form-control"
              value={catergory}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Choose</option>
              <option value="smartphone">SmartPhone</option>
              <option value="laptops">Laptops</option>
              <option value="smartwatch">SmartWatch</option>
            </select>
          </div>
        </div>
        {/* Select Basic */}
        <div  className="col-md-4">
          <label className="col-md-4 control-label" htmlFor="brand">
            Brand
          </label>
          <div>
            <input 
            type="text"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="form-control input-md"
            
            />
          </div>
        </div>
        {/* Text input*/}
        <div className="col-md-4">
          <label className="col-md-4 control-label" htmlFor="discountPercentage">
            Discount
          </label>
          <div >
            <input
              id="discountPercentage"
              name="discountPercentage"
              type="number"
              placeholder="discountPercentage"
              className="form-control input-md"
              value={discountPercentage}
              onChange={(e) => setDiscountPercentage(e.target.value)}
            />
          
          </div>
        </div>
        
        <div className="form-group">
          <div className="col-md-4">
            <button
              id="singlebutton"
              name="singlebutton"
              className="btn btn-primary my-5"
              >
              Add
            </button>
          </div>
        </div>
      </fieldset>
    </form>
  
        
    
  );
};

export default AddNewProduct;

  
