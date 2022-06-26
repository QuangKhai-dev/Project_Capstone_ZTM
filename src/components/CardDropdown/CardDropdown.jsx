import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import "./cardDropdown.styles.jsx";
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cardDropdown.styles.jsx";

export default function CardDropdown() {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutNavigate = () => {
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutNavigate}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
}
