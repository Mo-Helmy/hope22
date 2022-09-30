import React from "react";

import classes from "./CategoryList.module.css";

const CategoryList = () => {
  return (
    <ul className={classes["category-list"]}>
      <li>For Men</li>
      <li>For Women</li>
      <li>Mugs</li>
      <li>Canvas</li>
      <li>Posters</li>
    </ul>
  );
};

export default CategoryList;
