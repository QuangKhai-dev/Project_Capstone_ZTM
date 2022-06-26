import React, { useContext } from "react";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import { CartContext } from "../../contexts/cart.context";
import "./checkout.styles.scss";

export default function Checkout() {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">Product</div>
        <div className="header-block">Description</div>
        <div className="header-block">Quantity</div>
        <div className="header-block">Price</div>
        <div className="header-block">Remove</div>
      </div>
      {cartItems.map((item, index) => {
        return <CheckoutItem key={index} cartItem={item} />;
      })}
      <p>Total: {cartTotal}</p>
    </div>
  );
}
