import React, { useState } from "react";
import "../../css/MainBlock.css";
import PhotoBlock from "../PhotoBlock";
import test from "../../images/photoblock/momkid.png";
import test2 from "../../images/cristi-tohatan-XIBIC21QeZQ-unsplash 1.png";

const MainBlock = (props) => {
  const [photo, setPhoto] = useState({
    photo: test,
    title: "Volunteer",
    location: "Ottawa Community",
    date: "Sun May 16, 2020",
    distance: "10.1 km",
  });
  return (
    <div className="main-container">
      <div className="main-info">
        <h1>Reach a bigger audience</h1>
        <p>
          Your organization can increase its exposure in the Ottawa community by
          connecting with students through our mobile platform. It only takes a
          few steps to get started.
        </p>
      </div>
      <div className="nonprofit-photoblock">
        <PhotoBlock
          photo={photo.photo}
          title={photo.title}
          location={photo.location}
          date={photo.date}
          distance={photo.distance}
        ></PhotoBlock>
      </div>
    </div>
  );
};

export default MainBlock;
