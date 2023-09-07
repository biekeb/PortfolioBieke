import React from "react";
import { motion, useAnimation } from "framer-motion";
import CircularProgressBar from "./CircularProgressBar";
import { useInView } from "react-intersection-observer";

function MySkill() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const fadeInAndSpring = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2,
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
      className="pogress"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeInAndSpring}
    >
      {" "}
      <div className="am-item1">
        <h1>MY SKILLS</h1>
      </div>
      <div className="my-project-flex">
        <h2>regular</h2>

        <div className="regular-flex">
          <div className="regular-flex-element">
            <CircularProgressBar percentage={90} />
            <p>HTML5</p>
          </div>
          <div className="regular-flex-element">
            <CircularProgressBar percentage={80} />
            <p>CSS3</p>
          </div>
          <div className="regular-flex-element">
            <CircularProgressBar percentage={80} />
            <p>JavaScript</p>
          </div>
          <div className="regular-flex-element">
            <CircularProgressBar percentage={80} />
            <p>React</p>
          </div>
          <div className="regular-flex-element">
            <CircularProgressBar percentage={75} />
            <p>Git</p>
          </div>
          <div className="regular-flex-element">
            <CircularProgressBar percentage={85} />
            <p>Photoshop</p>
          </div>
          <div className="regular-flex-element">
            <CircularProgressBar percentage={78} />
            <p>Illustrator</p>
          </div>
          <div className="regular-flex-element">
            <CircularProgressBar percentage={70} />
            <p>Indesign</p>
          </div>
          <div className="regular-flex-element">
            <CircularProgressBar percentage={75} />
            <p>Adobe XD</p>
          </div>
        </div>

        <h2>soft</h2>
        <div className="regular-flex">
          <div className="regular-flex-element">
            <CircularProgressBar percentage={70} />
            <p>problem solving</p>
          </div>
          <div className="regular-flex-element">
            <CircularProgressBar percentage={80} />
            <p>communi -cation</p>
          </div>
          <div className="regular-flex-element">
            <CircularProgressBar percentage={75} />
            <p>collaboration</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default MySkill;
