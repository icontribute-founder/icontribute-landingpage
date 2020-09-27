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
      education: "Carleton University, Computer Science",
      description: "I am an advid fisherman and music enthusiast.",
    },
    {
      photo: haohao,
      name: "HaoHao Du",
      role: "Founder",
      education: "Carleton University, Computer Science & Business",
      description:
        "This started off as a summer project, but turned into a full-time job; collaborating with local organizations, school boards, leading a team of amazing individuals, and of course, hosting our weekly round of iContribute-Olympics. From putting in work throughout their days, nights, and weekends, to making rap freestyles and singing their hearts during our team bonding sessions. It was an amazing experience to be able to work with so many people that really believe in a vision you created.One fun fact about myself is that I actually almost drowned at a water park ! Some of my personal hobbies include taking dares, doing handstands in public, and making funny tik toks !",
    },
    {
      photo: umai,
      name: "Umai Balendra",
      role: "Co-Founder & Developer",
      education: "Carleton University, Computer Science",
      description:
        "It's been a great journey seeing the project go through many phases. The entire team has done an amazing job of learning new concepts and working together to develop a great version of the app. I really enjoy playing the violin and performing Indian classical dance! Also, I've been catching up on reading, baking, and watching movies.",
    },
    {
      photo: vedashree,
      name: "Vedashree Dalvi",
      role: "Project Manager",
      education:
        "University of Arizona, Masters in Management Information Systems",
      description:
        "I had a great experience working on this project with the team. It was amazing to work with people from different parts of the world. Everybody is so talented, enthusiastic and helpful.",
    },
    {
      photo: carmen,
      name: "Carmen Lin",
      role: "Design Lead",
      education: "University of Toronto, Pharmacy",
      description:
        "I really enjoyed creating the UI design for iContribute! It was my first time ever using a design tool such as Figma, and it was a great way for me to explore this new and exciting field.My hobbies usually include being active. I love to workout, run, hike, boulder and bike! I also really enjoy bullet journalling to keep my schedule organized especially during the school year. ",
    },
    {
      photo: lydia,
      name: "Lydia Pitts",
      role: "Designer and Front-End Developer",
      education: "Bowdoin College, Computer Science & Visual Art",
      description:
        "Hi, I'm Lydia! I feel so lucky to have been able to work with iContribute this summer. Outside of iContribute, I love to spend time outdoors, make art, dance (terribly but with enthusiasm), and at Bowdoin I am on the Track and Field team where I do the horizontal jumps and hurdles!",
    },
    {
      photo: alex,
      name: "Alex Gold",
      role: "Front-End Developer",
      education: "Northwestern University, Computer Science & Spanish",
      description:
        "I've really enjoyed working at iContribute and I'm excited to share this app with the Ottawa community. I've learned so much from the team and have had a great experience.I enjoy cooking/baking and playing squash and lacrosse. ",
    },
    {
      photo: kirti,
      name: "Kirti Desai",
      role: "Back-End Developer",
      education: "University of Florida, Computer Science",
      description:
        "I'm an individual with great curiosity for learning new technologies and passionate about problem solving. I'm a sports enthusiast. I play volleyball and basketball. My hobbies include photography and traveling.",
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
      education: "University of California, Berkeley, Computer Science & Math",
      description:
        "In my free time, I enjoys cooking dumplings and watching television. I have also spent an unfortunate amount of time playing board games and knitting.",
    },
    {
      photo: ella,
      name: "Ella Queen",
      role: "Tech Advisor",
      education: "gggggg",
      description:
        "Hi! My name is Lydia and I found your volunteering opportunity through the iContribute platform. I’m enthusiastic to apply to your Relay for Life 3 event for the shifts: 8/12/2020, 12:02:00 AM I’m looking forward to your reply and hope to hear from you s",
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
      education: "University of Ottawa, Marketing & Entrepreneurship",
      description:
        "I am a fourth year French immersion and CO-OP student. I enjoy exploring graphic design and fashion design on my spare time. I love travelling, learning new languages, and gaining new experiences.",
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
