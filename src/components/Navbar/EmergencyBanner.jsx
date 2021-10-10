/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./EmergencyBanner.css";

const EmergencyBanner = ({ isMobile }) => {
  return (
    <span className="emergency-banner">
      <div>
        Our mobile app is under maintenance - if you experience errors, please
        {"\u00A0"}
        <a href="https://forms.gle/isrtWxjAberRN2BbA">Report a Bug</a>
      </div>
    </span>
  );
};

export default EmergencyBanner;
