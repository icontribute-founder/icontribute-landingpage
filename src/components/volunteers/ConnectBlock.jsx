import React, { useState, useEffect } from "react";
import phone from "../../images/icons/Phone.png";
import email from "../../images/email.png";
import "../../css/Connect.css";

const ConnectBlock = (props) => {
  return (
    <div data-aos="fade-up" className="connect-container">
      <div className="connect-wrapper">
        <div className="connect-header">
          <h1>Connect with organizations at the tips of your fingers</h1>
          <p>
            You apply to the event, and we immediately draft an email for you to
            reach out to the organization.
          </p>
        </div>
        <img id="connect-icon" src={phone} />
      </div>
      <img id="connect-email" src={email} />
    </div>
  );
};

export default ConnectBlock;
