import React from "react";
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

  // Trigger animations when inView changes
  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeInAndSpring}
    >
      <div className="my-project">
        <div className="about-me">
          <div className="am-item1">
            <h1>CONTACT ME</h1>
          </div>
        </div>

        <div className="am-item2">
          <p>
            Let's connect! Feel free to reach out to me on
            <a href="mailto:bieke.blt@gmail.com">[email]</a>. Connect with me on
            <a href="https://www.linkedin.com/in/bieke-bellot-b8b8a11b8/">
              LinkedIn
            </a>
            | Follow me on <a href="https://github.com/biekeb">GitHub</a>
          </p>
        </div>

        <div className="contact-flex">
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

          <div className="contact-flex-item">
            <a href="https://www.linkedin.com/in/leah-kim-1b1a3b1b0/">
              <img src={emailicon} alt="email icon" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactMe;
