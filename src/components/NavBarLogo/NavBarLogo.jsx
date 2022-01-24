import React from "react";
import "./NavBarLogo.css";
import { Link } from "react-router-dom";
import Logo from "../../images/logo/logo_only_64_x_64.png";
import LogoFull from "../../images/logo/logo_full_64.png";

const NavBarLogo = ({ isMobile = false, full = false }) => {
  return (
    <Link className={isMobile ? "nav-bar-logo-m" : "nav-bar-logo"} to="/">
      <div className={isMobile ? "NavBarLogoMobile" : "NavBarLogo"}>
       {full ? <img alt="logo full" src={LogoFull} /> : <img alt="logo only" src={Logo} />}
      </div>
    </Link>
  );
};

export default NavBarLogo;
