import React from "react";
import PhotoBlock from "../../PhotoBlock/PhotoBlock";
import test2 from "../../../images/cristi-tohatan-XIBIC21QeZQ-unsplash 1.png";
import "./PhotoBlockContainer.css";
import { useTranslation } from "react-i18next";

const PhotoBlockContainer = () => {
  const { t } = useTranslation();

  const photos = [
    {
      photo: test2,
      title: `${t("Fundraiser")}`,
      location: `${t("Ottawa Community")}`,
      date: `${t("Sat Jun 12, 2020")}`,
      distance: "10 km",
    },
  ];

  return (
    <div data-aos="fade-up" className="photoblock-container">
      <div className="mainblock-photo">
        {photos.map((photo, blockId) => {
          return (
            <PhotoBlock
              key={blockId}
              photo={photo.photo}
              title={photo.title}
              location={photo.location}
              date={photo.date}
              distance={photo.distance}
            />
          );
        })}
      </div>
      <div className="getstarted">
        <h2 className="photoblock-container-header">
          {t("photoblock-container-header")}
        </h2>
        <a href="#contact-us" className="solid-yellow">
          {t("BookDemo")}
        </a>
      </div>
    </div>
  );
};

export default PhotoBlockContainer;
