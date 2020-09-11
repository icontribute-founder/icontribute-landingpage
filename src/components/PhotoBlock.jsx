import React, { useState, useEffect } from "react";
import heart from "../images/heart colour 1.png";
import "../css/PhotoBlock.css";

const PhotoBlock = (props) => {
  return (
    <div className="photo-block-box">
      <div className="photo-block">
        <img className="photo-block-photo" src={props.photo} />
        <div className="photo-infoblock">
          <h1 className="photo-title">
            {props.title}
            <img className="photo-icon" src={heart} />
          </h1>
          <h2 className="photo-location">{props.location}</h2>
          <h3 className="photo-date">
            {props.date}
            <h3 className="photo-distance">{props.distance}</h3>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default PhotoBlock;
