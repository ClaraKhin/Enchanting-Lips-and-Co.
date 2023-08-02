import React from "react";


import "./Products.css";

const Product = (props) => {
  const { productName, image, price } = props.data;

  return (
    <div className="product">
      <img src={image} alt={productName} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
      </div>
      <button className="addToCartBtn" >
        Add To Cart 
      </button>
    </div>
  );
};
export default Product;
