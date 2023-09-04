import React from "react";
import react from "../images/react.png";
import css from "../images/css.png";
import html from "../images/html.png";
import javascript from "../images/js.png";
import maya from "../images/maya.png";
import unity from "../images/unity.png";
import photoshop from "../images/photoshop.png";
import adobexd from "../images/adobexd.png";

const ProjectTechno = () => {
  return (
    <div className="project-technologies">
      <h2>Technologies</h2>

      <div className="technologies-element">
        <h3>Frontend Development</h3>
        <div className="technologies-flex">
          <div>
            <img src={react} alt="" />
          </div>
          <div>
            <img src={css} alt="" />
          </div>
          <div>
            <img src={html} alt="" />
          </div>
          <div>
            <img src={javascript} alt="" />
          </div>
        </div>
      </div>

      <div className="technologies-element">
        <h3>3D Content</h3>
        <div className="technologies-flex">
          <div>
            <img src={maya} alt="" />
          </div>
          <div>
            <img src={unity} alt="" />
          </div>
        </div>
      </div>

      <div className="technologies-element">
        <h3>Grapich Design</h3>
        <div className="technologies-flex">
          <div>
            <img src={photoshop} alt="" />
          </div>
          <div>
            <img src={adobexd} alt="" />
          </div>
          <div>
            <img src={photoshop} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTechno;
