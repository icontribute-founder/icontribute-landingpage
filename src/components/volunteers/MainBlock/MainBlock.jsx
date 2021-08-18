import React from "react";
import { useTranslation } from "react-i18next";
import apple from "../../../images/1 25.png";
import google from "../../../images/1 26.png";
import "./MainBlock.css";

const MainBlock = () => {
  const { t } = useTranslation();

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
            <img src={apple} alt="App Store download" />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.icontribute"
            target="_blank"
            rel="noopener noreferrer"
            className="Volunteers-MainBlock-AppstoreLink"
          >
            <img src={google} alt="Google Play download" />
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
