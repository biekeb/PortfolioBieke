import React, { useState } from "react";
import project1 from "../images/finalshow.png";
import { getTopics } from "../data/dataservice";
import { Link, useLoaderData } from "react-router-dom";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export async function loader() {
  const topics = await getTopics();
  return { topics };
}

const MyProjects = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [selectedSkills, handleSkillClick] = useState(["See All"]); // Set "See All" as the default filter

  const filterSkills = ["See All", "React", "CSS", "node.js", "Blender"];

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

  const { topics } = useLoaderData();
  console.log(topics);
  console.log(topics.image);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeInAndSpring}
    >
      <div className="my-project">
        <div className="descr-item1">
          <h1 style={{ textAlign: "center" }}>
            <span style={{ color: "white" }}>MY</span> PROJECTS
          </h1>
        </div>

        {/* Filter section  */}
        <div className="skill-filter">
          {/* <span>Filter by Skills:</span> */}
          {filterSkills.map((skill) => (
            <span
              key={skill}
              id="project-filter"
              className={`skill-tag ${
                selectedSkills.includes(skill) ? "selected" : ""
              }`}
              onClick={() => handleSkillClick(skill)}
            >
              {skill}
            </span>
          ))}
        </div>
        <div className="my-project-flex">
          {topics
            .filter((topic) => {
              // If "See All" is selected, show all projects
              if (selectedSkills.includes("See All")) {
                return true;
              }

              // If no skills are selected, show all projects
              if (selectedSkills.length === 0) {
                return true;
              }
              // Show projects that have at least one selected skill
              return topic.skills.some((skill) =>
                selectedSkills.includes(skill.title)
              );
            })
            .map((topic) => (
              <div className="my-project-item">
                <div className="my-project-img">
                  <Link to={`/project/${topic.id}`}>
                    <img src={`${topic.image}`} alt="" />
                    <h2>{topic.title}</h2>
                    <p>{topic.description}</p>

                    <div className="project-skills">
                      {topic.skills.map((skill) => (
                        <span key={skill.id} className="skill-tag-2">
                          {skill.title}
                        </span>
                      ))}
                    </div>

                    <div className="project-btn">
                      <button>see more</button>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </motion.div>
  );
};

export default MyProjects;
