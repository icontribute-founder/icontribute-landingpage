import React, { useState } from "react";
import Slider from "react-slick";
import ProfileCard from "../ProfileCard/ProfileCard";
import ProfileModal from "../../ProfileModal/ProfileModal";

import "./TeamBlock.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import teamCategories from "../../../helpers/TeamMember";
import { useTranslation } from "react-i18next";

const sliderSettings = {
  touchMove: true,
  draggable: true,
  swipeToSlide: true,
  dots: true,
  infinite: true,
  autoplay: true,
  pauseOnHover: true,
  pauseOnDotsHover: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplaySpeed: 2000,
  cssEase: "ease",
};

const TeamBlock = ({ teamMembers }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTeamMember, setCurrentTeamMember] = useState({});
  const { t } = useTranslation();
  return (
    <div className="TeamBlock">
      <div data-aos="fade-up" className="TeamBlock-Header">
        <h1>{t("TeamBlock-Header-h1")}</h1>
        <p>{t("TeamBlock-Header-p")}</p>
      </div>

      <div data-aos="fade-up" className="TeamBlock-Gallery">
        {teamCategories.map((category, idx) => {
          const teamName = category.teamName;
          const teamFilter = category.filter;
          const reverseScrollDirection = idx % 2 === 0;

          return (
            <div key={idx}>
              <p className="TeamBlock-TeamName">{teamName}</p>
              <Slider {...sliderSettings} rtl={reverseScrollDirection}>
                {teamMembers.filter(teamFilter).map((teamMember, idx) => (
                  <ProfileCard
                    key={idx}
                    teamMember={teamMember}
                    setIsModalOpen={setIsModalOpen}
                    setCurrentTeamMember={setCurrentTeamMember}
                  />
                ))}
              </Slider>
            </div>
          );
        })}
      </div>
      <ProfileModal
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
        teamMember={currentTeamMember}
      />
    </div>
  );
};

export default TeamBlock;
