import {
  Text,
  Html,
  ContactShadows,
  PresentationControls,
  Float,
  Environment,
  useGLTF,
  OrbitControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useLoaderData } from "react-router-dom";

export default function ProjectLaptop() {
  const { topic } = useLoaderData();

  const computer = useGLTF(
    "https://threejs-journey.com/resources/models/macbook_model.gltf"
  );
  console.log("topic.link");

  console.log(topic.link);

  return (
    <Canvas className="canvas" >
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
            scale={1}
          >
            {/* <Model> */}
            <Html
              transform
              wrapperClass="htmlScreen"
              distanceFactor={1.17}
              position={[-0.4, 1.2, -1.4]}
              rotation-x={-0.256}
            >
              <iframe src={topic.link} />
            </Html>
          </primitive>
          {/* </Model> */}
        </Float>
      </PresentationControls>
      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />{" "}
    </Canvas>
  );
}
