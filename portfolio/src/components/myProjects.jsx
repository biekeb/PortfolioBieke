import React from "react";
import project1 from "../images/finalshow.png";

const MyProjects = () => {
  return (
    <div className="my-project">
      <h1>MY PROJECTS</h1>
      <div className="my-project-img">
        <img src={project1} alt="" />
      </div>
      <div className="my-project-img">
        <a href="/project">
          <img src={project1} alt="" />
        </a>
      </div>
      <h1>MY SKILLS</h1>
    </div>
  );
};

export default MyProjects;
