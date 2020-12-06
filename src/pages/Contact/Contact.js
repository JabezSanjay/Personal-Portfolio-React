import React, { useState } from "react";
import "./Contact.modules.scss";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import emailjs from "emailjs-com";

const Contact = () => {
  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    message: "",
  });
  const { firstName, lastName, email, mobileNumber, message } = details;

  const handleChange = (name) => (event) => {
    const value = event.target.value;
    setDetails({ ...details, [name]: value });
  };

  var templateParams = {
    firstName,
    lastName,
    email,
    message,
    mobileNumber,
  };

  const onSubmit = (e) => {
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
          window.location.reload(true);
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
                name="firstName"
                onChange={handleChange("firstName")}
                required
              />
              <span className="contact-text">First Name</span>
              <span className="contact-line"></span>
            </div>
          </div>
          <div className="col">
            <div className="inputBox">
              <input
                type="text"
                name="lastName"
                onChange={handleChange("lastName")}
                required
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
                type="email"
                name="email"
                onChange={handleChange("email")}
                required
              />
              <span className="contact-text">Email</span>
              <span className="contact-line"></span>
            </div>
          </div>
          <div className="col">
            <div className="inputBox">
              <input
                type="text"
                name="mobileNumber"
                onChange={handleChange("mobileNumber")}
                required
              />
              <span className="contact-text">Mobile Number</span>
              <span className="contact-line"></span>
            </div>
          </div>
          <div className="row100">
            <div className="col">
              <div className="inputBox textarea">
                <textarea
                  required
                  name="message"
                  onChange={handleChange("message")}
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
