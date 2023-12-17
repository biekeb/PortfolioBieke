import React from "react";
import { useLoaderData } from "react-router-dom";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ProjectObjectives = () => {
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
      <div className="project-objectives">
        <h1>
          <span style={{ color: "white" }}>Project</span> objectives
        </h1>
        <p>{topic.objective1}</p>
        <p>{topic.objective2} </p>
      </div>
    </motion.div>
  );
};

export default ProjectObjectives;
