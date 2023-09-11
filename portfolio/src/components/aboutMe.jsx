import React from "react";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutMe = () => {
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
      <div className="aboutme">
        <div className="about-me">
          <div className="am-item1">
            <h1>ABOUT ME</h1>
          </div>
        </div>

        <div className="am-item2">
          <p>
            Hi, I'm Bieke, a passionate frontend web developer student. I love
            turning creative ideas into interactive and user-friendly websites.
            Currently pursuing my education in Erasmus Hogeschool Brussel, I'm
            eager to learn, collaborate, and contribute to the world of web
            development.
          </p>
          <div className="box-gradient-flex">
            <div className="box-flex-item">
              <div className="box-gradient">
                <h3>
                  UI UX
                  <br />
                  DESIGN
                </h3>
              </div>
            </div>

            <div className="box-flex-item">
              <div className="box-gradient">
                <h3>
                  Frontend
                  <br />
                  Developer
                </h3>
              </div>
            </div>

            <div className="box-flex-item">
              <a href="https://online.flippingbook.com/view/163875047/">
                <p>View my resume</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutMe;
