import { createContext, useEffect, useState } from "react";
import { getCategoriesAndDocument } from "../utils/firebase/firebase.util";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  const value = { categoriesMap };

  useEffect(() => {
    const getCategory = async () => {
      const categoryMap = await getCategoriesAndDocument();
      // console.log(categoryMap);
      setCategoriesMap(categoryMap);
    };
    getCategory();
  }, []);

  //Chỉ chạy 1 lần duy nhất để add data vào firebase
  // useEffect(() => {
  //   // chạy tạo collection truyền tên collection và data vào
  //   addColectionAndDocument("categories", SHOP_DATA);
  // }, []);

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
