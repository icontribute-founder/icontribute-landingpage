import React, { useState, useEffect } from "react";
import map from "../../images/map.png";
import "../../css/OurTeam.css";

const AcrossGlobeBlock = (props) => {
  return (
    <div className="globe-container">
      <h1>From Across The Globe</h1>
      <h2>
        Our team is located in multiple areas around the world. We have
        collaborated endlessly to bring our app to you.
      </h2>
      <img src={map} />
    </div>
  );
};

export default AcrossGlobeBlock;
