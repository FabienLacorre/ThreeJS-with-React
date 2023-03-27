import { Canvas } from "@react-three/fiber";
import "./App.css";
import { CustomOrbitControls } from "./CustomComponents/Cameras/CustomOrbitControls";
import { CustomAmbientLight } from "./CustomComponents/Lights/CustomAmbientLight";
import { CustomDirectionalLight } from "./CustomComponents/Lights/CustomDirectionalLight";
import { CustomTorus } from "./CustomComponents/Shapes/CustomTorus";
// import { useControls } from "leva";

const LightsTest = () => {
  return (
    <>
      {/* X */}
      <CustomDirectionalLight color="red" position={[1, 0, 0]} />
      <CustomDirectionalLight color="blue" position={[-1, 0, 0]} />
      {/* Y */}
      <CustomDirectionalLight color="yellow" position={[0, 1, 0]} />
      <CustomDirectionalLight color="green" position={[0, -1, 0]} />
      {/* Z */}
      <CustomDirectionalLight color="pink" position={[0, 0, 1]} />
      <CustomDirectionalLight color="brown" position={[0, 0, -1]} />
    </>
  );
};

export const App = () => {
  return (
    <div className="App" style={{ width: "100vw", height: "100vh" }}>
      <Canvas flat linear>
        <color attach="background" args={["black"]} />

        <CustomTorus args={[3, 1, 50, 50]} />
        <CustomAmbientLight intensity={0.5} />
        <LightsTest />
        <CustomOrbitControls />
      </Canvas>
    </div>
  );
};
