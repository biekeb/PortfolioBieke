import { useEffect, useRef, useState } from "react";
import Introduction from "../components/introduction";
import AboutMe from "../components/aboutMe";
import MyProjects from "../components/myProjects";
import MySkills from "../components/mySkills";
import ContactMe from "../components/contactMe";

export default function Home() {
  return (
    <div>
      {/* <Introduction /> */}
      <AboutMe />
      <MyProjects />
      <MySkills />
      <ContactMe />
    </div>
  );
}
