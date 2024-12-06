import React, { useState } from "react";
import "./styles.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__divider"></div>
        <div className="footer__wrapper">
          <span className="footer__wrapper-txt">© 2024 5S-Todo</span>
        </div>
      </div>
    </footer>
  );
};
