import React from "react";

import NavBar from "./components/Navbar/NavBar";
import FooterBlock from "./components/FooterBlock/FooterBlock";
import "./css/Buttons.css";
import "./css/PageMargin.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import VolunteersScreen from "./screens/VolunteersScreen";
import OrganizationScreen from "./screens/OrganizationScreen";
import PrivacyPolicyScreen from "./screens/PrivacyPolicyScreen";
import OurTeamScreen from "./screens/OurTeamScreen";
import ScrollToTop from "./components/ScrollToTop";
import LangSelector from "./components/Navbar/LangSelector";
import EmergencyBanner from "./components/Navbar/EmergencyBanner";
import i18n from "i18next";

import { useMediaQuery } from "react-responsive";
import { MOBILE_SCREEN_SIZE } from "./constants/MediaQueries";
import StickySocials from "./components/StickySocials/StickySocials";
import ContactUs from "./components/ContactUs/ContactUs";

const App = () => {
  const isMobile = useMediaQuery({ maxWidth: MOBILE_SCREEN_SIZE });
  i18n.changeLanguage("EN");

  let showEmergencyBanner = false;

  return (
    <Router basename="/">
      <ScrollToTop />
      {showEmergencyBanner ? (
        !isMobile ? (
          <EmergencyBanner isMobile={false} />
        ) : (
          ""
        )
      ) : (
        ""
      )}
      <div
        className="site-container"
        style={{ width: isMobile ? "" : "1300px" }}
      >
        {!isMobile ? <LangSelector /> : ""}
        <NavBar />
        <StickySocials />
        <div className="site-margin">
          {showEmergencyBanner ? (
            isMobile ? (
              <EmergencyBanner isMobile={false} />
            ) : (
              ""
            )
          ) : (
            ""
          )}
          <Switch>
            <Route path="/" exact component={HomeScreen} />
            <Route path="/volunteers" exact component={VolunteersScreen} />
            <Route path="/organizations" exact component={OrganizationScreen} />
            <Route path="/our-team" exact component={OurTeamScreen} />
            <Route path="/privacy" exact component={PrivacyPolicyScreen} />
            {/* <Route path="/TOS" exact component={PrivacyPolicyScreen} /> */}
          </Switch>
        </div>
        {/*<GetInTouchBlock />*/}
        <ContactUs />
        <FooterBlock />
      </div>
    </Router>
  );
};

export default App;
