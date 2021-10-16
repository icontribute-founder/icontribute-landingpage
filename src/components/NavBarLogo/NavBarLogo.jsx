import React from "react";
import "./NavBarLogo.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NavBarLogo = ({ isMobile = false }) => {
  const { t } = useTranslation();
  return (
    <Link className={isMobile ? "nav-bar-logo-m" : "nav-bar-logo"} to="/">
      <div className={isMobile ? "NavBarLogoMobile" : "NavBarLogo"}>
        <h1 className="NavBarLogo-Company">iContribute</h1>
        <h2 className="NavBarLogo-Slogan">{t("SubLogo")}</h2>
      </div>
    </Link>
  );
};

export default NavBarLogo;
