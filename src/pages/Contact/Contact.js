import React from "react";
import "./Contact.modules.scss";
import SocialMedia from "../../components/SocialMedia/SocialMedia";

const Contact = () => {
  return (
    <section className="contactPage">
      <div className="container">
        <h2>Contact Me</h2>
        <div className="row100">
          <div className="col">
            <div className="inputBox">
              <input type="text" name="" required="required" />
              <span className="contact-text">First Name</span>
              <span className="contact-line"></span>
            </div>
          </div>
          <div className="col">
            <div className="inputBox">
              <input type="text" name="" required="required" />
              <span className="contact-text">Last Name</span>
              <span className="contact-line"></span>
            </div>
          </div>
        </div>
        <div className="row100">
          <div className="col">
            <div className="inputBox">
              <input type="text" name="" required="required" />
              <span className="contact-text">Email</span>
              <span className="contact-line"></span>
            </div>
          </div>
          <div className="col">
            <div className="inputBox">
              <input type="text" name="" required="required" />
              <span className="contact-text">Mobile Number</span>
              <span className="contact-line"></span>
            </div>
          </div>
          <div className="row100">
            <div className="col">
              <div className="inputBox textarea">
                <textarea required="required"></textarea>
                <span className="contact-text">Type your Message here!</span>
                <span className="contact-line"></span>
              </div>
            </div>
          </div>
          <div className="row100">
            <div className="col">
              <input type="submit" value="Send" />
            </div>
          </div>
        </div>
        <SocialMedia />
      </div>
    </section>
  );
};

export default Contact;
