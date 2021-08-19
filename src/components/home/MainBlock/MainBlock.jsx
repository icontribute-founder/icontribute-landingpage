import React from "react";
import StripedTip from "../../StripedTip/StripedTip";
import main from "../../../images/Iphone_Macbook together.png";
import EventCardCarousel from "../../EventCardCarousel/EventCardCarousel";
import { useTranslation } from "react-i18next";
import "../../../translations/i18n";
import "./MainBlock.css";
import i18next from "i18next";

import apple_en from "../../../images/apple_en.png";
import google_en from "../../../images/google_en.png";
import apple_fr from "../../../images/apple_fr.png";
import google_fr from "../../../images/google_fr.png";

import { useMediaQuery } from "react-responsive";
import { MOBILE_SCREEN_SIZE } from "../../../constants/MediaQueries";

const MainBlock = () => {
  const isMobile = useMediaQuery({ maxWidth: MOBILE_SCREEN_SIZE });
  const { t } = useTranslation();
  const isFrench = i18next.language === "FR" ? true : false;

  return (
    <div data-aos={isMobile ? "" : "fade-up"} className="Home-MainBlock">
      <div className="Home-MainBlock-Info">
        <h1 className="Home-MainBlock-Header">{t("Home-MainBlock-Header")}</h1>
        <p className="Home-MainBlock-Details">{t("Home-MainBlock-Details")}</p>
        <a
          href="https://apps.apple.com/ca/app/icontribute/id1524895764?ign-mpt=uo%3D4"
          target="_blank"
          rel="noopener noreferrer"
          className="Home-MainBlock-AppstoreLink"
        >
          <img src={isFrench ? apple_fr : apple_en} alt="App Store download" />
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.icontribute"
          target="_blank"
          rel="noopener noreferrer"
          className="Home-MainBlock-AppstoreLink"
        >
          <img
            src={isFrench ? google_fr : google_en}
            alt="Google Play download"
          />
        </a>
        {isMobile ? (
          <div>
            <EventCardCarousel />
            <div className="Home-MainBlock-Tips">
              <StripedTip order={0} text={t("StripedTip-1")} />
              <StripedTip order={1} text={t("StripedTip-2")} />
              <StripedTip order={2} text={t("StripedTip-3")} />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      {isMobile ? null : (
        <img
          className="Home-MainBlock-Image"
          src={main}
          alt="iContribute phone"
        />
      )}
    </div>
  );
};

export default MainBlock;
