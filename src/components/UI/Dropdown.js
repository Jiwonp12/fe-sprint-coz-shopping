import React from "react";
import { Link } from "react-router-dom";

import classes from "./Dropdown.module.css";

const Dropdown = ({ closeDropdown }) => {
  return (
    <div className={classes.dropDown}>
      <li>OOO님, 안녕하세요!</li>
      <Link to="/products">
        <li className={classes.li} onClick={closeDropdown}>
          🎁 상품리스트 페이지
        </li>
      </Link>
      <Link to="/bookmark">
        <li className={classes.li} onClick={closeDropdown}>
          ⭐ 북마크 페이지
        </li>
      </Link>
    </div>
  );
};

export default Dropdown;
