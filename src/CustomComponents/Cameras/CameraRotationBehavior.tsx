import { useFrame, useThree } from "@react-three/fiber";

export const CameraRotationBehavior = () => {
  const camera = useThree((state) => state.camera);

  useFrame(() => {
    // rotate camera around the origin
    camera.position.x = Math.cos(Date.now() / 1000) * 20;
    camera.position.z = Math.sin(Date.now() / 1000) * 20;
    camera.position.y = Math.sin(Date.now() / 1000) * 20;
    camera.lookAt(0, 0, 0);
  });

  return null;
};
