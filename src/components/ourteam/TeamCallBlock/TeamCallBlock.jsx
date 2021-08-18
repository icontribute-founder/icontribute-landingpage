import React from "react";
import { useTranslation } from "react-i18next";
import grid1 from "../../../images/photoGrid/grid1.png";
import grid2 from "../../../images/photoGrid/grid2.png";
import grid3 from "../../../images/photoGrid/grid3.png";
import grid4 from "../../../images/photoGrid/grid4.png";
import grid5 from "../../../images/photoGrid/grid5.png";
import grid6 from "../../../images/photoGrid/grid6.png";
import "./TeamCallBlock.css";

const TeamCallBlock = () => {
  const { t } = useTranslation();
  return (
    <div className="teamblockcall-container">
      <div data-aos="fade-up">
        <h1>{t("teamblockcall-container-h1")}</h1>
        <p>{t("teamblockcall-container-p")}</p>
      </div>
      <div data-aos="fade-up" className="zoomcall-grid1">
        <img id="photoGrid1" src={grid1} alt="zoom group chat" />
        <img id="photoGrid2" src={grid2} alt="zoom group chat" />
        <img id="photoGrid3" src={grid3} alt="zoom group chat" />
      </div>
      <div data-aos="fade-up" className="zoomcall-grid2">
        <img id="photoGrid4" src={grid4} alt="zoom group chat" />
        <img id="photoGrid5" src={grid5} alt="zoom group chat" />
        <img id="photoGrid6" src={grid6} alt="zoom group chat" />
      </div>
    </div>
  );
};

export default TeamCallBlock;
