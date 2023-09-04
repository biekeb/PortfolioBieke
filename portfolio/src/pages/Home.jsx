import { useEffect, useRef, useState } from "react";
import Introduction from "../components/introduction";
import AboutMe from "../components/aboutMe";
import MyProjects from "../components/myProjects";
import MySkills from "../components/mySkills";
import ContactMe from "../components/contactMe";
import { motion, useScroll } from "framer-motion";
import Footer from "../components/Footer";

export default function Home() {
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
      <main>
        <AboutMe />
        <MyProjects />
        <MySkills />
        <ContactMe />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
