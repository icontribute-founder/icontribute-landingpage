import React from "react";
import "./MainBlock.css";
import img from "../../../images/tutor card.png";
import { useTranslation } from "react-i18next";

const MainBlock = () => {
  const { t } = useTranslation();

  return (
    <div data-aos="fade-up" className="Organizations-MainBlock">
      <div className="Organizations-MainBlock-Info">
        <h1 className="Organizations-MainBlock-Header">
          {t("Organizations-MainBlock-Header")}
        </h1>
        <p className="Organizations-MainBlock-Details">
          {t("Organizations-MainBlock-Details")}
        </p>
      </div>
      <img
        className="Organizations-MainBlock-Photo"
        src={img}
        alt="volunteer tutor"
      />
    </div>
  );
};

export default MainBlock;
