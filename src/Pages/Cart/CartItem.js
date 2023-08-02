import React from "react";
// import { ShopContext } from "../../context/Shop_context";

const CartItem = (props) => {
  const {productName, image, price } = props.data;
  // const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);
  return (
    <div className="cartItem">
      <img src={image} alt={productName} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
        {/* <div className="countHandler">
          <button onClick={() => removeFromCart(id)}>-</button>
          <input value={cartItems[id]} />
          <button onClick={() => addToCart(id)}>+</button>
        </div> */}
      </div>
    </div>
  );
};
export default CartItem;
