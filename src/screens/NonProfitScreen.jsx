import React from "react";
import MainBlock from "../components/nonprofits/MainBlock";
import "../css/NonProfits.css";
import HowItWorksContainer from "../components/nonprofits/HowItWorksContainer";

const NonProfitScreen = (props) => {
  return (
    <div className="nonprofit-page">
      <MainBlock></MainBlock>
      <HowItWorksContainer></HowItWorksContainer>
    </div>
  );
};

export default NonProfitScreen;
