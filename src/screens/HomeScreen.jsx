import React from 'react';
import MainBlock from '../components/MainBlock';
import DemoBlock from '../components/DemoBlock';
import PhotoBlockContainer from '../components/PhotoBlockContainer';
import PartnerBlock from '../components/PartnersBlock';
import FAQBlock from '../components/FAQBlock';

const HomeScreen = (props) => {
  return (
    <div>
      <MainBlock />
      <PhotoBlockContainer />
      <DemoBlock />
      <PartnerBlock />
      <FAQBlock />
    </div>
  );
};

export default HomeScreen;
