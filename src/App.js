import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';


const CatalogForm = () => {
  const [image, setImage] = useState(logo);
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    inventory: '',
    color: '',
    size: '',
    brand: ''
  });

  const handleInputChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  const handleImageUpload = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <div className='container'>
      <form>
        <div >
          <img src={image} alt="Product" style={{width:"25vw", height:"auto", border:"1px solid black"}} />
          <input type="file" onChange={handleImageUpload} />
        </div>
        <div>
          <label>Product Name:</label>
          <input type="text" name="name" onChange={handleInputChange} />
        </div>
        <div>
          <label>Description:</label>
          <input type="text" name="description" onChange={handleInputChange} />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" name="price" onChange={handleInputChange} />
        </div>
        <div>
          <label>Inventory:</label>
          <input type="number" name="inventory" onChange={handleInputChange} />
        </div>
        <div>
          <label>Color:</label>
          <input type="text" name="color" onChange={handleInputChange} />
        </div>
        <div>
          <label>Size:</label>
          <input type="text" name="size" onChange={handleInputChange} />
        </div>
        <div>
          <label>Brand:</label>
          <input type="text" name="brand" onChange={handleInputChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CatalogForm;
