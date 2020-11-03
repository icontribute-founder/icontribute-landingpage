import React, { useState, useEffect } from "react";
import Test from "./Test";
import map from "../../images/map.png";
import florida from "../../images/map/florida.png";
import bowdoin from "../../images/map/bowdoin.png";
import northWestern from "../../images/map/northWestern.png";
import "../../css/OurTeam.css";
import ReactTooltip from "react-tooltip";
import james from "../../images/team/james.jpg";
import haohao from "../../images/team/haohao.png";
import umai from "../../images/team/umai.png";
import vedashree from "../../images/team/vedashree.png";
import carmen from "../../images/team/carmen.png";
import lydia from "../../images/team/lydia.png";
import alex from "../../images/team/alex.png";
import kirti from "../../images/team/kirti.png";
import umang from "../../images/team/umang.png";
import samuel from "../../images/team/samuel.png";
import ella from "../../images/team/ella.png";
import alicia from "../../images/team/alicia.png";
import tony from "../../images/team/tony.png";

const AcrossGlobeBlock = (props) => {
  const [team, setTeam] = useState([
    {
      photo: kirti,
      map: florida,
      name: "Kirti Desai",
      role: "Back-End Developer",
      education: "University of Florida, Computer Science",
      left: "673px",
      top: "386px",
    },
    {
      photo: lydia,
      map: bowdoin,
      name: "Lydia Pitts",
      role: "Designer and Front-End Developer",
      education: "Bowdoin College, Computer Science & Visual Art",
      left: "784px",
      top: "245px",
    },
    // {
    //   name: "James Ying",
    //   role: "Co-Founder & Developer",
    //   education: "Carleton University, Computer Science",
    // },
    // {
    //   name: "HaoHao Du",
    //   role: "Founder",
    //   education: "Carleton University, Computer Science & Business",
    // },
    // {
    //   name: "Umai Balendra",
    //   role: "Co-Founder & Developer",
    //   education: "Carleton University, Computer Science",
    // },
    // {
    //   name: "Vedashree Dalvi",
    //   role: "Project Manager",
    //   education:
    //     "University of Arizona, Masters in Management Information Systems",
    // },
    // {
    //   name: "Carmen Lin",
    //   role: "Design Lead",
    //   education: "University of Toronto, Pharmacy",
    // },

    // {
    //   name: "Alex Gold",
    //   role: "Front-End Developer",
    //   education: "Northwestern University, Computer Science & Spanish",
    // },

    // {
    //   name: "Umang Srivastav",
    //   role: "Back-End Developer",
    //   education: "University of California, Irvine",
    // },
    // {
    //   name: "Samuel Chen",
    //   role: "Practicum Advisor",
    //   education: "University of California, Berkeley, Computer Science & Math",
    // },
    // {
    //   name: "Tony Li",
    //   role: "Web Developer",
    //   education: "Carleton University, Computer Science & Statistics",
    // },
    // {
    //   name: "Alicia Yoshino",
    //   role: "Marketing Lead",
    //   education: "University of Ottawa, Marketing & Entrepreneurship",
    // }
  ]);

  const teamModal = (person) => {
    return (
      <div>
        <img
          data-tip="React-tooltip"
          src={person.map}
          style={{ position: "absolute", left: person.left, top: person.top }}
        />
        <ReactTooltip place="right" type="dark">
          <div
            style={{ width: "250px", display: "flex", flexDirection: "row" }}
          >
            <img
              src={person.photo}
              style={{ borderRadius: 15, maxWidth: "30%", height: "auto" }}
            />
            <div>
              <p>
                <strong>{person.name}</strong> <br />
                {person.role}
                <br />
              </p>
              <p>{person.education}</p>
            </div>
          </div>
        </ReactTooltip>
      </div>
    );
  };

  return (
    <div data-aos="fade-up" className="globe-container">
      <h1>From Across The Globe</h1>
      <h2>
        Our team is located in multiple areas around the world. We have
        collaborated endlessly to bring our app to you.
      </h2>
      <div style={{ position: "relative" }}>
        <img src={map} />
        {/* {team.map((person) => {
          return teamModal(person);
        })} */}
        {/* {teamModal(team[1])} */}
        {team.map((person, teamId) => {
          return (
            <Test
              key={teamId}
              map={person.map}
              left={person.left}
              top={person.top}
              role={person.role}
              education={person.education}
              name={person.name}
              photo={person.photo}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AcrossGlobeBlock;
