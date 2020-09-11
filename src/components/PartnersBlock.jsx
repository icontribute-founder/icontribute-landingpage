import React, { useState, useEffect } from "react";
import img1 from "../images/image 10.png";
import img2 from "../images/image 5.png";
import img3 from "../images/image 9.png";
import img4 from "../images/image 12.png";
import "../css/DemoBlock.css";

const PartnersBlock = (props) => {
  return (
    <div className="partners-container">
      <h2 className="partners-header">Partners</h2>
      <p className="partners-disc">Find what your passionate about</p>
      <div className="placeholder">
        <img src={img1} />
        <img src={img2} />
        <img src={img3} />
        <img src={img4} />
      </div>
      <a className="hollow-yellow">LEARN MORE</a>
    </div>
  );
};

export default PartnersBlock;
