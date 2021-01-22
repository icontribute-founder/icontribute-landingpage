import React from 'react';
import MainBlock from '../components/home/MainBlock/MainBlock';
import DemoBlock from '../components/home/DemoBlock/DemoBlock';
import PhotoBlockContainer from '../components/home/PhotoBlockContainer/PhotoBlockContainer';
import PartnerBlock from '../components/home/PartnerBlock/PartnersBlock';
import FAQBlock from '../components/home/FAQBlock/FAQBlock';

const HomeScreen = () => {
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
