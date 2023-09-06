import React from "react";

const AboutMe = () => {
  return (
    <div className="aboutme">
      <div className="about-me">
        <div className="am-item1">
          <h1>ABOUT ME</h1>
        </div>
      </div>

      <div className="am-item2">
        <p>
          Hi, I'm Bieke, a passionate frontend web developer student. I love
          turning creative ideas into interactive and user-friendly websites.
          Currently pursuing my education in Erasmus Hogeschool Brussel, I'm
          eager to learn, collaborate, and contribute to the world of web
          development.
        </p>
        <div className="box-gradient-flex">
          <div className="box-flex-item">
            <div className="box-gradient">
              <h3>
                UI UX
                <br />
                DESIGN
              </h3>
            </div>
          </div>

          <div className="box-flex-item">
            <div className="box-gradient">
              <h3>
                Frontend
                <br />
                Developer
              </h3>
            </div>
          </div>

          <div className="box-flex-item">
            <a
              href="https://example.com/path-to-your-resume/resume.pdf"
              download
            >
              <p>Download my resume</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
