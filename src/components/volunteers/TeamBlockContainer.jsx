import React, { useState } from "react";
import TeamBlock from "./TeamBlock";
import test from "../../images/anna-earl-cTtE2FlIRoU-unsplash 1.png";
import "../../css/TeamBlock.css";

const TeamBlockContainer = (props) => {
  //   const [team, teamPhoto] = useState([
  //     {
  //       photo: test,
  //       title: "test",
  //       location: "test location",
  //       date: "test date",
  //       distance: "100",
  //     },
  //     {
  //       photo: test2,
  //       title: "test",
  //       location: "test location",
  //       date: "test date",
  //       distance: "100",
  //     },
  //     {
  //       photo: test,
  //       title: "test",
  //       location: "test location",
  //       date: "test date",
  //       distance: "100",
  //     },
  //   ]);
  return (
    <div className="teamblock-container">
      <TeamBlock></TeamBlock>
      {/* <div>
        {team.map((block, blockId) => {
          return (
            <TeamBlock
              key={blockId}
              photo={block.photo}
              title={block.title}
              location={block.location}
              date={block.date}
              distance={block.distance}
            />
          ); 
        })}        
      </div> */}
    </div>
  );
};

export default TeamBlockContainer;
