import React, { useContext } from "react";
import Products_data from "../Products/Products_data";
import { ShopContext } from "../../context/Shop_context";
import CartItem from "./CartItem";
import "./Cart.css";

const Cart = () => {
  const { cartItems } = useContext(ShopContext);
  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart-item">
        {Products_data.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};
export default Cart;
