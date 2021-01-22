import React from 'react';
import iPhone from '../../../images/iphone/Component 1.png';
import pencil from '../../../images/icons/pencil.png';
import phone from '../../../images/icons/phoneIcon.png';
import mouse from '../../../images/icons/mouse.png';
import gif from '../../../images/sponsors/iContributeGif.gif';
import blueFiller from '../../../images/iphone/Screen Shot 2020-09-28 at 8.55.57 AM.png';
import './DemoBlock.css';

const DemoBlock = () => {
  return (
    <div data-aos="fade-up" className="demoblock-container">
      <h2 className="demoblock-header">One platform.</h2>
      <h2 className="demoblock-header">For both students and organizations</h2>
      <p className="demoblock-disc">
        We connect people who are looking for local volunteer opportunities to nonprofits who are actively recruiting
      </p>
      <img className="icontrib-phone" src={iPhone} alt="phone" />
      <img className="icontrib-gif" src={gif} alt="icontribute logo" />
      <img className="icontrib-filler" src={blueFiller} alt="background" />
      <div data-aos="fade-up">
        <h2>Simple steps to get you up and running</h2>
        <p className="demoblock-disc">This is how it works</p>
        <div className="demostep-container">
          <div className="demostep">
            <img src={pencil} alt="pencil" />
            <h3 className="demostep-header">SIGN UP</h3>
            <p className="demostep-disc">Give us a few details about yourself or your organization.</p>
          </div>
          <div id="demostep-mouse" className="demostep">
            <img id="mouse-icon" src={mouse} alt="mouse" />
            <h3 id="demostep-header-mouse" className="demostep-header">
              EXPLORE
            </h3>
            <p className="demostep-disc">Volunteers browse and apply to events created by organizations.</p>
          </div>
          <div className="demostep">
            <img src={phone} alt="phone" />
            <h3 className="demostep-header">CONNECT</h3>
            <p className="demostep-disc">We connect the both of you on your behalf. </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoBlock;
