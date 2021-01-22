import React from 'react';
import chatBubble from '../../images/bubbles.png';
import './GetInTouchBlock.css';

const GetInTouchBlock = () => {
  return (
    <div data-aos="fade-up" className="getintouch-container">
      <img src={chatBubble} />
      <h1>GET IN TOUCH WITH US</h1>
      <h2>Feel free to reach out to us. We are happy to help.</h2>
      <a href="mailto:icontribute.founder@gmail.com" className="hollow-yellow">
        CONTACT
      </a>
    </div>
  );
};

export default GetInTouchBlock;
