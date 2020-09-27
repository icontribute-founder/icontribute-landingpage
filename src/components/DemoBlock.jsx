import React, { useState, useEffect } from "react";
import iPhone from "../images/iphone/Component 1.png";
import placeholder from "../images/heart colour 1.png";
import pencil from "../images/icons/pencil.png";
import phone from "../images/icons/phoneIcon.png";
import mouse from "../images/icons/mouse.png";
import "../css/DemoBlock.css";

const DemoBlock = (props) => {
  return (
    <div className="demoblock-container">
      <h2 className="demoblock-header">One platform.</h2>
      <h2 className="demoblock-header">For both students and organizations</h2>
      <p className="demoblock-disc">
        We connect people who are looking for local volunteer opportunities to
        nonprofits who are actively recruiting
      </p>
      <img src={iPhone}></img>
      <h2>Simple steps to get you up and running</h2>
      <p className="demoblock-disc">This is how it works</p>
      <div className="demostep-container">
        <div className="demostep">
          <img src={pencil}></img>
          <h3 className="demostep-header">SIGN UP</h3>
          <p className="demostep-disc">
            Give us a few details about yourself or your organization.
          </p>
        </div>
        <div id="demostep-mouse" className="demostep">
          <img id="mouse-icon" src={mouse}></img>
          <h3 id="demostep-header-mouse" className="demostep-header">
            EXPLORE
          </h3>
          <p className="demostep-disc">
            Volunteers browse and apply to events created by organizations.
          </p>
        </div>
        <div className="demostep">
          <img src={phone}></img>
          <h3 className="demostep-header">CONNECT</h3>
          <p className="demostep-disc">
            We connect the both of you on your behalf.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DemoBlock;
