import React from "react";
import TeamBlockContainer from "../components/ourteam/TeamBlockContainer";
import MainBlock from "../components/ourteam/MainBlock";
import AcrossGloveBlock from "../components/ourteam/AcrossGlobeBlock";
import TeamCallBlock from "../components/ourteam/TeamCallBlock";

const OurTeamScreen = (props) => {
  return (
    <div className="ourteam-page">
      <MainBlock></MainBlock>
      <AcrossGloveBlock></AcrossGloveBlock>
      <TeamBlockContainer></TeamBlockContainer>
      <TeamCallBlock></TeamCallBlock>
    </div>
  );
};

export default OurTeamScreen;
