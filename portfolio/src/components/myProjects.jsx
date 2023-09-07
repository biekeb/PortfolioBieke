import React from "react";
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
          <h1>MY PROJECTS</h1>
        </div>
        {topics.map((topic) => (
          <div className="my-project-flex">
            <div className="my-project-item">
              <div className="my-project-img">
                <Link to={`/project/${topic.id}`}>
                  <img src={`${topic.image}`} alt="" />
                  <div class="image-overlay">
                    <p>{topic.title}</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default MyProjects;
