import React, { useState } from "react";
import iphone from "../../images/iphone/Component 1.png";
import notification from "../../images/Frame 213.png";
import apple from "../../images/1 25.png";
import google from "../../images/1 26.png";

const HowItWorksContainer = (props) => {
  return (
    <div className="howitworks-container">
      <div className="howitworks-header">
        <h1>HOW IT WORKS</h1>
        <h2>Connect to 1000s of students in the community</h2>
      </div>
      <div className="step-left">
        <h1>STEP 1</h1>
        <div className="yellow-dot"></div>
      </div>
      <div className="howitworks-step-left">
        <div className="howitworks-step-text-left">
          <h1>Download the app</h1>
          <h2>
            Download iContribute app for your mobile device. It works with iOS
            and Android.
          </h2>
          <a className="appstore">
            <img src={apple} />
          </a>
          <a className="appstore">
            <img src={google} />
          </a>
        </div>
        <div className="howitworks-iphone">
          <img src={iphone}></img>
        </div>
      </div>

      <div className="step-right">
        <h1>STEP 2</h1>
        <div className="yellow-dot"></div>
      </div>
      <div className="howitworks-step-right">
        <div className="howitworks-iphone">
          <img src={iphone}></img>
        </div>
        <div className="howitworks-step-text-right">
          <h1>Sign Up as an Organization</h1>
          <h2>
            Fill in the required fields to make an account with us. It only
            takes a few fields.
          </h2>
        </div>
      </div>
      <div className="step-left">
        <h1>STEP 3</h1>
        <div className="yellow-dot"></div>
      </div>
      <div className="howitworks-step-left">
        <div className="howitworks-step-text-left">
          <h1>Download the app</h1>
          <h2>
            Download iContribute app for your mobile device. It works with iOS
            and Android.
          </h2>
        </div>
        <div className="howitworks-iphone">
          <img src={iphone}></img>
        </div>
      </div>
      <div className="step-center">
        <div className="yellow-dot"></div>
        <h1>STEP 4</h1>
      </div>
      <div className="step4-wrapper">
        <h1>Confirm Your Volunteers</h1>
        <p>
          Volunteers will apply to your event and all you have to do is confirm
          if they will be attending via email.
        </p>
        <div className="mail-notification">
          <img src={notification}></img>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksContainer;
