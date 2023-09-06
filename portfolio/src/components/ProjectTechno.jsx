import React from "react";
import { useLoaderData } from "react-router-dom";

const ProjectTechno = () => {
  const { topic } = useLoaderData();

  return (
    <div className="project-technologies">
      <h2>Used technologies</h2>
      <div className="techno-flex">
        {topic.technologies.map((tech) => (
          <div className="technologies-element" key={tech.id}>
            <h3>{tech.title}</h3>
            <div className="technologies-flex">
              {tech.fdImg &&
                tech.fdImg.map((img, index) => (
                  <div key={index}>
                    <img src={img} alt={`${tech.title} ${index + 1}`} />
                  </div>
                ))}
              {tech["3DImg"] &&
                tech["3DImg"].map((img, index) => (
                  <div key={index}>
                    <img src={img} alt={`${tech.title} ${index + 1}`} />
                  </div>
                ))}
              {tech.gdImg &&
                tech.gdImg.map((img, index) => (
                  <div key={index}>
                    <img src={img} alt={`${tech.title} ${index + 1}`} />
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectTechno;
