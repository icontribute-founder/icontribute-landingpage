import React from "react";
import "../css/NavBar.css";

const NavBar = (props) => {
  return (
    <div className="navbar-container">
      <div className="navbar-content">
        <div className="navbar-logo" href="/">
          <h1>iContribute</h1>
          <h2>We rise by lifting others</h2>
        </div>

        <div className="navbar-links">
          <a className="home" href="/">
            HOME
          </a>
          <a className="volunteers" href="/volunteers">
            VOLUNTEERS
          </a>
          <a href="/nonprofit">NONPROFIT</a>
          <a id="ourteam" href="/ourteam">
            OUR TEAM
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
