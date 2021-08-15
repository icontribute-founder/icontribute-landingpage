import React from "react";
import { useTranslation } from "react-i18next";
import chatBubble from "../../images/bubbles.png";
import "./GetInTouchBlock.css";

const GetInTouchBlock = () => {
  const { t } = useTranslation();

  return (
    <div data-aos="fade-up" className="GetInTouchBlock">
      <img
        src={chatBubble}
        alt="chat bubble"
        className="GetInTouchBlock-Image"
      />
      <h1 className="GetInTouchBlock-Header">{t("GetInTouchBlock-Header")}</h1>
      <h2 className="GetInTouchBlock-Subheader">
        {t("GetInTouchBlock-Subheader")}
      </h2>
      <a href="mailto:icontribute.founder@gmail.com" className="hollow-yellow">
        {t("CONTACT")}
      </a>
    </div>
  );
};

export default GetInTouchBlock;
