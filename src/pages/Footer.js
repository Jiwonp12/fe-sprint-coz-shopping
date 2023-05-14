import React from "react";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <p>개인정보 처리방침 | 이용 약관</p>
      <p>All rights reserved @ Codestates</p>
    </footer>
  );
};

export default Footer;
