/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./EmergencyBanner.css";

const EmergencyBanner = ({ isMobile }) => {
  if (isMobile) {
    return (
      <span className="emergency-banner">
        <div>
          We are getting reports of an error with signing up. If you experience
          this, please{"\u00A0"}
          {"\u00A0"}
          {"\u00A0"}
          <a href="https://forms.gle/isrtWxjAberRN2BbA">Report a Bug</a>
        </div>
      </span>
    );
  }
  return (
    <span className="emergency-banner">
      <div>
        We are getting reports of an error with signing up. If you experience
        this, please{"\u00A0"}
        <a href="https://forms.gle/isrtWxjAberRN2BbA">Report a Bug</a>
      </div>
    </span>
  );
};

export default EmergencyBanner;
