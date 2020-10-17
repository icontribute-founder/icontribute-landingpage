import React, { useState, useEffect } from "react";

const WCYDBubble = (props) => {
  const iconSrc = props.icon;

  return (
    <div
      className="WYCD-bubble"
      onMouseEnter={() => props.setState({ img: props.img })}
    >
      <div data-aos="fade-up" className="WCYD-icon-container">
        <img className="WCYD-icon" src={props.icon}></img>
        <img className="WCYD-icon-dark" src={props.iconDark}></img>
      </div>
      <div data-aos="fade-up" className="bubble-text">
        <h1>{props.header}</h1>
        <p>{props.caption}</p>
      </div>
    </div>
  );
};

export default WCYDBubble;
