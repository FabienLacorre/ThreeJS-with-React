import { CustomBox } from "../CustomComponents/Shapes/CustomBox";
import { CustomTorus } from "../CustomComponents/Shapes/CustomTorus";
import { CustomAmbientLight } from "../CustomComponents/Lights/CustomAmbientLight";
import { CustomDirectionalLight } from "../CustomComponents/Lights/CustomDirectionalLight";
import { useInputKeyCatch } from "../Utils/KeyManagement";
import { useFrame, useThree } from "@react-three/fiber";

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

export const MainScene = () => {
  const { camera } = useThree();
  const { key } = useInputKeyCatch();

  useFrame(() => {
    console.log("key", key);
    let fixedCameraPositionZ = Number.parseFloat(camera.position.z.toFixed(2));
    let fixedCameraPositionX = Number.parseFloat(camera.position.x.toFixed(2));
    let fixedCameraPositionY = Number.parseFloat(camera.position.y.toFixed(2));

    if (key === "z") {
      fixedCameraPositionZ -= 0.1;
    }
    if (key === "s") {
      fixedCameraPositionZ += 0.1;
    }
    if (key === "q") {
      fixedCameraPositionX -= 0.1;
    }
    if (key === "d") {
      fixedCameraPositionX += 0.1;
    }
    if (key === "w") {
      fixedCameraPositionY -= 0.1;
    }
    if (key === "x") {
      fixedCameraPositionY += 0.1;
    }
    if (key === "a") {
      camera.rotateY(0.05);
    }
    if (key === "e") {
      camera.rotateY(-0.05);
    }

    camera.position.x = fixedCameraPositionX;
    camera.position.y = fixedCameraPositionY;
    camera.position.z = fixedCameraPositionZ;
    // camera.lookAt(
    //   fixedCameraPositionX,
    //   fixedCameraPositionY,
    //   fixedCameraPositionZ
    // );
  });

  return (
    <>
      <axesHelper scale={2} />
      <color attach="background" args={["black"]} />
      <CustomTorus
        args={[3, 1, 50, 50]}
        position={[0, 0, 10]}
        metalness={0.9}
        roughness={0}
      />
      <CustomTorus
        args={[3, 1, 50, 50]}
        position={[0, 0, -10]}
        metalness={0.9}
        roughness={0}
      />
      <CustomBox
        args={[1, 1, 1]}
        position={[0, 0, 0]}
        metalness={0.9}
        roughness={0}
      />
      <CustomBox
        args={[1, 1, 1]}
        position={[2, 0, 0]}
        metalness={0.9}
        roughness={0}
      />
      <CustomBox
        args={[1, 1, 1]}
        position={[0, 2, 0]}
        metalness={0.9}
        roughness={0}
      />
      <CustomBox
        args={[1, 1, 1]}
        position={[0, 0, 2]}
        metalness={0.9}
        roughness={0}
      />
      <CustomBox
        args={[1, 1, 1]}
        position={[0, 0, -2]}
        metalness={0.9}
        roughness={0}
      />
      <CustomBox
        args={[1, 1, 1]}
        position={[0, -2, 0]}
        metalness={0.9}
        roughness={0}
      />
      <CustomBox
        args={[1, 1, 1]}
        position={[-2, 0, 0]}
        metalness={0.9}
        roughness={0}
      />
      <CustomAmbientLight intensity={0.5} />
      <LightsTest />
      {/* <CustomOrbitControls /> */}
    </>
  );
};
