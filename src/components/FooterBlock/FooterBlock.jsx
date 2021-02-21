import React from 'react';
import { Link } from 'react-router-dom';
import apple from '../../images/1 25.png';
import google from '../../images/1 26.png';
import linkedin from '../../images/icons/linkedin-brands.svg';
import tiktok from '../../images/icons/tiktok-brands.svg';
import instagram from '../../images/icons/instagram-brands.svg';
import privacy from '../../terms/Privacy Policy Good Draft.pdf';
import './FooterBlock.css';

import { useMediaQuery } from 'react-responsive';
import { MOBILE_SCREEN_SIZE } from '../../constants/MediaQueries';

const FooterBlock = () => {
  const isMobile = useMediaQuery({ maxWidth: MOBILE_SCREEN_SIZE });

  if (isMobile) {
    return (
      <div className="FooterBlock">
        <div className="FooterBlock-Logo">
          <h1 className="FooterBlock-Logo-Company">iContribute</h1>
          <h2 className="FooterBlock-Logo-Slogan">We rise by lifting others</h2>
        </div>
        <div className="FooterBlock-Links">
          <ul className="FooterBlock-Links-List">
            <li>
              <a href="mailto:icontribute.founder@gmail.com">CONTACT US</a>
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
          </ul>
        </div>
        <div className="FooterBlock-SocialMedia">
          <a
            href="https://www.linkedin.com/company/icontribute/"
            target="_blank"
            rel="noopener noreferrer"
            className="FooterBlock-SocialLink"
          >
            <img src={linkedin} alt="linkedin" className="FooterBlock-SocialIcon" />
          </a>
          <a
            href="https://www.tiktok.com/@icontribute"
            target="_blank"
            rel="noopener noreferrer"
            className="FooterBlock-SocialLink"
          >
            <img src={tiktok} alt="tiktok" className="FooterBlock-SocialIcon" />
          </a>
          <a
            href="https://www.instagram.com/icontribute.community/"
            target="_blank"
            rel="noopener noreferrer"
            className="FooterBlock-SocialLink"
          >
            <img src={instagram} alt="instagram" className="FooterBlock-SocialIcon" />
          </a>
        </div>
        <div className="FooterBlock-AppStores">
          <a
            href="https://apps.apple.com/ca/app/icontribute/id1524895764?ign-mpt=uo%3D4"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-appstore"
          >
            <img src={apple} alt="App Store download" />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.icontribute"
            className="footer-appstore"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={google} alt="Google Play download" />
          </a>
        </div>
        <footer>© {new Date().getFullYear().toString()} iContribute. All rights reserved.</footer>
      </div>
    );
  }

  return (
    <div className="FooterBlock">
      <div className="footer-container">
        <div className="footer-logo">
          <h1 className="footer-header">
            iContribute <h2>We rise by lifting others</h2>
          </h1>
          <div className="footer-appstore-container">
            <a
              href="https://apps.apple.com/ca/app/icontribute/id1524895764?ign-mpt=uo%3D4"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-appstore"
            >
              <img src={apple} alt="App Store download" />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.icontribute"
              className="footer-appstore"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={google} alt="Google Play download" />
            </a>
          </div>
        </div>

        <div className="footer-list-container">
          {' '}
          <ul className="footer-list">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/volunteers">VOLUNTEERS</Link>
            </li>
            <li>
              <Link to="/nonprofit">NONPROFITS</Link>
            </li>
            <li>
              <a href="mailto:icontribute.founder@gmail.com">CONTACT US</a>
            </li>
          </ul>
          <ul className="footer-list2">
            <li>
              <Link to="/ourteam">OUR TEAM</Link>
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
              <a href="https://www.linkedin.com/company/icontribute/" target="_blank" rel="noopener noreferrer">
                FOLLOW US
              </a>
            </li>
          </ul>
        </div>
      </div>
      <footer>© {new Date().getFullYear().toString()} iContribute. All rights reserved.</footer>
    </div>
  );
};

export default FooterBlock;
