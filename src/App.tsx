import { Canvas } from "@react-three/fiber";
import "./App.css";
import { CustomOrbitControls } from "./CustomComponents/Cameras/OrbitControls";
import { CustomAmbientLight } from "./CustomComponents/Lights/AmbientLight";
import { CustomDirectionalLight } from "./CustomComponents/Lights/DirectionalLight";
import { CustomBox } from "./CustomComponents/Shapes/Box";
import { CustomOctahedron } from "./CustomComponents/Shapes/Octahedron";
import { CustomTorus } from "./CustomComponents/Shapes/Torus";
// import { useControls } from "leva";

const LightsTest = () => {
  return (
    <>
      {/* X */}
      <CustomDirectionalLight color="red" position={[1, 0, 0]} />
      <CustomDirectionalLight color="blue" position={[-1, 0, 0]} />
      {/* Y */}
      {/* <CustomDirectionalLight color="yellow" position={[0, 10, 0]} /> */}
      {/* <CustomDirectionalLight color="green" position={[0, -10, 0]} /> */}
      {/* Z */}
      {/* <CustomDirectionalLight color="pink" position={[0, 0, 10]} /> */}
      {/* <CustomDirectionalLight color="brown" position={[0, 0, -10]} /> */}
    </>
  );
};

export const App = () => {
  return (
    <div className="App" style={{ width: "100vw", height: "100vh" }}>
      <Canvas flat linear>
        <color attach="background" args={["black"]} />
        {/* <CustomBox scale={[3, 3, 3]} /> */}

        {/* <CustomOctahedron scale={[2, 1]} /> */}
        <CustomTorus args={[3, 1, 50, 50]} />
        <CustomAmbientLight intensity={0.5} />
        <LightsTest />
        <CustomOrbitControls />
      </Canvas>
    </div>
  );
};
