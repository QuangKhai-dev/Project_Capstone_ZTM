import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import { CategoriesContext } from "../../contexts/categories.context";
import "./category.styles.scss";

export default function Category() {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState([]);

  // set lại giá trị khi có sự thay đổi từ categoriesMap hoặc produtcs
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [products, categoriesMap]);
  // console.log(products);
  return (
    <>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products?.map((product, index) => {
          return <ProductCard key={index} product={product} />;
        })}
      </div>
    </>
  );
}
