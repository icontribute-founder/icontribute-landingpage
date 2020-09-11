import React from "react";
import main from "../images/Component 1.png";
import apple from "../images/1 25.png";
import google from "../images/1 26.png";
import "../css/MainBlock.css";

const MainBlock = (props) => {
  return (
    <div className="main-container">
      <div className="main-info">
        <h1>Volunteering just got easier</h1>
        <p>
          We are making it easy to find, manage, and connect to volunteer
          opportunities for both students and organizations.
        </p>
        <a className="appstore">
          <img src={apple} />
        </a>
        <a className="appstore">
          <img src={google} />
        </a>
      </div>
      <img className="iphone_png" src={main} />
    </div>
  );
};

export default MainBlock;
