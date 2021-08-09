import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import NavBarLogo from "../NavBarLogo/NavBarLogo";
import "./NavBar.css";

import { useMediaQuery } from "react-responsive";
import { MOBILE_SCREEN_SIZE } from "./../../constants/MediaQueries";

const NavBar = () => {
  const isMobile = useMediaQuery({ maxWidth: MOBILE_SCREEN_SIZE });
  const burgerRef = useRef(null);
  const [linkClicked, setLinkClicked] = useState(false);
  const lastScrollDirection = useRef("up");

  useEffect(() => {
    setLinkClicked(false);
    function scrollEventThrottle(fn) {
      let last_known_scroll_position = 0;
      let ticking = false;
      window.addEventListener("scroll", function () {
        let previous_known_scroll_position = last_known_scroll_position;
        last_known_scroll_position = window.scrollY;
        if (!ticking) {
          window.requestAnimationFrame(function () {
            fn(last_known_scroll_position, previous_known_scroll_position);
            ticking = false;
          });
          ticking = true;
        }
      });
    }
    var navSlide = () => {
      const navbar = document.querySelector("nav");
      const nav = document.querySelector(".nav-links");
      const siteMargin = document.querySelector(".site-margin");
      const navLinks = document.querySelectorAll(".nav-links li");
      setTimeout(() => {
        scrollEventThrottle((scrollPos, previousScrollPos) => {
          if (previousScrollPos > scrollPos || scrollPos < 150) {
            // down
            navbar.classList.add("scroll-up");
            navbar.classList.remove("scroll-down");
            lastScrollDirection.current = "up";
          } else {
            // up
            if (lastScrollDirection.current === "up") {
              navbar.classList.add("scroll-down");
              navbar.classList.remove("scroll-up");
              nav.classList.remove("nav-active");
              burgerRef.current.classList.remove("toggle");
              if (siteMargin.style.animation) {
                siteMargin.style.animation = "";
              }
              navLinks.forEach((link) => {
                link.style.animation = "";
              });
              lastScrollDirection.current = "down";
            }
          }
        });
        burgerRef.current.addEventListener("click", () => {
          nav.classList.toggle("nav-active");
          burgerRef.current.classList.toggle("toggle");
          navLinks.forEach((link, idx) => {
            if (link.style.animation) {
              link.style.animation = "";
            } else {
              link.style.animation = `navLinkFade 0.5s ease forwards ${
                idx / 5 + 0.2
              }s`;
            }
          });
          if (siteMargin.style.animation) {
            siteMargin.style.animation = "";
          } else {
            siteMargin.style.animation =
              "siteMarginPush 0.5s ease-in-out forwards";
          }
        });
      }, 500);
    };
    navSlide();
  }, []);

  useEffect(() => {
    const nav = document.querySelector(".nav-links");
    const siteMargin = document.querySelector(".site-margin");
    const navLinks = document.querySelectorAll(".nav-links li");
    nav.classList.remove("nav-active");
    burgerRef.current.classList.remove("toggle");
    if (siteMargin.style.animation) {
      siteMargin.style.animation = "";
    }
    navLinks.forEach((link, idx) => {
      link.style.animation = "";
    });
  }, [isMobile]);

  useEffect(() => {
    const nav = document.querySelector(".nav-links");
    const siteMargin = document.querySelector(".site-margin");
    const navLinks = document.querySelectorAll(".nav-links li");
    nav.classList.remove("nav-active");
    burgerRef.current.classList.remove("toggle");
    if (siteMargin.style.animation) {
      siteMargin.style.animation = "";
    }
    navLinks.forEach((link, idx) => {
      link.style.animation = "";
    });
  }, [linkClicked]);

  /*if (isMobile) {
    return <NavBarLogo isMobile={true} />;
  }*/

  return (
    <nav>
      <div className="logo">
        <NavLink className="navbar-logo" to="/">
          <NavBarLogo />
        </NavLink>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink
            onClick={() => {
              setLinkClicked((click) => !click);
            }}
            className="nav-link"
            to="/"
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => {
              setLinkClicked((click) => !click);
            }}
            className="nav-link"
            to="/volunteers"
            activeClassName="selected"
          >
            VOLUNTEERS
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => {
              setLinkClicked((click) => !click);
            }}
            className="nav-link"
            to="/organizations"
            activeClassName="selected"
          >
            ORGANIZATIONS
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => {
              setLinkClicked((click) => !click);
            }}
            className="nav-link"
            to="/our-team"
            activeClassName="selected"
          >
            OUR TEAM
          </NavLink>
        </li>
      </ul>
      <div ref={burgerRef} className="burger">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

export default NavBar;
