import React, { useState, useEffect } from "react";
import map from "../../images/map.png";
import florida from "../../images/map/florida.png";
import "../../css/OurTeam.css";
import ReactTooltip from 'react-tooltip'
import james from "../../images/team/james.jpg";
import haohao from "../../images/team/haohao.png";
import umai from "../../images/team/umai.png";
import vedashree from "../../images/team/vedashree.png";
import carmen from "../../images/team/carmen.png";
import lydia from "../../images/team/lydia.png";
import alex from "../../images/team/alex.png";
import kirti from "../../images/team/kirti.png";
import umang from "../../images/team/umang.png";
import samuel from "../../images/team/samuel.png";
import ella from "../../images/team/ella.png";
import alicia from "../../images/team/alicia.png";
import tony from "../../images/team/tony.png";

const AcrossGlobeBlock = (props) => {
  return (
    <div data-aos="fade-up" className="globe-container">
      <h1>From Across The Globe</h1>
      <h2>
        Our team is located in multiple areas around the world. We have
        collaborated endlessly to bring our app to you.
      </h2>
      <div style={{ position: "relative" }}>
        <img src={map} />
        {/* <img data-tip="React-tooltip" src={florida} className="florida" />
        <ReactTooltip place="right" type="dark">
          <div style={{ width: "250px", display: "flex", flexDirection: "row" }}>
            <img src={kirti} style={{ borderRadius: 15, maxWidth: "30%", height: "auto" }} />
            <div>
              <p><strong>Kirti Desai</strong> <br />Backend Developer<br /></p>
              <p>University of Florida, Computer Science</p>
              <p></p>
            </div>
          </div>
        </ReactTooltip> */}
      </div>
    </div>
  );
};

export default AcrossGlobeBlock;
