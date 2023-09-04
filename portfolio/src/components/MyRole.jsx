import React from "react";

const MyRole = () => {
  return (
    <div className="project-myrole">
      <h2>My role</h2>
      <div className="myrole-flex">
        <div className="myrole-div">
          <h3>Developer</h3>
          <p>
            i was responsible for homepage and timetable to ensure that it
            delivered a seamless and engaging user experience.
          </p>
        </div>

        <div className="myrole-div">
          <h3>Designer</h3>
          <p>
            My design contributions played a vital role in creating an
            aesthetically pleasing and cohesive visual identity for the project.{" "}
          </p>
        </div>

        <div className="myrole-div">
          <h3>Scrum master</h3>
          <p>
            As the Scrum Master, I was tasked with orchestrating the Agile
            development process within our team.
          </p>
        </div>

        <div className="myrole-div">
          <h3>Team</h3>
          <p>
            This project was a collaborative effort among four team members.
            Teamwork and effective communication were at the core of our
            success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyRole;
