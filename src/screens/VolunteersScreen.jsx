import React from "react";
import MainBlock from "../components/volunteers/MainBlock";
import WCYDBubbleContainer from "../components/volunteers/WCYDBubbleContainer";
import ConnectBlock from "../components/volunteers/ConnectBlock";

const VolunteersScreen = (props) => {
  return (
    <div>
      <MainBlock></MainBlock>
      <WCYDBubbleContainer></WCYDBubbleContainer>
      <ConnectBlock></ConnectBlock>
    </div>
  );
};

export default VolunteersScreen;
