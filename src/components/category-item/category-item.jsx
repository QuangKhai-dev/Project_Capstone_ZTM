import React from "react";
import "./category-item.styles.scss";

export default function CategoryItem({ category }) {
  const { imageUrl, title } = category;
  return (
    <div className="category-container">
      <div className="background-image">
        <img
          className="background-image"
          style={{ backgroundImage: `url(${imageUrl})` }}
          alt=""
        />
      </div>
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
}
