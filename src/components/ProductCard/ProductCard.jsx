import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/Button";
import "./ProductCard.styles.scss";

export default function ProductCard({ product }) {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button button_type="inverted" onClick={addProductToCart}>
        Add to card
      </Button>
    </div>
  );
}
