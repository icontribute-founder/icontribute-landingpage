import React from "react";
import TeamBlockContainer from "../components/ourteam/TeamBlockContainer";
import MainBlock from "../components/ourteam/MainBlock";
import AcrossGloveBlock from "../components/ourteam/AcrossGlobeBlock";

const OurTeamScreen = (props) => {
  return (
    <div className="ourteam-page">
      <MainBlock></MainBlock>
      <AcrossGloveBlock></AcrossGloveBlock>
      <TeamBlockContainer></TeamBlockContainer>
    </div>
  );
};

export default OurTeamScreen;
