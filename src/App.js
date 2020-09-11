import React from "react";
import NavBar from "./components/NavBar";
import FooterBlock from "./components/FooterBlock";
import "./css/Buttons.css";
import "./css/PageMargin.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import VolunteersScreen from "./screens/VolunteersScreen";
import NonProfitScreen from "./screens/NonProfitScreen.jsx";
import OurTeamScreen from "./screens/OurTeamScreen";
import GetInTouch from "./components/GetInTouchBlock";

const App = (props) => {
  return (
    <Router>
      <div className="site-container">
        <NavBar></NavBar>
        <div className="site-margin">
          <Switch>
            <Route path="/" exact component={HomeScreen} />
            <Route path="/volunteers" exact component={VolunteersScreen} />
            <Route path="/nonprofit" exact component={NonProfitScreen} />
            <Route path="/ourteam" exact component={OurTeamScreen} />
          </Switch>
        </div>
        <GetInTouch></GetInTouch>
        <FooterBlock></FooterBlock>
      </div>
    </Router>
  );
};

export default App;
