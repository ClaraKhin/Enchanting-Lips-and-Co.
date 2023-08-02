import React from "react";
import Products_data from "../Products/Products_data";

import "./Products.css";

const Products = () => {
  return (
    <section id="products">
      <div className="productsTitle">
        <h1 className="text-center mt-3">Products</h1>
      </div>
      <div className="cart-logo">
        <a href="/">
          <i
            class="fa-sharp fa-solid fa-cart-shopping fa-2xl"
            style={{ color: "#ee5d8d" }}
          ></i>
        </a>
      </div>
      <div className="products">
        {Products_data.map((product) => {
          return (
            <div className="product">
              <img src={product.image} alt={product.productName} />
              <div className="description">
                <p>{product.productName}</p>
                <p>{product.price}</p>
              </div>
              <button className="addToCartBtn">Add To Cart</button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
