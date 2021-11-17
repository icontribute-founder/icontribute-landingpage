import React, { useState } from "react";
import "./ContactUs.css";
import ContactUsIcon from "../../images/ContactUsIcon.png";
import * as emailjs from "emailjs-com";
import { init } from "emailjs-com";

import { useTranslation } from "react-i18next";
import i18next from "i18next";

init("user_sezjNKeAo3Iqife7tGsUG");

const ContactUs = () => {
  const { t } = useTranslation();
  const isFrench = i18next.language === "FR" ? true : false;

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
    <div id="contact-us" className="contact-us-container">
      <div className="left-contact">
        <img alt="" src={ContactUsIcon} />
      </div>
      <div className="right-contact">
        <form onSubmit={submitForm}>
          <h1>{t("Contact Us")}</h1>
          <p>{t("Contact Us Blurb")}</p>
          <p className="fieldTag">{t("Full Name")}</p>
          <input name="name" placeholder={t("Full Name")} type="text" />
          <p className="fieldTag">{t("Email Address")}</p>
          <input name="email" placeholder={t("Email Address")} type="email" />
          <p className="fieldTag">{t("Subject")}</p>
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
            {t("Message")}
          </p>
          <textarea
            id="message"
            className="message"
            placeholder={t("MessageText")}
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
