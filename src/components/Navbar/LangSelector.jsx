/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./LangSelector.css";
import i18n from "i18next";
import { useMediaQuery } from "react-responsive";
import { MOBILE_SCREEN_SIZE } from "../../constants/MediaQueries";
import { useEffect } from "react";

const LangSelector = () => {
  const isMobile = useMediaQuery({ maxWidth: MOBILE_SCREEN_SIZE });
  const [language, setLanguage] = useState(i18n.language);

  useEffect(() => {
    setLanguage("EN");
  }, []);

  const handleLanguageChange = (lang) => {
    switch (lang) {
      case "EN":
        setLanguage("EN");
        i18n.changeLanguage("EN");
        break;
      case "FR":
        setLanguage("FR");
        i18n.changeLanguage("FR");
        break;
      default:
        setLanguage("EN");
        i18n.changeLanguage("EN");
    }
  };

  return !isMobile ? (
    <div className="lang-selector">
      <div>
        <a
          className={language === "EN" ? "lang-active" : ""}
          href="#"
          onClick={() => handleLanguageChange("EN")}
        >
          English
        </a>
        {"    "}/{"    "}
        <a
          className={language === "FR" ? "lang-active" : ""}
          href="#"
          onClick={() => handleLanguageChange("FR")}
        >
          Français
        </a>
      </div>
    </div>
  ) : (
    <div className="mobile-lang-selector">
      <br />
      <a
        className={language === "EN" ? "lang-active" : ""}
        href="#"
        onClick={() => handleLanguageChange("EN")}
      >
        English
      </a>
      {"  "}/{"  "}
      <a
        className={language === "FR" ? "lang-active" : ""}
        href="#"
        onClick={() => handleLanguageChange("FR")}
      >
        Français
      </a>
    </div>
  );
};

export default LangSelector;
