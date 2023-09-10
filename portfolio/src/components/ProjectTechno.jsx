import React from "react";
import { useLoaderData } from "react-router-dom";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ProjectTechno = () => {
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
      <div className="project-technologies">
        <h2>Used technologies</h2>
        <div className="techno-flex">
          {topic.technologies.map((tech) => (
            <div className="technologies-element" key={tech.id}>
              <h3>{tech.title}</h3>
              <div className="technologies-flex">
                {tech.fdImg &&
                  tech.fdImg.map((img, index) => (
                    <div key={index}>
                      <img src={img} alt={`${tech.title} ${index + 1}`} />
                    </div>
                  ))}
                {tech["3DImg"] &&
                  tech["3DImg"].map((img, index) => (
                    <div key={index}>
                      <img src={img} alt={`${tech.title} ${index + 1}`} />
                    </div>
                  ))}
                {tech.gdImg &&
                  tech.gdImg.map((img, index) => (
                    <div key={index}>
                      <img src={img} alt={`${tech.title} ${index + 1}`} />
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectTechno;
