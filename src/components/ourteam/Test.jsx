import React, { useState, useEffect } from "react";
import ReactTooltip from "react-tooltip";
import "./test.css";

const Test = (person) => {
  const [isShown, setIsShown] = useState("tooltip-off");
  return (
    <div
      className="tooltip-container"
      style={{ position: "absolute", left: person.left, top: person.top }}
    >
      <img
        className="tooltip-img-location"
        src={person.map}
        onMouseEnter={() => setIsShown("tooltip-on")}
        onMouseLeave={() => setIsShown("tooltip-off")}
        // style={{ position: "absolute", left: person.left, top: person.top }}
      />
      <div className={isShown}>
        <img className="tooltip-img" src={person.photo} />
        <div>
          <p>
            <strong>{person.name}</strong> <br />
            {person.role}
            <br />
          </p>
          <p>{person.education}</p>
        </div>
      </div>
    </div>
  );
};

export default Test;
