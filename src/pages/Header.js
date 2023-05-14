import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "../components/UI/Dropdown";

import classes from "./Header.module.css";
import logo from "../assets/logo.png";
import hamburg from "../assets/hamburg.png";

const Header = () => {
  const [dropdownState, setDropdownState] = useState(false);

  const openDropdown = () => {
    setDropdownState(true);
  };

  const closeDropdown = e => {
    setDropdownState(false);
  };

  return (
    <>
      <header className={classes.header}>
        <Link to="/">
          <span className={classes.logo} onClick={closeDropdown}>
            <img src={logo} alt="logo" />
            <h2>COZ Shopping</h2>
          </span>
        </Link>

        <img
          className={classes.hamburg}
          src={hamburg}
          alt="hamburg"
          onClick={openDropdown}
        />
      </header>
      {dropdownState && <Dropdown closeDropdown={closeDropdown} />}
    </>
  );
};

export default Header;
