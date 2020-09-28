import React, { useState, useEffect } from "react";
import chatBubble from "../images/bubbles.png";
import "../css/GetInTouchBlock.css";

const GetInTouchBlock = (props) => {
  return (
    <div className="getintouch-container">
      <img src={chatBubble}></img>
      <h1>GET IN TOUCH WITH US</h1>
      <h2>Feel Free to reach out to us. We are happy to help</h2>
      <a href="mailto:icontribute.founder@gmail.com" className="hollow-yellow">
        CONTACT
      </a>
    </div>
  );
};

export default GetInTouchBlock;
