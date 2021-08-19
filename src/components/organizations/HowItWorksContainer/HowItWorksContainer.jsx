import React from "react";
import iphone1 from "../../../images/iphone/iphone1.png";
import iphone2 from "../../../images/iphone/iphone2.png";
import notification from "../../../images/Frame 213.png";

import apple_en from "../../../images/apple_en.png";
import google_en from "../../../images/google_en.png";
import apple_fr from "../../../images/apple_fr.png";
import google_fr from "../../../images/google_fr.png";

import SmallPhotoBlock from "../SmallPhotoBlock/SmallPhotoBlock";
import test2 from "../../../images/cristi-tohatan-XIBIC21QeZQ-unsplash 1.png";
import test3 from "../../../images/Frame 205.png";
import "./HowItWorksContainer.css";

import { useMediaQuery } from "react-responsive";
import { MOBILE_SCREEN_SIZE } from "../../../constants/MediaQueries";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const HowItWorksContainer = () => {
  const { t } = useTranslation();
  const isFrench = i18next.language === "FR" ? true : false;
  const photos = [
    {
      photo: test2,
      title: `${t("Fundraiser")}`,
      location: `${t("Ottawa Community")}`,
      date: `${t("Sat Jun 16, 2020")}`,
      distance: `${t("10.1 km")}`,
    },
    {
      photo: test3,
      title: `${t("Student Volunteer")}`,
      location: `${t("Ottawa Community")}`,
      date: `${t("Sat Jun 17, 2020")}`,
      distance: `${t("10.1 km")}`,
    },
  ];

  const isMobile = useMediaQuery({ maxWidth: MOBILE_SCREEN_SIZE });
  return (
    <div data-aos="fade-up" className="howitworks-container">
      <div className="howitworks-header">
        <h1>{t("HOW IT WORKS")}</h1>
        <h2>{t("Connect to 1000s of students in the community")}</h2>
      </div>
      <div className="step-left">
        <h1>{t("STEP")} 1</h1>
        <div className="yellow-dot" />
      </div>
      <div className="howitworks-step-left">
        <div className="howitworks-step-text-left">
          <h1>{t("Download the app")}</h1>
          <h2>
            {t(
              "Download iContribute app for your mobile device. It works with iOS and Android."
            )}
          </h2>
          <a
            href="https://apps.apple.com/ca/app/icontribute/id1524895764?ign-mpt=uo%3D4"
            target="_blank"
            rel="noopener noreferrer"
            className="appstore"
          >
            <img
              src={isFrench ? apple_fr : apple_en}
              alt="App Store download"
            />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.icontribute"
            target="_blank"
            rel="noopener noreferrer"
            className="appstore"
          >
            <img
              src={isFrench ? google_fr : google_en}
              alt="Google Play download"
            />
          </a>
        </div>
        <div className="howitworks-iphone">
          <img src={iphone1} alt="Phone home screen" />
        </div>
      </div>
      <div className="step-right">
        <h1>{t("STEP")} 2</h1>
        <div className="yellow-dot" />
      </div>
      <div className="howitworks-step-right">
        <div className="howitworks-iphone">
          <img src={iphone2} alt="Setting up your organization" />
        </div>
        <div className="howitworks-step-text-right">
          <h1>{t("Sign Up as an Organization")}</h1>
          <h2>
            {t(
              "Fill in the required fields to make an account with us. It only takes a few fields."
            )}
          </h2>
        </div>
      </div>
      <div className="step-left">
        <h1>{t("STEP")} 3</h1>
        <div className="yellow-dot" />
      </div>
      <div className="howitworks-step-left">
        <div className="howitworks-step-text-left">
          <h1>{t("Create and Post your Events")}</h1>
          <h2>
            {t(
              "Fill in the details about your event and the time slots you would like volunteers to work."
            )}
          </h2>
        </div>
        {!isMobile && (
          <div className="howitworks-photoblock-container">
            <div className="howitworks-photoblock-wrapper">
              {photos.map((block, blockId) => {
                return (
                  <SmallPhotoBlock
                    key={blockId}
                    photo={block.photo}
                    title={block.title}
                    location={block.location}
                    date={block.date}
                    distance={block.distance}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
      <div className="step-center">
        <div className="yellow-dot" />
        <h1>{t("STEP")} 4</h1>
      </div>
      <div className="step4-wrapper">
        <h1>{t("Confirm Your Volunteers")}</h1>
        <h2>
          {t(
            "Volunteers will apply to your event and all you have to do is confirm if they will be attending via email."
          )}
        </h2>
        <div className="mail-notification">
          <img src={notification} alt="Notification of volunteer application" />
        </div>
      </div>
    </div>
  );
};

export default HowItWorksContainer;
