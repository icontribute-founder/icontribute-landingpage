import React, { useRef, useState } from "react";
import "./ContactUs.css";
import ContactUsIcon from "../../images/ContactUsIcon.png";
import * as emailjs from "emailjs-com";
import { init } from "emailjs-com";
init("user_sezjNKeAo3Iqife7tGsUG");

const ContactUs = () => {
  const [buttonText, setButtonText] = useState("Send Message");
  const submitForm = (e) => {
    e.preventDefault();
    let name = e.target.name.value;
    let email = e.target.email.value;
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let subject = e.target.subject.value;
    let message = e.target.message.value;
    if (name !== "" && email !== "" && subject !== "" && message !== "") {
      if (re.test(String(email).toLowerCase())) {
        setButtonText("Sent!");
        document.getElementById("errorMessageC").innerHTML = "";
        emailjs.send(
          "service_ns1tlzd",
          "template_iuest3i",
          {
            subject: name + " - " + subject,
            message: message,
            name: name,
            email: email,
          },
          "user_sezjNKeAo3Iqife7tGsUG"
        );
      } else {
        document.getElementById("errorMessageC").innerHTML = "*Email not valid";
      }
    } else {
      document.getElementById("errorMessageC").innerHTML =
        "*Some form values are empty";
    }
  };
  return (
    <div className="contact-us-container">
      <div className="left-contact">
        <img alt="" src={ContactUsIcon} />
      </div>
      <div className="right-contact">
        <form onSubmit={submitForm}>
          <h1>Contact Us</h1>
          <p>
            Do you have a question or want to get involved? Send us a message,
            we’d love to hear from you!
          </p>
          <p className="fieldTag">Full Name</p>
          <input name="name" placeholder="Full Name" type="text" />
          <p className="fieldTag">Email Address</p>
          <input name="email" placeholder="Email Address" type="email" />
          <p className="fieldTag">Subject</p>
          <select id="subject" name="subject">
            <option selected disabled>
              Select one
            </option>
            <option>Product Questions</option>
            <option>Product Support</option>
            <option>Client Inquiries</option>
            <option>Business Inquiries</option>
            <option>Careers @ iContribute</option>
            <option>Marketing / Press Inquiries</option>
            <option>Incoming Sponsorships</option>
            <option>General Questions</option>
          </select>
          <p name="message" className="fieldTag">
            Message
          </p>
          <textarea
            id="message"
            className="message"
            placeholder="Hello, I am a high school student/ school board representative/ organizational representative. I am contacting you because … "
            type="text"
          ></textarea>
          <br />
          <p id="errorMessageC"></p>
          <button type="submit" disabled={buttonText.length > 5 ? false : true}>
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
