import React from "react";
import "./WYCDBubble.css";

const WCYDBubble = (props) => {
  return (
    <div
      className={props.isActive ? "WYCD-bubble-active" : "WYCD-bubble"}
      onMouseEnter={() => props.setState({ img: props.img })}
    >
      <div data-aos="fade-up" className="WCYD-icon-container">
        <img className="WCYD-icon" src={props.iconDark} alt="icon dark" />
        <img className="WCYD-icon-dark" src={props.iconDark} alt="icon dark" />
      </div>
      <div data-aos="fade-up" className="bubble-text">
        <h1>{props.header}</h1>
        <p>{props.caption}</p>
      </div>
    </div>
  );
};

export default WCYDBubble;
