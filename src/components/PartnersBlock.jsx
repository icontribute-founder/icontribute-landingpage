import React, { useState, useEffect } from "react";
import sponsor1 from "../images/sponsors/able2.png";
import sponsor2 from "../images/sponsors/bethany_hope_center.png";
import sponsor3 from "../images/sponsors/bridges_of_canada.png";
import sponsor4 from "../images/sponsors/calvary_baptist_church.png";
import sponsor5 from "../images/sponsors/coaoc.png";
import sponsor6 from "../images/sponsors/collaborative_justice_program.png";
import sponsor7 from "../images/sponsors/max.png";
import sponsor8 from "../images/sponsors/ottawa_community_immigrant_services_organization.png";
import sponsor9 from "../images/sponsors/OttawaDragonBoatFestival.jpg";
import sponsor10 from "../images/sponsors/wocrc.png";
import sponsor11 from "../images/sponsors/ottawafoodbank.png"

import "../css/DemoBlock.css";

const PartnersBlock = (props) => {
  return (
    <div className="partners-container">
      <h2 className="partners-header">Partners</h2>
      <p className="partners-disc">
        Organizations we are currently working with.
      </p>
      <div className="placeholder">
        <img id="sp2" src={sponsor2} />
        {/* <img id="sp7" src={sponsor11} /> */}
        <img id="sp3" src={sponsor9} />
        <img id="sp4" src={sponsor5} />

        <div className="small-logos">
          <img id="sp1" src={sponsor1} />
          <img id="sp5" src={sponsor6} />
          <img id="sp6" src={sponsor7} />
          <img id="sp7" src={sponsor8} />
        </div>
      </div>
      <a className="hollow-yellow">LEARN MORE</a>
    </div>
  );
};

export default PartnersBlock;
