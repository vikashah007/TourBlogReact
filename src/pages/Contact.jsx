// src/pages/Contact.jsx
import React from "react";
// import './Contact.css';
import { IoIosContact } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="contact">
      <div className="ContactForm">
        <div className="inputbox">
          <label>Name</label>
          <input type="text" placeholder="Full Name" />
        </div>
        <div className="emailPhn">
          <div className="inputbox">
            <label>Email</label>
            <input type="text" placeholder="Full Name" />
          </div>
          <div className="inputbox">
            <label>Phone</label>
            <input type="text" placeholder="Full Name" />
          </div>
        </div>
        <div className="inputbox">
          <label>Message</label>
          <textarea id="message" name="message" rows="3" cols="30" placeholder="Enter your message here..."></textarea>
        </div>
      </div>
      <div className="CantactDesc">
        <div>
          <h3>Contact</h3>
        </div>
        <div>
          <p>
            Contact us for questions, technical assistance,<br/> or collaboration
            opportunities via the contact<br/> information provided.
          </p>
        </div>
        <div>
          <div className="contactIcon">
            <IoIosContact />
            <p>+1 9821032901</p>
          </div>
          <div className="contactIcon">
            <MdEmail />
            <p>abc@gamil.com</p>
          </div>
          <div className="contactIcon">
            <FaLocationDot />
            <p>Ms. Street ,4 wheeli,sydney</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
