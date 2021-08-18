import React, { useEffect, useRef, useState } from "react";
import WCYDBubble from "../WCYDBubble/WCYDBubble";

import searchIcon from "../../../images/icons/search.png";
import searchIconDark from "../../../images/icons/searchDark.png";
import heartIcon from "../../../images/icons/heart 2.png";
import heartIconDark from "../../../images/icons/heart 2 (1).png";
import bulletIcon from "../../../images/icons/bullet-list 2.png";
import bulletIconDark from "../../../images/icons/bullet-list 2 (1).png";
import userIcon from "../../../images/icons/user 2.png";
import userIconDark from "../../../images/icons/user 2 (1).png";

import testing0 from "../../../images/iphone/Component 3.png";
import testing1 from "../../../images/iphone/Component 4.png";
import testing2 from "../../../images/iphone/Component 5.png";
import testing3 from "../../../images/iphone/Component 6.png";

import "./WCYDBubbleContainer.css";
import { useTranslation } from "react-i18next";

var intvl = null;

const WCYDBubbleContainer = ({ isMobile }) => {
  const { t } = useTranslation();

  const [bubble, setBubble] = useState([
    {
      header: `${t("Bubble-Header-1")}`,
      caption: `${t("Bubble-Caption-1")}`,
      icon: searchIcon,
      iconDark: searchIconDark,
      image: testing0,
    },
    {
      header: `${t("Bubble-Header-2")}`,
      caption: `${t("Bubble-Caption-2")}`,
      icon: heartIcon,
      iconDark: heartIconDark,
      image: testing1,
    },
    {
      header: `${t("Bubble-Header-3")}`,
      caption: `${t("Bubble-Caption-3")}`,
      icon: bulletIcon,
      iconDark: bulletIconDark,
      image: testing2,
    },
    {
      header: `${t("Bubble-Header-4")}`,
      caption: `${t("Bubble-Caption-4")}`,
      icon: userIcon,
      iconDark: userIconDark,
      image: testing3,
    },
  ]);

  const images = [testing0, testing1, testing2, testing3];

  const [state, setState] = useState({
    img: testing0,
  });
  const stateRef = useRef({ img: testing0 });

  const [stoppedInterval, setStoppedInterval] = useState(false);

  // Interval variable
  const [count, setCount] = useState(0);
  const counterRef = useRef(1);

  useEffect(() => {
    counterRef.current = count;
    stateRef.current = state;
  });

  useEffect(() => {
    if (intvl === null) {
      intvl = setInterval(() => {
        setCount((counterRef.current + 1) % 4);
        counterRef.current = (counterRef.current + 1) % 4;
        setState({ img: images[counterRef.current] });
      }, 2500);
    }
    return () => clearInterval(intvl);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        clearInterval(intvl);
        setStoppedInterval(true);
        setCount(count + 100);
      }}
      data-aos="fade-up"
      className="photoblock-container"
    >
      <img className="WCYD-image" src={state.img} alt="phone" />
      <div>
        {bubble.map((block, blockId) => {
          return (
            <WCYDBubble
              key={blockId}
              header={block.header}
              caption={block.caption}
              icon={block.icon}
              iconDark={block.iconDark}
              img={block.image}
              setState={setState}
              setBubble={setBubble}
              isActive={count === blockId}
              stoppedInterval={isMobile ? true : stoppedInterval}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WCYDBubbleContainer;
