import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

import NavBar from './components/Navbar/NavBar';
import FooterBlock from './components/FooterBlock/FooterBlock';
import './css/Buttons.css';
import './css/PageMargin.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import VolunteersScreen from './screens/VolunteersScreen';
import NonProfitScreen from './screens/NonProfitScreen.jsx';
import OurTeamScreen from './screens/OurTeamScreen';
import GetInTouchBlock from './components/GetInTouchBlock/GetInTouchBlock';
import ScrollToTop from './components/ScrollToTop';

import { useMediaQuery } from 'react-responsive';
import { MOBILE_SCREEN_SIZE } from './constants/MediaQueries';

const App = () => {
  const isMobile = useMediaQuery({ maxWidth: MOBILE_SCREEN_SIZE });

  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID);
  }, []);

  return (
    <Router basename="/">
      <ScrollToTop />
      <div className="site-container" style={{ width: isMobile ? '' : '1300px' }}>
        <NavBar />
        <div className="site-margin">
          <Switch>
            <Route path="/" exact component={HomeScreen} />
            <Route path="/volunteers" exact component={VolunteersScreen} />
            <Route path="/nonprofit" exact component={NonProfitScreen} />
            <Route path="/ourteam" exact component={OurTeamScreen} />
          </Switch>
        </div>
        <GetInTouchBlock />
        <FooterBlock />
      </div>
    </Router>
  );
};

export default App;
