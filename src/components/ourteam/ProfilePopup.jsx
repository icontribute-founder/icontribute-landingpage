import React from 'react';
import blank_profile from '../../images/team/blank_profile.png';
import '../../css/ProfilePopup.css';

const ProfilePopup = ({ teamMember, position, index }) => {
  return (
    <div
      className={`ProfilePopup-container ProfilePopup-container-${position}`}
      style={
        index % 2 === 0 && position === 'right' ? (
          { left: '500px', top: `-${index * 75}px`, animation: `fadein ${0.5 * index + 1}s` }
        ) : (
          { right: '500px', top: `-${index * 75}px`, animation: `fadein ${0.5 * index + 1}s` }
        )
      }
    >
      <img
        className="ProfilePopup-img"
        src={teamMember.profilePicture ? teamMember.profilePicture.url : blank_profile}
      />

      <div className="ProfilePopup-text">
        <p>
          <strong>{teamMember.fullName}</strong> <br />
          {teamMember.role}
        </p>
        <p>{teamMember.education}</p>
      </div>
    </div>
  );
};

export default ProfilePopup;
