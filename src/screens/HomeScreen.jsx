import React from "react";
import MainBlock from "../components/MainBlock";
import DemoBlock from "../components/DemoBlock";
import PhotoBlockContainer from "../components/PhotoBlockContainer";
import PartnerBlock from "../components/PartnersBlock";

const HomeScreen = (props) => {
  return (
    <div>
      <MainBlock></MainBlock>
      <PhotoBlockContainer></PhotoBlockContainer>
      <DemoBlock></DemoBlock>
      <PartnerBlock></PartnerBlock>
    </div>
  );
};

export default HomeScreen;
