import React from "react";
import iPhone from "../../../images/iphone/Component 1.png";
import pencil from "../../../images/icons/pencil.png";
import phone from "../../../images/icons/phoneIcon.png";
import mouse from "../../../images/icons/mouse.png";
import gif from "../../../images/sponsors/iContributeGif.gif";
import blueFiller from "../../../images/iphone/Screen Shot 2020-09-28 at 8.55.57 AM.png";
import "./DemoBlock.css";

import { useMediaQuery } from "react-responsive";
import { MOBILE_SCREEN_SIZE } from "../../../constants/MediaQueries";
import { useTranslation } from "react-i18next";

const DemoBlock = () => {
  const isMobile = useMediaQuery({ maxWidth: MOBILE_SCREEN_SIZE });
  const { t } = useTranslation();

  return (
    <div data-aos="fade-up" className="demoblock-container">
      <h2 className="demoblock-header">{t("demoblock-header-0")}</h2>
      {isMobile ? null : (
        <h2 className="demoblock-header">{t("demoblock-header-1")}</h2>
      )}
      <p className="demoblock-disc">{t("demoblock-disc-1")}</p>
      {isMobile ? null : (
        <div>
          <img className="icontrib-phone" src={iPhone} alt="phone" />
          <img className="icontrib-gif" src={gif} alt="icontribute logo" />
          <img className="icontrib-filler" src={blueFiller} alt="background" />
        </div>
      )}
      <div data-aos="fade-up">
        <h2 className="demoblock-subheader">{t("demoblock-subheader-2")}</h2>
        {isMobile ? null : (
          <p className="demoblock-disc">{t("demoblock-disc-2")}</p>
        )}
        <div className="demostep-container">
          <div className="demostep">
            <img src={pencil} alt="pencil" />
            <h3 className="demostep-header">{t("demostep-header-3")}</h3>
            <p className="demostep-disc">{t("demostep-disc-3")}</p>
          </div>
          <div id="demostep-mouse" className="demostep">
            <img id="mouse-icon" src={mouse} alt="mouse" />
            <h3 id="demostep-header-mouse" className="demostep-header">
              {t("demostep-header-4")}
            </h3>
            <p className="demostep-disc">{t("demostep-disc-4")}</p>
          </div>
          <div className="demostep">
            <img src={phone} alt="phone" />
            <h3 className="demostep-header">{t("demostep-header-5")}</h3>
            <p className="demostep-disc">{t("demostep-disc-5")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoBlock;
