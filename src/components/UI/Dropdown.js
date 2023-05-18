import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import classes from "./Dropdown.module.css";

const Dropdown = ({ closeDropdown }) => {
  return (
    <div className={classes.dropDown}>
      <li className={classes.liFirst}>OOO님, 안녕하세요!</li>
      <Link className={classes.a} to="/products">
        <li className={classes.li} onClick={closeDropdown}>
          🎁 상품리스트 페이지
        </li>
      </Link>
      <Link className={classes.a} to="/bookmark">
        <li className={classes.liLast} onClick={closeDropdown}>
          <FontAwesomeIcon
            className={classes.bookcolor}
            size="lg"
            icon={faStar}
          />
          북마크 페이지
        </li>
      </Link>
    </div>
  );
};

export default Dropdown;
