import { useRef } from "react";
import { Mesh } from "three";

interface CustomOctahedronProps {
  args: [number, number];
}
export const CustomOctahedron = ({ args }: CustomOctahedronProps) => {
  const ref = useRef<Mesh>(null);

  return (
    <mesh ref={ref}>
      <octahedronGeometry args={args} />
      <meshStandardMaterial
        emissive="black"
        color="white"
        // wireframe={true}
      />
    </mesh>
  );
};
