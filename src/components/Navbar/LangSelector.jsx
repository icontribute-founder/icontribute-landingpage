/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./LangSelector.css";
import i18n from "i18next";
import { useMediaQuery } from "react-responsive";
import { MOBILE_SCREEN_SIZE } from "../../constants/MediaQueries";
import { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";

const LangSelector = () => {
  const isMobile = useMediaQuery({ maxWidth: MOBILE_SCREEN_SIZE });
  const [language, setLanguage] = useState(i18n.language);
  const { pathname } = useLocation();
  const history = useHistory();

  const handleLanguageChange = (lang, path) => {
    switch (lang) {
      case "EN":
        setLanguage("EN");
        i18n.changeLanguage("EN");
        console.log(path);
        history.push(path);
        break;
      case "FR":
        setLanguage("FR");
        i18n.changeLanguage("FR");
        history.push(path);
        break;
      default:
        setLanguage("EN");
        i18n.changeLanguage("EN");
        history.push(path);
    }
  };

  useEffect(() => {
    i18n.changeLanguage("EN");
  }, []);

  return !isMobile ? (
    <div className="lang-selector">
      <div>
        <a
          className={language === "EN" ? "lang-active" : ""}
          href="#"
          onClick={() => handleLanguageChange("EN", pathname)}
        >
          English
        </a>
        {"    "}/{"    "}
        <a
          className={language === "FR" ? "lang-active" : ""}
          href="#"
          onClick={() => handleLanguageChange("FR", pathname)}
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
