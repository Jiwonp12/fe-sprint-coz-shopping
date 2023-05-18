import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./components/UI/Dropdown";

import classes from "./Header.module.css";
import logo from "./assets/logo.png";
import hamburg from "./assets/hamburg.png";

const Header = () => {
  const [dropdownState, setDropdownState] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClickOutside = e => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      closeDropdown();
    }
  };

  const toggleDropdown = e => {
    e.stopPropagation();
    setDropdownState(!dropdownState);
  };

  const closeDropdown = () => {
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
          onClick={toggleDropdown}
        />
      </header>
      <div ref={dropdownRef}>
        {dropdownState && <Dropdown closeDropdown={closeDropdown} />}
      </div>
    </>
  );
};

export default Header;
