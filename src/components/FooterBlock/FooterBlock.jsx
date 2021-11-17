import React from "react";
import { Link } from "react-router-dom";

import apple_en from "../../images/apple_en.png";
import google_en from "../../images/google_en.png";
import apple_fr from "../../images/apple_fr.png";
import google_fr from "../../images/google_fr.png";

import SocialMediaBar from "../SocialMediaBar/SocialMediaBar";
import NavBarLogo from "../NavBarLogo/NavBarLogo";
import privacy from "../../terms/iContribute Privacy Policy 2021.pdf";
import privacyfr from "../../terms/iContribute - Politique de confidentialité.pdf";
import TOS from "../../terms/iContribute Terms and Conditions 2021.pdf";
import "./FooterBlock.css";

import { useMediaQuery } from "react-responsive";
import { MOBILE_SCREEN_SIZE } from "../../constants/MediaQueries";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const FooterBlock = () => {
  const isMobile = useMediaQuery({ maxWidth: MOBILE_SCREEN_SIZE });
  const { t } = useTranslation();
  const isFrench = i18next.language === "FR" ? true : false;
  if (isMobile) {
    return (
      <div className="FooterBlock">
        <NavBarLogo />
        <div className="FooterBlock-Links">
          <ul className="FooterBlock-Links-List">
            <li>
              <a href="mailto:icontribute.founder@gmail.com">{t("CONTACT")}</a>
            </li>
            <li>
              <a href={TOS} download>
                {t("TERMS & CONDITIONS")}
              </a>
            </li>
            <li>
              <a href={isFrench ? privacyfr : privacy} download>
                {t("PRIVACY POLICY")}
              </a>
            </li>
          </ul>
        </div>
        <SocialMediaBar />
        <div className="FooterBlock-AppStores">
          <a
            href="https://apps.apple.com/ca/app/icontribute/id1524895764?ign-mpt=uo%3D4"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-appstore"
          >
            <img
              src={isFrench ? apple_fr : apple_en}
              alt="App Store download"
            />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.icontribute"
            className="footer-appstore"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={isFrench ? google_fr : google_en}
              alt="Google Play download"
            />
          </a>
        </div>
        <footer>
          © {new Date().getFullYear().toString()} {t("Rights Text")}
        </footer>
      </div>
    );
  }

  return (
    <div className="FooterBlock">
      <div className="footer-container">
        <div className="footer-logo">
          <NavBarLogo />
          {isMobile ? <SocialMediaBar /> : null}
          <div className="footer-appstore-container">
            <a
              href="https://apps.apple.com/ca/app/icontribute/id1524895764?ign-mpt=uo%3D4"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-appstore"
            >
              <img
                src={isFrench ? apple_fr : apple_en}
                alt="App Store download"
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.icontribute"
              className="footer-appstore"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={isFrench ? google_fr : google_en}
                alt="Google Play download"
              />
            </a>
          </div>
        </div>

        <div className="footer-list-container">
          {" "}
          <ul className="footer-list">
            <li>
              <Link to="/">{t("HOME")}</Link>
            </li>
            <li>
              <Link to="/volunteers">{t("VOLUNTEERS")}</Link>
            </li>
            <li>
              <Link to="/organizations">{t("ORGANIZATIONS")}</Link>
            </li>
            <li>
              <a href="mailto:icontribute.founder@gmail.com">{t("CONTACT")}</a>
            </li>
          </ul>
          <ul className="footer-list">
            <li>
              <Link to="/our-team">{t("OUR TEAM")}</Link>
            </li>
            <li>
              <a href={TOS} download>
                {t("TERMS & CONDITIONS")}
              </a>
            </li>
            <li>
              <a href={isFrench ? privacyfr : privacy} download>
                {t("PRIVACY POLICY")}
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/icontribute/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("FOLLOW US")}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="FooterBlock-Copyright">
        © {new Date().getFullYear().toString()} {t("Rights Text")}
      </p>
    </div>
  );
};

export default FooterBlock;
