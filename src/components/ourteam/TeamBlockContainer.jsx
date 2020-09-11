import React, { useState } from "react";
import TeamBlock from "./TeamBlock";
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

import "../../css/TeamBlock.css";

const TeamBlockContainer = (props) => {
  const [team, teamPhoto] = useState([
    {
      photo: james,
      name: "James Ying",
      role: "Co-Founder & Developer",
      education: "gggggg",
      description: "ggg",
    },
    {
      photo: haohao,
      name: "HaoHao Du",
      role: "Founder",
      education: "gggggg",
      description: "ggg",
    },
    {
      photo: umai,
      name: "Umai Balendra",
      role: "Co-Founder & Developer",
      education: "gggggg",
      description: "ggg",
    },
    {
      photo: vedashree,
      name: "Vedashree Dalvi",
      role: "Project Manager",
      education: "gggggg",
      description: "ggg",
    },
    {
      photo: carmen,
      name: "Carmen Lin",
      role: "Design Lead",
      education: "gggggg",
      description: "ggg",
    },
    {
      photo: lydia,
      name: "Lydia Pitts",
      role: "Designer and Front-End Developer",
      education: "gggggg",
      description: "ggg",
    },
    {
      photo: alex,
      name: "Alex Gold",
      role: "Front-End Developer",
      education: "gggggg",
      description: "ggg",
    },
    {
      photo: kirti,
      name: "Kirti Desai",
      role: "Back-End Developer",
      education: "gggggg",
      description: "ggg",
    },
    {
      photo: umang,
      name: "Umang Srivastav",
      role: "Back-End Developer",
      education: "gggggg",
      description: "ggg",
    },
    {
      photo: samuel,
      name: "Samuel Chen",
      role: "Practicum Advisor",
      education: "gggggg",
      description: "ggg",
    },
    {
      photo: ella,
      name: "Ella Queen",
      role: "Tech Advisor",
      education: "gggggg",
      description: "ggg",
    },
    {
      photo: james,
      name: "Tony Li",
      role: "Web Developer",
      education: "gggggg",
      description: "ggg",
    },
    {
      photo: alicia,
      name: "Alicia Yoshino",
      role: "Marketing Lead",
      education: "gggggg",
      description: "ggg",
    },
  ]);
  return (
    <div className="teamblock-container">
      <div className="teamblock-header">
        <h1>
          iContribute is built and maintained by this wonderful group of
          students.
        </h1>
        <a>Click to learn more about us.</a>
      </div>

      <div className="teamblock-grid">
        {team.map((block, blockId) => {
          return (
            <TeamBlock
              key={blockId}
              photo={block.photo}
              name={block.name}
              role={block.role}
              education={block.education}
              description={block.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TeamBlockContainer;
