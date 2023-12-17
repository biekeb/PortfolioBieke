import { useEffect, useRef, useState } from "react";
import "../styles/project.css";
import { motion, useScroll } from "framer-motion";

import { useLoaderData } from "react-router-dom";
import { getTopic } from "../data/dataservice";

import MyRole from "../components/project/MyRole";
import ProjectDescription from "../components/project/ProjectDescription";
import ProjectTechno from "../components/project/ProjectTechno";
import Footer from "../components/Footer";
import ProjectObjectives from "../components/project/ProjectObjectives";

export async function loader({ params }) {
  const topic = await getTopic(params.id);
  console.log(params.id);
  console.log(topic);

  return { topic };
}

export default function Projects() {
  const { topic } = useLoaderData();
  console.log(topic);

  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <div>
        <button className="back-button">
          <a href="/">Back</a>
        </button>

        <div className="project">
          <main>
            <ProjectDescription />

            <MyRole />
            <ProjectTechno />
            <ProjectObjectives />
          </main>
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}
