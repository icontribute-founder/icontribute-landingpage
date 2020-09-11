import React, { useState } from "react";
import PhotoBlock from "../PhotoBlock";
import test from "../../images/anna-earl-cTtE2FlIRoU-unsplash 1.png";
import test2 from "../../images/cristi-tohatan-XIBIC21QeZQ-unsplash 1.png";
import apple from "../../images/1 25.png";
import google from "../../images/1 26.png";
import "../../css/VMainBlock.css";

const MainBlock = (props) => {
  const [photo, setPhoto] = useState([
    {
      photo: test,
      title: "test",
      location: "test location",
      date: "test date",
      distance: "100",
    },
    // {
    //   photo: test2,
    //   title: "test",
    //   location: "test location",
    //   date: "test date",
    //   distance: "100",
    // },
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
      <div className="photoblock-container-inline">
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
      </div>
    </div>
  );
};

export default MainBlock;
