import React, { useContext } from "react";
import { ShopContext } from "../../context/Shop_context";

const CardItem = (props) => {
  const { id, productName, image, price } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);
  return (
    <div className="cardItem">
      <img src={image} alt={productName} />
      <div className="description">
        <p>{productName}</p>
        <p>${price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            type="number"
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(e.target.value, id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
