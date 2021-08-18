import React from "react";
import { useTranslation } from "react-i18next";
import InteractiveMap from "../InteractiveMap/InteractiveMap";
import "./AcrossGlobeBlock.css";

const AcrossGlobeBlock = ({ teamLocations }) => {
  const { t } = useTranslation();
  return (
    <div data-aos="fade-up" className="AcrossGlobeBlock">
      <h1 className="AcrossGlobeBlock-header">
        {t("AcrossGlobeBlock-header")}
      </h1>
      <h2 className="AcrossGlobeBlock-subheader">
        {t("AcrossGlobeBlock-subheader")}
      </h2>
      <InteractiveMap teamLocations={teamLocations} />
    </div>
  );
};

export default AcrossGlobeBlock;
