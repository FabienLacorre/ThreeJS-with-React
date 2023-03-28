import { Canvas } from "@react-three/fiber";
import "./App.css";

import { MainScene } from "./Scenes/MainScene";

export const App = () => {
  return (
    <div className="App" style={{ width: "100vw", height: "100vh" }}>
      <Canvas flat linear>
        <MainScene />
      </Canvas>
    </div>
  );
};
