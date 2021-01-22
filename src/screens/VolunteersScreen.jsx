import React from 'react';
import MainBlock from '../components/volunteers/MainBlock/MainBlock';
import WCYDBubbleContainer from '../components/volunteers/WCYDBubbleContainer/WCYDBubbleContainer';
import ConnectBlock from '../components/volunteers/ConnectBlock/ConnectBlock';
import TestimonialsBlock from '../components/volunteers/TestimonialsBlock/TestimonialsBlock';

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
