import React from "react";
import CircularProgressBar from "./CircularProgressBar";

function MySkill() {
  const percentage1 = 50;
  const percentage2 = 30;

  return (
    <div className="pogress">
      <h2>regular</h2>
      <div className="regular-flex-container">
        <div className="regular-flex">
          <div className="regular-flex-element">
            <CircularProgressBar percentage={90} />
            <p>HTML5</p>
          </div>
          <div className="regular-flex-element">
            <CircularProgressBar percentage={80} />
            <p>CSS3</p>
          </div>
          <div className="regular-flex-element">
            <CircularProgressBar percentage={80} />
            <p>JavaScript</p>
          </div>
          <div className="regular-flex-element">
            <CircularProgressBar percentage={80} />
            <p>React</p>
          </div>
          <div className="regular-flex-element">
            <CircularProgressBar percentage={75} />
            <p>Git</p>
          </div>
          <div className="regular-flex-element">
            <CircularProgressBar percentage={85} />
            <p>Photoshop</p>
          </div>
          <div className="regular-flex-element">
            <CircularProgressBar percentage={78} />
            <p>Illustrator</p>
          </div>
          <div className="regular-flex-element">
            <CircularProgressBar percentage={70} />
            <p>Indesign</p>
          </div>
          <div className="regular-flex-element">
            <CircularProgressBar percentage={75} />
            <p>Adobe XD</p>
          </div>
        </div>
      </div>
      <h2>soft</h2>
      <div className="regular-flex-container">
        <div className="regular-flex">
          <div className="regular-flex-element">
            <CircularProgressBar percentage={70} />
            <p>Problem solving</p>
          </div>
          <div className="regular-flex-element">
            <CircularProgressBar percentage={80} />
            <p>Commtion</p>
          </div>
          <div className="regular-flex-element">
            <CircularProgressBar percentage={75} />
            <p>Collovration</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MySkill;
