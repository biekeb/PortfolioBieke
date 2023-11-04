import React, { useState, useEffect, useRef } from "react";
import FOG from "vanta/dist/vanta.fog.min";
import * as THREE from "three";
import "../styles/introduction.css";
import IntroductionText from "./introductionText";

// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

const Introduction = (props) => {
  // const [vantaEffect, setVantaEffect] = useState(null);
  // const myRef = useRef(null);
  // useEffect(() => {
  //   if (!vantaEffect) {
  //     setVantaEffect(
  //       FOG({
  //         el: myRef.current,
  //         THREE: THREE, // use a custom THREE when initializing
  //         mouseControls: true,
  //         touchControls: true,
  //         gyroControls: false,
  //         minHeight: 200.0,
  //         minWidth: 200.0,
  //         highlightColor: 0xb30000,
  //         midtoneColor: 0xe63820,
  //         lowlightColor: 0xff0000,
  //         baseColor: 0x252525,
  //       })
  //     );
  //   }
  //   return () => {
  //     if (vantaEffect) vantaEffect.destroy();
  //   };
  // }, [vantaEffect]);
  return (
    <div className="vangaeffect" /* ref={myRef */>
      <IntroductionText />
    </div>
  );
};
export default Introduction;
