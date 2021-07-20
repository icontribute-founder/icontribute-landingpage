import React from "react";
import "./NavBarLogo.css";

const NavBarLogo = ({ isMobile = false }) => {
  return (
    <div className={isMobile ? "NavBarLogoMobile" : "NavBarLogo"}>
      <h1 className="NavBarLogo-Company">iContribute</h1>
      <h2 className="NavBarLogo-Slogan">We rise by lifting others</h2>
    </div>
  );
};

export default NavBarLogo;
