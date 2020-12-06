import React, { useState } from "react";
import "./Contact.modules.scss";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import emailjs from "emailjs-com";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [message, setMessage] = useState("");

  var templateParams = {
    firstName,
    lastName,
    email,
    message,
    mobileNumber,
  };

  const onSubmit = () => {
    emailjs
      .send(
        "service_32f7p9t",
        "template_go0nyfk",
        templateParams,
        "user_tcbl8oIpC05Vp0aHDD3a6"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <section className="contactPage">
      <div className="container">
        <h2>
          Contact <span>Me</span>
        </h2>
        <div className="row100">
          <div className="col">
            <div className="inputBox">
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required="required"
              />
              <span className="contact-text">First Name</span>
              <span className="contact-line"></span>
            </div>
          </div>
          <div className="col">
            <div className="inputBox">
              <input
                type="text"
                name=""
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required="required"
              />
              <span className="contact-text">Last Name</span>
              <span className="contact-line"></span>
            </div>
          </div>
        </div>
        <div className="row100">
          <div className="col">
            <div className="inputBox">
              <input
                type="text"
                name=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required="required"
              />
              <span className="contact-text">Email</span>
              <span className="contact-line"></span>
            </div>
          </div>
          <div className="col">
            <div className="inputBox">
              <input
                type="text"
                name=""
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                required="required"
              />
              <span className="contact-text">Mobile Number</span>
              <span className="contact-line"></span>
            </div>
          </div>
          <div className="row100">
            <div className="col">
              <div className="inputBox textarea">
                <textarea
                  required="required"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <span className="contact-text">Type your Message here!</span>
                <span className="contact-line"></span>
              </div>
            </div>
          </div>
          <div className="row100">
            <div className="col">
              <input type="submit" value="Send" onClick={onSubmit} />
            </div>
          </div>
        </div>
        <SocialMedia />
      </div>
    </section>
  );
};

export default Contact;
