import React from 'react';
import Slider from 'react-slick';
import ProfileCard from '../ProfileCard/ProfileCard';

import './TeamBlock.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import teamCategories from '../../../helpers/TeamMember';

const sliderSettings = {
  dots: true,
  infinite: true,
  autoplay: true,
  pauseOnHover: true,
  pauseOnDotsHover: true,
  swipeToSlide: false,
  draggable: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 2500,
  autoplaySpeed: 2000,
  cssEase: 'ease'
};

const TeamBlock = ({ teamMembers }) => {
  return (
    <div className="TeamBlock">
      <div data-aos="fade-up" className="TeamBlock-Header">
        <h1>iContribute is built and maintained by this wonderful group of students.</h1>
        {/* <p>CLICK TO LEARN MORE ABOUT US.</p> */}
      </div>

      <div data-aos="fade-up" className="TeamBlock-Gallery">
        {teamCategories.map((category, idx) => {
          const teamName = category.teamName;
          const teamFilter = category.filter;
          const reverseScrollDirection = idx % 2 === 0;

          return (
            <div>
              <p className="TeamBlock-TeamName">{teamName}</p>
              <Slider {...sliderSettings} rtl={reverseScrollDirection} key={idx}>
                {teamMembers
                  .filter(teamFilter)
                  .map((teamMember, idx) => <ProfileCard key={idx} teamMember={teamMember} />)}
              </Slider>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TeamBlock;
