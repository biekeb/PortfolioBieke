import React from "react";
import skill from "../../icons/skill.svg";
import code from "../../icons/code.svg";
import cube from "../../icons/cube.svg";
import database from "../../icons/database.svg";
import design from "../../icons/design.svg";
import prototype from "../../icons/prototype.svg";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MySkills = () => {
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
      <h1 style={{ textAlign: "center" }}>
        <span style={{ color: "white" }}>MY</span> SKILLS
      </h1>
      <div className="skill-flex">
        <div className="skill-item">
          <img className="icon-skill" src={design} alt="" />

          <h2>UI/UX Design:</h2>
          <p>
            I have the ability to create user-friendly and visually appealing
            interfaces using design tools like Adobe XD and Figma
          </p>
        </div>

        <div className="skill-item">
          <img className="icon-skill" src={code} alt="" />

          <h2>Front-end Development:</h2>
          <p>
            I am proficient in front-end technologies such as HTML, CSS,
            JavaScript, and relevant frameworks and libraries like React,
            Vue.js, and Angular.
          </p>
        </div>

        <div className="skill-item">
          <img className="icon-skill" src={cube} alt="" />

          <h2>3D Games:</h2>
          <p>
            I have experience in 3D game development, and I'm skilled with game
            engines like Unity. I've worked on notable game projects.
          </p>
        </div>

        <div className="skill-item">
          <img className="icon-skill" src={database} alt="" />

          <h2>Backend Development:</h2>
          <p>
            I'm proficient in backend development, including working with
            server-side technologies, designing APIs, and handling databases.
            I'm familiar with languages like Node.js and kotlin.
          </p>
        </div>

        <div className="skill-item">
          <img className="icon-skill" src={prototype} alt="" />

          <h2>Prototyping</h2>
          <p>
            I create wireframes and interactive prototypes to visualize and test
            design concepts.
          </p>
        </div>

        <div className="skill-item">
          <img className="icon-skill" src={skill} alt="" />

          <h2>Soft Skills:</h2>
          <p>
            I possess strong soft skills, including communication,
            problem-solving, and teamwork, which are crucial in a professional
            environment.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default MySkills;
