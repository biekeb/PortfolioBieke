import React from "react";
import ReactTypingEffect from "react-typing-effect";

const AboutMe = () => {
  return (
    <div className="about-me">
      <h1>
        Hi, I'm <span style={{ color: "white" }}>Bieke</span>
      </h1>
      <p>
        I'm a passionate frontend web developer student. I love turning creative
        ideas into interactive and user-friendly websites.
      </p>

      {/* <h2>Frontend WEB developer</h2> */}
      {/* 
      <ReactTypingEffect
        text={["Front-end developer", "UI/UX Designer", "Full Stack developer"]}
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
      <button></button> */}
    </div>
  );
};

export default AboutMe;
