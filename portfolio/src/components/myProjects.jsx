import React from "react";
import project1 from "../images/finalshow.png";
import { getTopics } from "../data/dataservice";
import { Link, useLoaderData } from "react-router-dom";

export async function loader() {
  const topics = await getTopics();
  return { topics };
}

const MyProjects = () => {
  const { topics } = useLoaderData();
  console.log(topics);
  console.log(topics.image);

  return (
    <div className="my-project">
      <div className="descr-item1">
        <h1>MY PROJECTS</h1>
      </div>
      {topics.map((topic) => (
        <div className="my-project-flex">
          <div className="my-project-item">
            <div className="my-project-img">
              <Link to={`/project/${topic.id}`}>
                <img src={`${topic.image}`} alt="" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyProjects;
