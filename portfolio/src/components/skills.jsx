import React, { useState, useEffect } from "react";

const Skills = () => {
  return (
    <div className="skill-flex">
      <h1> MY SKILLS</h1>
      <div className="skill-item">
        <h2>UI/UX Design:</h2>
        <p>
          I have the ability to create user-friendly and visually appealing
          interfaces using design tools like Adobe XD and Figma
        </p>

        {/* <img style={{ width: "100%", height: "10px" }} src={pogress} alt="" /> */}
      </div>

      <div className="skill-item">
        <h2>Front-end Development:</h2>
        <p>
          I am proficient in front-end technologies such as HTML, CSS,
          JavaScript, and relevant frameworks and libraries like React, Vue.js,
          and Angular.
        </p>
        {/* <img style={{ width: "100%", height: "10px" }} src={pogress} alt="" /> */}
      </div>

      <div className="skill-item">
        <h2>3D Games:</h2>
        <p>
          I have experience in 3D game development, and I'm skilled with game
          engines like Unity. I've worked on notable game projects.
        </p>
        {/* <img style={{ width: "100%", height: "10px" }} src={pogress} alt="" /> */}
      </div>

      <div className="skill-item">
        <h2>Database Management</h2>
        <p>
          I'm familiar with database systems, including SQL and NoSQL, and can
          design and manage databases for web applications.
        </p>
        {/* <img style={{ width: "100%", height: "10px" }} src={pogress} alt="" /> */}
      </div>

      <div className="skill-item">
        <h2>Prototyping</h2>
        <p>
          I create wireframes and interactive prototypes to visualize and test
          design concepts.
        </p>
        {/* <img style={{ width: "100%", height: "10px" }} src={pogress} alt="" /> */}
      </div>

      <div className="skill-item">
        <h2>Soft Skills:</h2>
        <p>
          I possess strong soft skills, including communication,
          problem-solving, and teamwork, which are crucial in a professional
          environment.
        </p>
        {/* <img style={{ width: "100%", height: "10px" }} src={pogress} alt="" /> */}
      </div>
    </div>
  );
};

export default Skills;
