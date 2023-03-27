import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

interface CustomBoxProps {
  args: [number, number, number];
}
export const CustomBox = ({ args }: CustomBoxProps) => {
  const ref = useRef<Mesh>(null);

  useFrame((state, delta, xrFrame) => {
    if (ref == null || ref.current == null) {
      return;
    }
    const speed = 0.003;
    ref.current.rotation.x += speed;
    ref.current.rotation.y += speed;
    ref.current.rotation.z += speed;
  });

  return (
    <mesh ref={ref}>
      <boxGeometry args={args} />
      <meshStandardMaterial />
    </mesh>
  );
};
