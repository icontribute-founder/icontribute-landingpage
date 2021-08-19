import i18next from "i18next";
import React from "react";
import { useTranslation } from "react-i18next";
import apple_en from "../../../images/apple_en.png";
import google_en from "../../../images/google_en.png";
import apple_fr from "../../../images/apple_fr.png";
import google_fr from "../../../images/google_fr.png";
import "./MainBlock.css";

const MainBlock = () => {
  const { t } = useTranslation();
  const isFrench = i18next.language === "FR" ? true : false;
  return (
    <div data-aos="fade-up" className="Volunteers-MainBlock">
      <div className="Volunteers-MainBlock-Info">
        <h1 className="Volunteers-MainBlock-Header">
          {t("Volunteers-MainBlock-Header")}
        </h1>
        <p className="Volunteers-MainBlock-Details">
          {t("Volunteers-MainBlock-Details")}
        </p>
        <div className="app-download-icons">
          <a
            href="https://apps.apple.com/ca/app/icontribute/id1524895764?ign-mpt=uo%3D4"
            target="_blank"
            rel="noopener noreferrer"
            className="Volunteers-MainBlock-AppstoreLink"
          >
            <img
              src={isFrench ? apple_fr : apple_en}
              alt="App Store download"
            />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.icontribute"
            target="_blank"
            rel="noopener noreferrer"
            className="Volunteers-MainBlock-AppstoreLink"
          >
            <img
              src={isFrench ? google_fr : google_en}
              alt="Google Play download"
            />
          </a>
        </div>
      </div>
      <div className="Volunteers-MainBlock-Video">
        <iframe
          data-aos="fade-up"
          title="iContribute launch video"
          src="https://drive.google.com/file/d/1tj2jsvMgDrHY7MHLsTzh0Qf7kaLlK-Rv/preview"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          width="500"
          height="300"
        />
      </div>
    </div>
  );
};

export default MainBlock;
