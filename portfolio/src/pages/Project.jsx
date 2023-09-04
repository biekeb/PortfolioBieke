import { useEffect, useRef, useState } from "react";
import "../styles/project.css";
import { motion, useScroll } from "framer-motion";

import MyRole from "../components/MyRole";
import ProjectDescription from "../components/ProjectDescription";
import ProjectTechno from "../components/ProjectTechno";

export default function Projects() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <button>
        <a href="/">Back</a>
      </button>
      <div className="project-bakcground">
        <div className="project">
          <main>
            <ProjectDescription />
            <MyRole />
            <ProjectTechno />
          </main>

          <div className="project-objectives">
            <h2>Project objectibes</h2>
          </div>
        </div>
      </div>
    </>
  );
}
