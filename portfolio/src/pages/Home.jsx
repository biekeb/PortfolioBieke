import { useEffect, useRef, useState } from "react";
import Introduction from "../components/introduction";
import { motion, useScroll } from "framer-motion";

//css
import "../styles/aboutMe.css";
import "../styles/myProject.css";
import "../styles/mySkills.css";
import "../styles/main.css";

//components
import MyProjects from "../components/myProjects";
import MySkills from "../components/3D/mySkills";
import ContactMe from "../components/contactMe";
import Footer from "../components/Footer";
import Test from "../components/3D/test";
import AboutMe from "../components/3D/aboutMe";
import Room from "../components/3D/Room";

export default function Home() {
  const ref = useRef();

  const { scrollYProgress } = useScroll();
  return (
    <>
      <header>
        <div className="header-flex">
          <div className="header-item">
            <AboutMe />
          </div>
          <div className="header-item">
            <Test />
          </div>
        </div>
        <a class="mouseDown" href="#section1" title="Scroll Down">
          <span></span>
        </a>
      </header>
      <main>
        <MySkills />
        <MyProjects />

        <ContactMe />
      </main>

      <footer>
        <Footer />
      </footer>

      {/*  
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="project-bakcground">
        <main>
          <AboutMe />
          <MyProjects />
          <Skills />
          <ContactMe />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>{" "}
      */}
    </>
  );
}
