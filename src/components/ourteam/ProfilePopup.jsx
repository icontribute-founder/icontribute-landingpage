import React, { useState, useEffect } from 'react';
import blank_profile from '../../images/team/blank_profile.png';
import '../../css/ProfilePopup.css';

const ProfilePopup = ({ teamMember, position, index }) => {
  // const [ isFadingOut, setIsFadingOut ] = useState(false);

  // useEffect(() => {
  //   return () => {
  //     console.log('unmounting...');
  //     setIsFadingOut(true);

  //     setTimeout(() => {
  //       console.log('NOW');
  //     }, 3000);
  //   };
  // });

  return (
    <div
      className={`ProfilePopup ProfilePopup-${position}`}
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
