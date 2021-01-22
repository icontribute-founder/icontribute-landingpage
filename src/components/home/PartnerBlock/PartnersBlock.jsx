import React from 'react';
import sponsor1 from '../../../images/sponsors/able2.png';
import sponsor2 from '../../../images/sponsors/bethany_hope_center.png';
import sponsor5 from '../../../images/sponsors/coaoc.png';
import sponsor6 from '../../../images/sponsors/collaborative_justice_program.png';
import sponsor7 from '../../../images/sponsors/max.png';
import sponsor8 from '../../../images/sponsors/ottawa_community_immigrant_services_organization.png';
import oDragonBoat from '../../../images/sponsors/OttawaDragonBoatFestival.jpg';
import practicum from '../../../images/sponsors/practicum.png';
import enactus from '../../../images/sponsors/enactus.png';
import foodbank from '../../../images/sponsors/ottawafoodbank.png';

import './PartnersBlock.css';

const PartnersBlock = () => {
  return (
    <div className="partners-container">
      <h2 className="partners-header">Partners</h2>
      <p className="partners-disc">Organizations we are currently working with.</p>
      <div data-aos="fade-up" className="placeholder">
        <img id="sp2" alt="sponsor2" src={sponsor2} />
        <img id="sp4" alt="sponsor5" src={sponsor5} />
        <img id="sp8" alt="foodbank sponsor" src={foodbank} />
        <img id="sp9" alt="dragon boat 2" src={oDragonBoat} />

        <div data-aos="fade-up" className="small-logos">
          <img id="sp1" alt="sponsor1" src={sponsor1} />
          <img id="sp5" alt="sponsor6" src={sponsor6} />
          <img id="sp6" alt="sponsor7" src={sponsor7} />
          <img id="sp7" alt="sponsor8" src={sponsor8} />
        </div>
      </div>
      <h2 className="fade-up partners-header">Backed By</h2>
      <div data-aos="fade-up" className="small-backed-logos">
        <img id="sp10" alt="Enactus sponsor" src={enactus} />
        <img id="sp10" alt="Practicum sponsor" src={practicum} />
      </div>
      {/* <a className="hollow-yellow">LEARN MORE</a> */}
    </div>
  );
};

export default PartnersBlock;
