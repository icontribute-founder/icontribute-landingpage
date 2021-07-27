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

var intvl = null;

const WCYDBubbleContainer = ({ isMobile }) => {
  const [bubble, setBubble] = useState([
    {
      header: "Explore events near you",
      caption:
        "Scroll through a wide range of volunteering opportunities in your area.",
      icon: searchIcon,
      iconDark: searchIconDark,
      image: testing0,
    },
    {
      header: "Save events for later",
      caption:
        "You can save events that you are interested in and apply to them at a later date.",
      icon: heartIcon,
      iconDark: heartIconDark,
      image: testing1,
    },
    {
      header: "View upcoming events",
      caption:
        "See what is next on your volunteering schedule and view events you have already finished.",
      icon: bulletIcon,
      iconDark: bulletIconDark,
      image: testing2,
    },
    {
      header: "Customize your profile",
      caption:
        "Edit your personal interests to help us find the right events for you.",
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
  }, []);

  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        clearInterval(intvl);
        setStoppedInterval(true);
        console.log("Stopped!");
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
              stoppedInterval={stoppedInterval}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WCYDBubbleContainer;
