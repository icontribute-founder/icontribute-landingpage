import React from 'react';
import { NavLink } from 'react-router-dom';
import NavBarLogo from '../NavBarLogo/NavBarLogo';
import './NavBar.css';

import { useMediaQuery } from 'react-responsive';
import { MOBILE_SCREEN_SIZE } from './../../constants/MediaQueries';

const NavBar = () => {
  const isMobile = useMediaQuery({ maxWidth: MOBILE_SCREEN_SIZE });

  if (isMobile) {
    return <NavBarLogo />;
  }

  return (
    <div className="Navbar">
      <div className="navbar-content">
        <div className="navbar-logo">
          <h1>iContribute</h1>
          <h2>We rise by lifting others</h2>
        </div>

        <div className="navbar-links">
          <NavLink className="navbar-link" exact to="/" activeClassName="selected">
            HOME
          </NavLink>
          <NavLink className="navbar-link" to="/volunteers" activeClassName="selected">
            VOLUNTEERS
          </NavLink>
          <NavLink className="navbar-link" to="/nonprofit" activeClassName="selected">
            NONPROFIT
          </NavLink>
          <NavLink className="navbar-link" to="/ourteam" id="ourteam" activeClassName="selected">
            OUR TEAM
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
