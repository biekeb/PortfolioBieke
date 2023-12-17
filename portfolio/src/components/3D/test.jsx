import {
  Text,
  Html,
  ContactShadows,
  PresentationControls,
  Float,
  Environment,
  useGLTF,
  OrbitControls,
  Box,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import pic from "../../images/vsc.png";
import Model from "./Scene";
import Room from "./Room";

export default function Test() {
  const computer = useGLTF(
    "https://threejs-journey.com/resources/models/macbook_model.gltf"
  );

  return (
    <Canvas className="canvas">
      <ambientLight intensity={1} />
      {/* <OrbitControls /> */}
      {/* <color args={["#241a1a"]} attach="background" /> */}
      <PresentationControls
        global
        rotation={[0.13, -0.5, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}
      >
        <Float rotationIntensity={0.4}>
          <rectAreaLight
            width={2.5}
            height={1.65}
            intensity={65}
            color={"BLUE"}
            rotation={[-0.1, Math.PI, 0]}
            position={[0, 0.55, -1.15]}
          />

          <primitive
            object={computer.scene}
            position-y={-1.2}
            rotation-x={0.13}
            scale={1.3}
          >
            {/* <Model> */}
            <Html
              transform
              wrapperClass="htmlScreen"
              distanceFactor={1.17}
              position={[0, 1.56, -1.4]}
              rotation-x={-0.256}
            >
              {/* <h1>About me</h1>
              <p style={{ fontSize: "30pt" }}>
                Hi, I'm Bieke, a passionate frontend web developer student. I
                love turning creative ideas into interactive and user-friendly
                websites. Currently pursuing my education in Erasmus Hogeschool
                Brussel, I'm eager to learn, collaborate, and contribute to the
                world of web development.
              </p> */}
              <iframe src={pic} />
            </Html>
          </primitive>
          {/* </Model> */}
        </Float>
      </PresentationControls>
      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />{" "}
    </Canvas>
  );
}
