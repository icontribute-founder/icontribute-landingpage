import React from 'react';
import TeamBlockContainer from '../components/ourteam/TeamBlockContainer';
import MainBlock from '../components/ourteam/MainBlock';
import AcrossGlobeBlock from '../components/ourteam/AcrossGlobeBlock';
import TeamCallBlock from '../components/ourteam/TeamCallBlock';

const OurTeamScreen = (props) => {
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
