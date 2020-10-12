import React, { useState } from "react";
import PhotoBlock from "./PhotoBlock";
import test from "../images/anna-earl-cTtE2FlIRoU-unsplash 1.png";
import test2 from "../images/cristi-tohatan-XIBIC21QeZQ-unsplash 1.png";

const PhotoBlockContainer = (props) => {
  const [photo, setPhoto] = useState([
    {
      photo: test2,
      title: "Fundraiser",
      location: "Ottawa Community",
      date: "Sat Jun 12, 2020",
      distance: "10 km",
    },
  ]);
  return (
    <div data-aos="fade-up" className="photoblock-container">
      <div className="mainblock-photo">
        {photo.map((block, blockId) => {
          return (
            <PhotoBlock
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
      <div className="getstarted">
        <h2>Make a meaningful contribution to your community</h2>
        <a className="solid-yellow">GET STARTED</a>
      </div>
    </div>
  );
};

export default PhotoBlockContainer;
