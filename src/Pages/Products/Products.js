import React from "react";
import Products_data from "../Products/Products_data";
import Product from "./Product";

import "./Products.css";

const Products = () => {
  return (
    <section id="products">
      <div className="productsTitle">
        <h1 className="text-center mt-3">Products</h1>
      </div>
      <div className="cart-logo">
        <a href="/Cart">
          <i
            class="fa-sharp fa-solid fa-cart-shopping fa-2xl"
            style={{ color: "#ee5d8d" }}
          ></i>
        </a>
      </div>
      <div className="products">
        {Products_data.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
