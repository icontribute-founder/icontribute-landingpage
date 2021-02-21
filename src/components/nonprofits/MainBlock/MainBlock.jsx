import React from 'react';
import './MainBlock.css';
import img from '../../../images/tutor card.png';

const MainBlock = () => {
  return (
    <div data-aos="fade-up" className="Nonprofits-MainBlock">
      <div className="Nonprofits-MainBlock-Info">
        <h1 className="Nonprofits-MainBlock-Header">Reach a bigger audience.</h1>
        <p className="Nonprofits-MainBlock-Details">
          Your organization can increase its exposure in the Ottawa community by connecting with students through our
          mobile platform. It only takes a few steps to get started.
        </p>
      </div>
      <img className="Nonprofits-MainBlock-Photo" src={img} alt="volunteer tutor" />
    </div>
  );
};

export default MainBlock;
