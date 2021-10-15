import React from "react";
import "./ContactUs.css";
import ContactUsIcon from "../../images/ContactUsIcon.png";

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <div className="left-contact">
        <img alt="" src={ContactUsIcon} />
      </div>
      <div className="right-contact">
        <h1>Contact Us</h1>
        <p>
          Do you have a question or want to get involved? Send us a message,
          we’d love to hear from you!
        </p>
        <p className="fieldTag">Full Name</p>
        <input placeholder="Full Name" type="text" />
        <p className="fieldTag">Email Address</p>
        <input placeholder="Email Address" type="text" />
        <p className="fieldTag">Subject</p>
        <input placeholder="Subject" type="text" />
        <p className="fieldTag">Message</p>
        <textarea
          className="message"
          placeholder="Hello, I am a high school student/ school board representative/ organizational representative. I am contacting you because … "
          type="text"
        ></textarea>
        <br />
        <button>SUBMIT</button>
      </div>
    </div>
  );
};

export default ContactUs;
