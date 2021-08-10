import React, { useEffect, useState } from "react";

import fb from "../../images/sticky-socials/facebook.png";
import insta from "../../images/sticky-socials/instagram.png";
import linkedin from "../../images/sticky-socials/linkedin.png";
import tiktok from "../../images/sticky-socials/tiktok.png";
import fb_onhover from "../../images/sticky-socials/facebook_onhover.png";
import insta_onhover from "../../images/sticky-socials/instagram_onhover.png";
import linkedin_onhover from "../../images/sticky-socials/linkedin_onhover.png";
import tiktok_onhover from "../../images/sticky-socials/tiktok_onhover.png";

import "./StickySocials.css";

const StickySocials = () => {
  const [hoverFb, setHoverFb] = useState(false);
  const [hoverInsta, setHoverInsta] = useState(false);
  const [hoverLinkedin, setHoverLinkedin] = useState(false);
  const [hoverTiktok, setHoverTiktok] = useState(false);
  useEffect(() => {
    const navSlide = () => {
      const socialIcons = document.querySelector(".sticky-socials");
      setTimeout(() => {
        socialIcons.style.animation = "appearFromLeft 1s ease forwards";
      }, 100);
    };
    navSlide();
  }, []);
  return (
    <div className="sticky-socials">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.facebook.com/icontribute.community"
      >
        <img
          onMouseEnter={() => {
            setHoverFb(true);
          }}
          onMouseLeave={() => {
            setHoverFb(false);
          }}
          alt=""
          src={hoverFb ? fb_onhover : fb}
        />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/company/icontribute/"
      >
        <img
          onMouseEnter={() => {
            setHoverLinkedin(true);
          }}
          onMouseLeave={() => {
            setHoverLinkedin(false);
          }}
          alt=""
          src={hoverLinkedin ? linkedin_onhover : linkedin}
        />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.instagram.com/icontribute.community/"
      >
        <img
          onMouseEnter={() => {
            setHoverInsta(true);
          }}
          onMouseLeave={() => {
            setHoverInsta(false);
          }}
          alt=""
          src={hoverInsta ? insta_onhover : insta}
        />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.tiktok.com/@icontribute"
      >
        <img
          onMouseEnter={() => {
            setHoverTiktok(true);
          }}
          onMouseLeave={() => {
            setHoverTiktok(false);
          }}
          alt=""
          src={hoverTiktok ? tiktok_onhover : tiktok}
        />
      </a>
    </div>
  );
};

export default StickySocials;
