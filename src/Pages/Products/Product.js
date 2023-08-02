import React from "react";

import "./Products.css";

const Product = (props) => {
  return (
    <div className="product">
      <img src={props.image} alt={props.productName} />
      <div className="description">
        <p>
          <b>{props.productName}</b>
        </p>
        <p>${props.price}</p>
      </div>
      <button className="addToCartBtn">Add To Cart</button>
    </div>
  );
};
export default Product;
