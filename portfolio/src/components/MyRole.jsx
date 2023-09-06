import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const MyRole = () => {
  const { topic } = useLoaderData();

  return (
    <div className="project-myrole">
      <h2>My role</h2>
      <div className="myrole-flex">
        {topic.roles.map((myrole) => (
          <div key={myrole.id} className="myrole-div">
            <h3>{myrole.title}</h3>
            <p>{myrole.responsibilities}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyRole;
