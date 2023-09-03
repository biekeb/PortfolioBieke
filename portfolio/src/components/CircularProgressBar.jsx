import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import AnimatedProgressProvider from "./AnimatedProgressProvider.js";
import { easeQuadInOut } from "d3-ease";

function CircularProgressBar({ percentage }) {
  return (
    <AnimatedProgressProvider
      valueStart={0}
      valueEnd={percentage}
      duration={2}
      easingFunction={easeQuadInOut}
    >
      {(value) => {
        const roundedValue = Math.round(value);
        return (
          <CircularProgressbar
            value={value}
            text={`${roundedValue}%`}
            strokeWidth={2}
            styles={buildStyles({
              textSize: "20px",
              pathColor: `red`,
              textColor: "#f88",
              trailColor: "grey",
              backgroundColor: "#3e98c7",
              pathTransition: "none",
            })}
          />
        );
      }}
    </AnimatedProgressProvider>
  );
}

export default CircularProgressBar;
