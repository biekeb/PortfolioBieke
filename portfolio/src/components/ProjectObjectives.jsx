import React from "react";
import { useLoaderData } from "react-router-dom";

const ProjectObjectives = () => {
  const { topic } = useLoaderData();
  return (
    <div className="project-objectives">
      <h2>Project objectives</h2>
      <p>{topic.objective1}</p>
      <p>{topic.objective2} </p>
    </div>
  );
};

export default ProjectObjectives;
