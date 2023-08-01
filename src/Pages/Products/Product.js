import React, { useContext } from "react";
import { ShopContext } from "../../context/Shop_context";
import "./Products.css";

const Product = (props) => {
  const { id, productName, image, price } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemCount = cartItems[id];
  return (
    <div className="product">
      <img src={image} alt={productName} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
      </div>
      <button className="addToCartBtn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <>({cartItemCount})</>}
      </button>
    </div>
  );
};
export default Product;
