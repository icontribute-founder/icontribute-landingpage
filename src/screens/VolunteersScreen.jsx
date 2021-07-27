import React, { useEffect } from "react";
import ReactGA from "react-ga";
import { useMediaQuery } from "react-responsive";
import { MOBILE_SCREEN_SIZE } from "../constants/MediaQueries";

import MainBlock from "../components/volunteers/MainBlock/MainBlock";
import WCYDBubbleContainer from "../components/volunteers/WCYDBubbleContainer/WCYDBubbleContainer";
import ConnectBlock from "../components/volunteers/ConnectBlock/ConnectBlock";
import TestimonialsBlock from "../components/volunteers/TestimonialsBlock/TestimonialsBlock";

const VolunteersScreen = () => {
  const isMobile = useMediaQuery({ maxWidth: MOBILE_SCREEN_SIZE });
  console.log(isMobile);
  useEffect(() => {
    document.title = "iContribute - Volunteers";
    ReactGA.pageview(window.location.hash.substring(1)); // substring excludes the hash "#"
  }, []);

  return (
    <div>
      <MainBlock />
      <WCYDBubbleContainer isMobile={isMobile} />
      <ConnectBlock />
      <TestimonialsBlock />
    </div>
  );
};

export default VolunteersScreen;
