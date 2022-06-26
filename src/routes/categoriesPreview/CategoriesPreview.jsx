import React, { Fragment, useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import CategoryPreview from "../../components/CategoryPreview/CategoryPreview";
import "./categoriesPreview.styles.scss";

export default function CategoriesPreview() {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title, index) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={index} title={title} products={products} />
        );
      })}
    </Fragment>
  );
}
