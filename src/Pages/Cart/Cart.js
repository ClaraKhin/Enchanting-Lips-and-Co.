import React, { useContext } from "react";
import Products_data from "../Products/Products_data";
import { ShopContext } from "../../context/Shop_context";
import CardItem from "./CartItem";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount;
  const navigate = useNavigate();
  return (
    <section id="cart">
      <div className="cart">
        <div>
          <h1>Your Cart Items</h1>
        </div>
        <div className="cartItems">
          {Products_data.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CardItem data={product} />;
            } else {
              return ShopContext;
            }
          })}
        </div>
        {totalAmount > 0 ? (
          <div className="checkout">
            <p> Subtotal: ${totalAmount} </p>
            <button onClick={() => navigate("/")}> Continue Shopping </button>
            <button
              onClick={() => {
                checkout();
                navigate("/checkout");
              }}
            >
              Checkout
            </button>
          </div>
        ) : (
          <h1> Your Shopping Cart is Empty</h1>
        )}
      </div>
    </section>
  );
};

export default Cart;
