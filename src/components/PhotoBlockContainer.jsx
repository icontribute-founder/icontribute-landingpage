import React, { useState } from "react";
import PhotoBlock from "./PhotoBlock";
import test from "../images/anna-earl-cTtE2FlIRoU-unsplash 1.png";
import test2 from "../images/cristi-tohatan-XIBIC21QeZQ-unsplash 1.png";

const PhotoBlockContainer = (props) => {
  const [photo, setPhoto] = useState([
    {
      photo: test,
      title: "test",
      location: "test location",
      date: "test date",
      distance: "100",
    },
    {
      photo: test2,
      title: "test",
      location: "test location",
      date: "test date",
      distance: "100",
    },
    {
      photo: test,
      title: "test",
      location: "test location",
      date: "test date",
      distance: "100",
    },
  ]);
  return (
    <div className="photoblock-container">
      <div>
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
