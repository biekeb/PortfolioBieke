import React, { useState } from "react";
import lkicon from "../images/Icon awesome-linkedin-in.svg";
import ghicon from "../images/Icon awesome-github.svg";
import emailicon from "../images/Icon simple-email.svg";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ContactMe = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  // Define animations
  const fadeInAndSpring = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };

  // Form state variables
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    email: "",
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct the email body
    const emailBody = `
      Name: ${formData.name}
      Description: ${formData.description}
      Email: ${formData.email}
    `;

    // You can send the email using a service like email.js or a server-side API.
    // Here, we'll just log the email body to the console for demonstration.
    console.log("Email Body:", emailBody);
  };

  return (
    <div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeInAndSpring}
    >
      <h1>CONTACT ME</h1>

      <div className="my-project">
        {/*  
        <div className="about-me">
          <div className="am-item1">
            <h1>CONTACT ME</h1>
          </div>
        </div>

        <div className="am-item2">
          <p>
            Let's connect! Feel free to reach out to me on email. Connect with
            me on LinkedIn and follow me on GitHub
          </p>
        </div>

        <div className="contact-flex">
          <div className="contact-flex-item">
            <a href="mailto:bieke.blt@gmail.com">
              <img src={emailicon} alt="email icon" />
            </a>
          </div>
          <div className="contact-flex-item">
            <a href="https://www.linkedin.com/in/bieke-bellot-b8b8a11b8/">
              <img src={lkicon} alt="linkedin icon" />
            </a>
          </div>
          <div className="contact-flex-item">
            <a href="https://github.com/biekeb">
              <img src={ghicon} alt="github icon" />
            </a>
          </div>
        </div> */}

        {/* Contact Form */}
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <button id="submit" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
