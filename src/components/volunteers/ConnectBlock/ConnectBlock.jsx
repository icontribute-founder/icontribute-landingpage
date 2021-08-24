import React from "react";
import phone from "../../../images/icons/Phone.png";
import email from "../../../images/email.png";
import "./ConnectBlock.css";
import { useTranslation } from "react-i18next";

const ConnectBlock = () => {
  const { t } = useTranslation();
  return (
    <div data-aos="fade-up" className="connect-container">
      <div className="connect-wrapper">
        <div className="connect-header">
          <h1>{t("connect-header-h1")}</h1>
          <p>{t("connect-header-p")}</p>
        </div>
        <img id="connect-icon" src={phone} alt="phone icon" />
      </div>
      <img id="connect-email" src={email} alt="example email" />
    </div>
  );
};

export default ConnectBlock;
