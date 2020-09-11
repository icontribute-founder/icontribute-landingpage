import React, { useState, useEffect } from "react";
import test from "../../images/team/james.jpg";

const TeamBlock = (props) => {
  return (
    <div className="teamblock-wrapper">
      <div className="teamblock-buttons">
        <a className="solid-purple">Our Team</a>
        <a className="x-button">x</a>
      </div>
      <div className="teamblock-info">
        <div className="profile-pic-wrapper">
          <img className="profile-pic" src={test} />
        </div>

        <div className="teamblock-text">
          <h1 className="team-name">Name</h1>
          <h2 className="team-role">Role</h2>
          <h3 className="team-education">Education</h3>
          <p className="team-disc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamBlock;
