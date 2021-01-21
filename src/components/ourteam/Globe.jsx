import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import shuffle from 'shuffle-array';

const colors = [
  '#4e79a7',
  '#f28e2c',
  '#e15759',
  '#76b7b2',
  '#59a14f',
  '#edc949',
  '#af7aa1',
  '#ff9da7',
  '#9c755f',
  '#bab0ab'
];

const Globe = ({ teamLocations, setMousePosition, setPeopleOfHoveredLocation }) => {
  const [ idxOfGlowingCircle, setIdxOfGlowingCircle ] = useState(-1); // if idx = -1, then all circles are glowing

  const getColor = (idx) => {
    const i = idx % colors.length;
    return colors[i];
  };

  const getCircleRadius = (numberOfPeople) => {
    const r = numberOfPeople * 5;
    // minimum radius = 10
    // maximum radius = 20
    return Math.min(Math.max(r, 10), 20);
  };

  const isGlowing = (idx) => {
    return idx === idxOfGlowingCircle || idxOfGlowingCircle === -1;
  };

  const handleMouseEnter = (event, teamMembers, idx) => {
    // calculate the side of the screen the mouse is currently on
    const mouseIsOnTheLeftSideOfTheScreen = event.screenX / window.screen.width < 0.5;
    setMousePosition(mouseIsOnTheLeftSideOfTheScreen ? 'left' : 'right');

    setIdxOfGlowingCircle(idx);
    setPeopleOfHoveredLocation(shuffle(teamMembers));
  };

  const handleMouseLeave = () => {
    setIdxOfGlowingCircle(-1);
    setPeopleOfHoveredLocation([]);
  };

  const geoUrl =
    'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

  return (
    <ComposableMap
      className="InteractiveMap-Globe"
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [ 100, -45, 0 ],
        scale: 400
      }}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies
            // .filter((d) => d.properties.REGION_UN === 'Americas')
            // .filter((d) => d.properties.CONTINENT === 'North America')
            .map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#EAEAEC"
                stroke="#D6D6DA"
                style={{
                  default: { outline: 'none' },
                  hover: { outline: 'none' },
                  pressed: { outline: 'none' }
                }}
              />
            ))}
      </Geographies>
      {teamLocations.map(({ coord, teamMembers }, idx) => {
        const coordinates = coord.split(',');
        return (
          <Marker key={idx} coordinates={coordinates}>
            {isGlowing(idx) ? (
              <circle className="Globe-GlowingCircle" cy="-1.5" fill={getColor(idx)}>
                <animate
                  attributeName="r"
                  from={getCircleRadius(teamMembers.length)}
                  to={getCircleRadius(teamMembers.length) + 10}
                  dur="1s"
                  begin="0s"
                  repeatCount="indefinite"
                />
                <animate attributeName="opacity" from="0.5" to="0" dur="1s" begin="0s" repeatCount="indefinite" />
              </circle>
            ) : null}
            <circle
              key={idx}
              cx="12"
              cy="22.5"
              transform="translate(-12, -24)"
              className="Globe-Circle"
              onMouseEnter={(e) => handleMouseEnter(e, teamMembers, idx)}
              onMouseLeave={handleMouseLeave}
              fill={getColor(idx)}
              r={getCircleRadius(teamMembers.length)}
            />
          </Marker>
        );
      })}
    </ComposableMap>
  );
};

export default Globe;
