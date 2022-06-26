import React, { useContext } from "react";
import { ShoppingIcon, CartIconContainer, ItemCount } from "./cardIcon.styles";
import { CartContext } from "../../contexts/cart.context";

export default function CardIcon() {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toogleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toogleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
}
