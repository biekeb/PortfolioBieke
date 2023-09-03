import { useEffect, useRef, useState } from "react";
import Introduction from "../components/introduction";
import AboutMe from "../components/aboutMe";
import MyProjects from "../components/myProjects";
import MySkills from "../components/mySkills";
import ContactMe from "../components/contactMe";
import { motion, useScroll } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />

      {/* <Introduction /> */}
      <AboutMe />
      <MyProjects />
      <MySkills />
      <ContactMe />
    </>
  );
}
