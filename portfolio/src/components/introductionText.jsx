import React from "react";
import ReactTypingEffect from "react-typing-effect";
import BB from "../images/BB.png";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import resume from "../images/Group 22.svg";

import me from "../images/fotocv.png";

const IntroductionText = () => {
  return (
    <div className="introduction-div">
      <div className="IntroductionText">
        <h1>Hello I am</h1>
        <h1 id="my-name">Bieke Bellot</h1>
        {/* <h2>Frontend WEB developer</h2> */}

        <ReactTypingEffect
          text={[
            "Front-end developer",
            "UI/UX Designer",
            "Full Stack developer",
          ]}
          speed={50}
          eraseDelay={700}
          typingDelay={1000}
          cursorRenderer={(cursor) => <h1>{cursor}</h1>}
          displayTextRenderer={(text, i) => {
            return (
              <h1>
                {text.split("").map((char, i) => {
                  const key = `${i}`;

                  return <span key={key}>{char}</span>;
                })}
              </h1>
            );
          }}
        />
        <br />
        <button>
          <img src={resume} alt="" />
        </button>
      </div>

      <div className="about-me-intro">
        <h1 id="my-name">ABOUT ME</h1>

        <p id="introduction-text">
          Hi, I'm Bieke, a passionate frontend web developer student. I love
          turning creative ideas into interactive and user-friendly websites.
          Currently pursuing my education in Erasmus Hogeschool Brussel, I'm
          eager to learn, collaborate, and contribute to the world of web
          development.
        </p>
      </div>

      <div className="picture-intro">
        <img id="pic-back" src={BB} alt="picture-intro" />
        <img src={me} alt="" />
      </div>
    </div>
  );
};

export default IntroductionText;
