import { useEffect, useRef, useState } from "react";
import Introduction from "../components/introduction";
import { motion, useScroll } from "framer-motion";

//css
import "../styles/aboutMe.css";
import "../styles/myProject.css";
import "../styles/mySkills.css";

//components
import AboutMe from "../components/aboutMe";
import MyProjects from "../components/myProjects";
import MySkills from "../components/mySkills";
import ContactMe from "../components/contactMe";
import Footer from "../components/Footer";

export default function Home() {
  const ref = useRef();

  const { scrollYProgress } = useScroll();
  return (
    <>
      <header>
        <Introduction />
      </header>

      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />

      <div className="project-bakcground">
        <main>
          <AboutMe />
          <MyProjects />
          <MySkills />
          <ContactMe />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}
