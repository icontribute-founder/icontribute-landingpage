import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

import MainBlock from '../components/nonprofits/MainBlock/MainBlock';
import HowItWorksContainer from '../components/nonprofits/HowItWorksContainer/HowItWorksContainer';
import '../css/NonProfitScreen.css';

const NonProfitScreen = () => {
  useEffect(() => {
    document.title = 'iContribute - Nonprofits';
    ReactGA.pageview(window.location.hash.substring(1)); // substring excludes the hash "#"
  }, []);

  return (
    <div className="nonprofit-page">
      <MainBlock />
      <HowItWorksContainer />
    </div>
  );
};

export default NonProfitScreen;
