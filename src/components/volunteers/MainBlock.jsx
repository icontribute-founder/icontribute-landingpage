import React, { useState } from "react";
import PhotoBlock from "../PhotoBlock";
import test from "../../images/anna-earl-cTtE2FlIRoU-unsplash 1.png";
import test2 from "../../images/cristi-tohatan-XIBIC21QeZQ-unsplash 1.png";
import apple from "../../images/1 25.png";
import google from "../../images/1 26.png";
import test4 from "../../images/photoblock/momkid.png";
import "../../css/VMainBlock.css";

const MainBlock = (props) => {
  const [photo, setPhoto] = useState([
    {
      photo: test4,
      title: "Student Fundraiser",
      location: "Ottawa Community",
      date: "Sun Jun 16, 2021",
      distance: "15 km",
    },
    {
      photo: test4,
      title: "Daycare Helper",
      location: "Ottawa Daycare Center",
      date: "Every Sunday in 2021",
      distance: "8 km",
    },
    {
      photo: test4,
      title: "test",
      location: "test location",
      date: "test date",
      distance: "100",
    },
    {
      photo: test4,
      title: "test",
      location: "test location",
      date: "test date",
      distance: "100",
    },
  ]);
  return (
    <div className="main-container-v">
      <div className="main-info">
        <h1>Find volunteer events effortlessly</h1>
        <p>
          It is easy to get started with us here. After creating an account with
          us, you will be able to browse from a variety of volunteer events.
        </p>
        <a className="appstore">
          <img src={apple} />
        </a>
        <a className="appstore">
          <img src={google} />
        </a>
      </div>
      <div className="test">
        <div className="photoblock-scroll-wrapper">
          <div className="photoblock-scroll">
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
        </div>
      </div>
    </div>
  );
};

export default MainBlock;
