import React, { useEffect } from "react";

import fb from "../../images/sticky-socials/facebook.png";
import insta from "../../images/sticky-socials/instagram.png";
import linkedin from "../../images/sticky-socials/linkedin.png";
import tiktok from "../../images/sticky-socials/tiktok.png";

import "./StickySocials.css";

const StickySocials = () => {
  const socialbar = document.querySelector(".sticky-socials");
  useEffect(() => {
    window.addEventListener("wheel", (e) => {
      console.log(e.deltaY > 0);
    });
  }, []);

  return (
    <div className="sticky-socials">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.facebook.com/icontribute.community"
      >
        <img alt="" src={fb} />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/company/icontribute/"
      >
        <img alt="" src={linkedin} />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.instagram.com/icontribute.community/"
      >
        <img alt="" src={insta} />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.tiktok.com/@icontribute"
      >
        <img alt="" src={tiktok} />
      </a>
    </div>
  );
};

export default StickySocials;
