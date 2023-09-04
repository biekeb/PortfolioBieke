import React from "react";
import image from "../images/finalshow.png";

const ProjectDescription = () => {
  return (
    <div className="project-description">
      <h1>FINALSHOW</h1>
      <a href="">
        <img src={image} alt="" />
      </a>
      <p>go to webpage</p>
      <p>
        "FinalShow" is a comprehensive project that encompasses a recorded
        physical award show and an innovative interactive application. This
        initiative was undertaken as part of our college curriculum. The
        cornerstone of this project was the development of a web application
        that served as the central hub for the entire award show experience. The
        website's Landing Page was designed to provide a user-friendly, digital
        map and world view, showcasing the various activities and events
        scheduled for our college's Award Show.
      </p>
    </div>
  );
};

export default ProjectDescription;
