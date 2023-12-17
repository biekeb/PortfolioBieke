import React, { useState } from "react";
import lkicon from "../images/Icon awesome-linkedin-in.svg";
import ghicon from "../images/Icon awesome-github.svg";
import send from "../icons/send.svg";

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

  // Trigger animations when inView changes
  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form submitted successfully");
      } else {
        console.error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeInAndSpring}
      className="contact-me"
    >
      <h1 style={{ textAlign: "center" }}>
        <span style={{ color: "white" }}>SAY</span> HI
      </h1>

      {/* Contact Form */}
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="contact-picture">
            <img src={send} alt="icon" />
          </div>

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
    </motion.div>
  );
};

export default ContactMe;
