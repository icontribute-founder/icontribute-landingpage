import React, { useState, useEffect } from "react";
import apple from "../images/1 25.png";
import google from "../images/1 26.png";
import "../css/FooterBlock.css";
import privacy from "../terms/Privacy Policy Good Draft.pdf";

const FooterBlock = (props) => {
  return (
    <div>
      <div className="footer-container">
        <div className="footer-logo">
          <h1 className="footer-header">
            iContribute <h2>We rise by lifting others</h2>
          </h1>
          <div className="footer-appstore-container">
            <a
              href="https://apps.apple.com/ca/app/icontribute/id1524895764?ign-mpt=uo%3D4"
              target="_blank"
              className="footer-appstore"
            >
              <img src={apple} />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.icontribute"
              className="footer-appstore"
              target="_blank"
            >
              <img src={google} />
            </a>
          </div>
        </div>

        <div className="footer-list-container">
          {" "}
          <ul className="footer-list">
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="/volunteers">VOLUNTEERS</a>
            </li>
            <li>
              <a href="/nonprofit">NONPROFITS</a>
            </li>
            <li>
              <a href="mailto:icontribute.founder@gmail.com">CONTACT US</a>
            </li>
          </ul>
          <ul className="footer-list2">
            <li>
              <a href="/ourteam">OUR TEAM</a>
            </li>
            <li>
              <a href={privacy} download>
                TERMS & CONDITIONS
              </a>
            </li>
            <li>
              <a href={privacy} download>
                PRIVACY POLICY
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/icontribute/"
                target="_blank"
              >
                FOLLOW US
              </a>
            </li>
          </ul>
        </div>
      </div>
      <footer>© 2020 iContribute. All rights reserved.</footer>
    </div>
  );
};

export default FooterBlock;
