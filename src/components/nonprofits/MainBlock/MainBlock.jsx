import React from 'react';
import './MainBlock.css';
import PhotoBlock from '../../PhotoBlock/PhotoBlock';
import test from '../../../images/kidmom.png';

const photo = {
  photo: test,
  title: 'Volunteer',
  location: 'Ottawa Community',
  date: 'Sun May 16, 2020',
  distance: '10.1 km'
};

const MainBlock = () => {
  return (
    <div data-aos="fade-up" className="main-container">
      <div className="main-info">
        <h1>Reach a bigger audience</h1>
        <p>
          Your organization can increase its exposure in the Ottawa community by connecting with students through our
          mobile platform. It only takes a few steps to get started.
        </p>
      </div>
      <div className="nonprofit-photoblock">
        <PhotoBlock
          photo={photo.photo}
          title={photo.title}
          location={photo.location}
          date={photo.date}
          distance={photo.distance}
        />
      </div>
    </div>
  );
};

export default MainBlock;
