import React from "react";
import CategoryItem from "../category-item/category-item";
import "./directory.styles.scss";

export default function Directory({ categories }) {
  return (
    <div className="categories-container">
      {categories.map((category, index) => {
        return <CategoryItem key={index} category={category} />;
      })}
    </div>
  );
}
