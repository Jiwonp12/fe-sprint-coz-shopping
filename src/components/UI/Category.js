import React from "react";

import classes from "./Category.module.css";

const Category = ({ categories, handleSelectCategory, selectedType }) => {
  return (
    <div className={classes.categories}>
      {categories.map(category => (
        <div
          key={category.name}
          className={classes.wrap}
          onClick={() => handleSelectCategory(category.type)}
        >
          <img src={category.img} alt={category.name} className={classes.img} />
          <span
            className={`${classes.text} ${
              selectedType === category.type ? classes.active : ""
            }`}
          >
            {category.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Category;
