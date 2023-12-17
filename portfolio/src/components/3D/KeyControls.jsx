import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const KeyControls = ({ meshRef }) => {
  const originalPosition = useRef(new THREE.Vector3(0, 0, 0)); 

  // Event handler function for moving the mesh down and logging to the console
  const handleKeyPress = (event) => {
    if (event.key === "a" || event.key === "A") {
      if (meshRef.current) {
        meshRef.current.position.y += 0.01; 
        console.log("A key pressed. Mesh position:", meshRef.current.position);
      }
    }
  };

  // Event handler function for resetting the mesh position when the key is released
  const handleKeyRelease = (event) => {
    if (event.key === "a" || event.key === "A") {
      if (meshRef.current) {
        meshRef.current.position.copy(originalPosition.current);
        console.log(
          "A key released. Mesh position reset to:",
          originalPosition.current
        );
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    window.addEventListener("keyup", handleKeyRelease);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      window.removeEventListener("keyup", handleKeyRelease);
    };
  }, []);

  return null; 
};

export default KeyControls;
