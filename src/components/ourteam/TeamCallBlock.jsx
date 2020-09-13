import React, { useState, useEffect } from "react";
import grid1 from "../../images/photoGrid/grid1.png";
import grid2 from "../../images/photoGrid/grid2.png";
import grid3 from "../../images/photoGrid/grid3.png";
import grid4 from "../../images/photoGrid/grid4.png";
import grid5 from "../../images/photoGrid/grid5.png";
import grid6 from "../../images/photoGrid/grid6.png";
import "../../css/TeamCallBlock.css";

const TeamCallBlock = (props) => {
  return (
    <div className="teamblockcall-container">
      <h1>
        We love what we do, but we’re pretty big on that whole work-life balance
        too.
      </h1>
      <p>Although we were miles apart, we found ways to connect.</p>

      <div className="zoomcall-grid1">
        <img id="photoGrid1" src={grid1} />
        <img id="photoGrid2" src={grid2} />
        <img id="photoGrid3" src={grid3} />
        {/* <a id="photoGrid1" />
        <a id="photoGrid2" />
        <a id="photoGrid3" /> */}
      </div>
      <div className="zoomcall-grid2">
        <img id="photoGrid4" src={grid4} />
        <img id="photoGrid5" src={grid5} />
        <img id="photoGrid6" src={grid6} />
      </div>
    </div>
  );
};

export default TeamCallBlock;
