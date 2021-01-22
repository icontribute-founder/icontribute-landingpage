import React from 'react';
import MainBlock from '../components/nonprofits/MainBlock/MainBlock';
import HowItWorksContainer from '../components/nonprofits/HowItWorksContainer/HowItWorksContainer';
import '../css/NonProfitScreen.css';

const NonProfitScreen = () => {
  return (
    <div className="nonprofit-page">
      <MainBlock />
      <HowItWorksContainer />
    </div>
  );
};

export default NonProfitScreen;
