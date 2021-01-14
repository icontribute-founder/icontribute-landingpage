import React, { useState } from 'react';
import Globe from './Globe';
import ProfilePopup from './ProfilePopup';
import '../../css/InteractiveMap.css';

const InteractiveMap = ({ teamLocations }) => {
  const [ peopleOfHoveredLocation, setPeopleOfHoveredLocation ] = useState([]);
  const [ mousePosition, setMousePosition ] = useState('right');

  return (
    <div className="InteractiveMap">
      <Globe
        teamLocations={teamLocations}
        setPeopleOfHoveredLocation={setPeopleOfHoveredLocation}
        setMousePosition={setMousePosition}
      />
      <div className="InteractiveMap-Popups">
        {peopleOfHoveredLocation.map((person, i) => (
          <ProfilePopup key={i} index={i} teamMember={person} position={mousePosition} />
        ))}
      </div>
    </div>
  );
};

export default InteractiveMap;
