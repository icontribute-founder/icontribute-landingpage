import React from 'react';
import blank_profile from '../../../images/team/blank_profile.png';

import './ProfileCard.css';

const ProfileCard = ({ teamMember }) => {
  return (
    <div className="ProfileCard">
      <img
        className="ProfileCard-Pic"
        src={teamMember.profilePicture ? teamMember.profilePicture.url : blank_profile}
        alt={`${teamMember.fullName}'s profile pic`}
      />
      <p className="ProfileCard-Name">{teamMember.fullName}</p>
      <p className="ProfileCard-Role">{teamMember.role}</p>
    </div>
  );
};

export default ProfileCard;
