import React, { useRef, useState } from "react";
import "./ContactUs.css";
import ContactUsIcon from "../../images/ContactUsIcon.png";

const ContactUs = () => {
  const [buttonText, setButtonText] = useState("Send Message");
  const submitForm = (e) => {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;
    if (name !== "" && email !== "" && subject !== "" && message !== "") {
      if (re.test(String(email).toLowerCase())) {
        setButtonText("Sent!");
        document.getElementById("errorMessageC").innerHTML = "";
        console.log(
          "Name",
          document.getElementById("name").value,
          ", Email",
          document.getElementById("email").value,
          ", Subject",
          document.getElementById("subject").value,
          ", Message",
          document.getElementById("message").value
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
        <form>
          <h1>Contact Us</h1>
          <p>
            Do you have a question or want to get involved? Send us a message,
            we’d love to hear from you!
          </p>
          <p className="fieldTag">Full Name</p>
          <input id="name" placeholder="Full Name" type="text" />
          <p className="fieldTag">Email Address</p>
          <input id="email" placeholder="Email Address" type="email" />
          <p className="fieldTag">Subject</p>
          <select id="subject">
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
          <p className="fieldTag">Message</p>
          <textarea
            id="message"
            className="message"
            placeholder="Hello, I am a high school student/ school board representative/ organizational representative. I am contacting you because … "
            type="text"
          ></textarea>
          <br />
          <p id="errorMessageC"></p>
          <button
            disabled={buttonText.length > 5 ? false : true}
            onClick={(e) => submitForm(e)}
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
