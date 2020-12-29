import React from 'react';
import NavBar from './components/NavBar';
import FooterBlock from './components/FooterBlock';
import './css/Buttons.css';
import './css/PageMargin.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import VolunteersScreen from './screens/VolunteersScreen';
import NonProfitScreen from './screens/NonProfitScreen.jsx';
import OurTeamScreen from './screens/OurTeamScreen';
import GetInTouch from './components/GetInTouchBlock';
import ScrollToTop from './components/ScrollToTop';

const App = (props) => {
  return (
    <Router basename="/">
      <ScrollToTop />
      <div className="site-container">
        <NavBar />
        <div className="site-margin">
          <Switch>
            <Route path="/" exact component={HomeScreen} />
            <Route path="/volunteers" exact component={VolunteersScreen} />
            <Route path="/nonprofit" exact component={NonProfitScreen} />
            <Route path="/ourteam" exact component={OurTeamScreen} />
          </Switch>
        </div>
        <GetInTouch />
        <FooterBlock />
      </div>
    </Router>
  );
};

export default App;
