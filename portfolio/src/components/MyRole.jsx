import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MyRole = () => {
  const { topic } = useLoaderData();

  const controls = useAnimation();
  const [ref, inView] = useInView();

  // Define animations
  const fadeInAndSpring = {
    hidden: { opacity: 0, y: 10 },
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
      <div className="project-myrole">
        <h2>My role</h2>
        <div className="myrole-flex">
          {topic.roles.map((myrole) => (
            <div key={myrole.id} className="myrole-div">
              <h3>{myrole.title}</h3>
              <p>{myrole.responsibilities}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default MyRole;
