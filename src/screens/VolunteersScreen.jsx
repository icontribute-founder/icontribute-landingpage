import React from 'react';
import MainBlock from '../components/volunteers/MainBlock';
import WCYDBubbleContainer from '../components/volunteers/WCYDBubbleContainer';
import ConnectBlock from '../components/volunteers/ConnectBlock';
import TestimonialsBlock from '../components/volunteers/TestimonialsBlock';

const VolunteersScreen = () => {
  return (
    <div>
      <MainBlock />
      <WCYDBubbleContainer />
      <ConnectBlock />
      <TestimonialsBlock />
    </div>
  );
};

export default VolunteersScreen;
