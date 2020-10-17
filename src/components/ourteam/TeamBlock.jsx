import React, { useState, useEffect } from "react";
import Modal from "react-modal";

const TeamBlock = (props) => {
  const [modal, setModal] = useState(false);
  //   const [modals, setModals] = useState();
  console.log(modal);
  return (
    <div
      className="profile-container"
      onClick={() => {
        setModal(!modal);
      }}
    >
      <div className="profile-pic-wrapper">
        <img src={props.photo} className="profile-pic" />
      </div>
      <div className="profile-name">
        <h1>{props.name}</h1>
      </div>
      <div className="profile-role">
        <h2>{props.role}</h2>
      </div>
      <Modal
        style={{
          content: {
            top: "50px",
            bottom: "50px",
            left: "200px",
            right: "200px",
            overflow: "hidden",
            padding: "0px",
          },
        }}
        isOpen={modal}
      >
        <div className="teamblock-wrapper">
          <div className="teamblock-buttons">
            <a className="solid-purple">Our Team</a>
            <button className="x-button">x</button>
          </div>
          <div className="teamblock-info">
            <div className="profile-pic-wrapper">
              <img className="profile-pic" src={props.photo} />
            </div>

            <div className="teamblock-text">
              <h1 className="team-name">{props.name}</h1>
              <h2 className="team-role">{props.role}</h2>
              <h3 className="team-education">{props.education.split('\n').map((item, i) => { return <p key={i}>{item}<br /></p> })}</h3>
              <p className="team-disc">{props.description} </p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default TeamBlock;
