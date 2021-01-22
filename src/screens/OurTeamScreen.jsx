import React from 'react';
import MainBlock from '../components/ourteam/MainBlock/MainBlock';
import AcrossGlobeBlock from '../components/ourteam/AcrossGlobeBlock/AcrossGlobeBlock';
import TeamBlockContainer from '../components/ourteam/TeamBlockContainer/TeamBlockContainer';
import TeamCallBlock from '../components/ourteam/TeamCallBlock/TeamCallBlock';

const OurTeamScreen = () => {
  return (
    <div className="ourteam-page">
      <MainBlock />
      <AcrossGlobeBlock />
      <TeamBlockContainer />
      <TeamCallBlock />
    </div>
  );
};

export default OurTeamScreen;
