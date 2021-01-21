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
      {/* zIndex = -1 is NEEDED or else a bug happens when hovering over dots on the globe */}
      <div className="InteractiveMap-Popups" style={{ zIndex: '-1' }}>
        {peopleOfHoveredLocation.map((person, i) => (
          <ProfilePopup key={i} index={i} teamMember={person} mousePosition={mousePosition} />
        ))}
      </div>
    </div>
  );
};

export default InteractiveMap;
