import React from "react";
import "./NavBarLogo.css";
import { Link } from "react-router-dom";

const NavBarLogo = ({ isMobile = false }) => {
  return (
    <Link className={isMobile ? "nav-bar-logo-m" : "nav-bar-logo"} to="/">
      <div className={isMobile ? "NavBarLogoMobile" : "NavBarLogo"}>
        <h1 className="NavBarLogo-Company">iContribute</h1>
        <h2 className="NavBarLogo-Slogan">We rise by lifting others</h2>
      </div>
    </Link>
  );
};

export default NavBarLogo;
