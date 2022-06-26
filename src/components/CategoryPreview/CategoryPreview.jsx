import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import "./categoryPreview.styles.scss";

export default function CategoryPreview({ title, products }) {
  // console.log(title, products);
  return (
    <div className="category-preview-container">
      <h2>
        <Link className="title" to={`/shop/${title}`}>
          <span>{title.toUpperCase()}</span>
        </Link>
      </h2>
      <div className="preview">
        {products
          .filter((_, index) => index < 4)
          .map((product, index) => {
            return <ProductCard key={index} product={product} />;
          })}
      </div>
    </div>
  );
}
