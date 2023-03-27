import { useRef } from "react";
import { Mesh } from "three";

interface CustomTorusProps {
  // radius , tube , radialSegments , tubularSegments
  args: [number, number, number, number];
}
export const CustomTorus = ({ args }: CustomTorusProps) => {
  const ref = useRef<Mesh>(null);

  return (
    <mesh ref={ref}>
      <torusGeometry args={args} />
      <meshStandardMaterial
        metalness={0.5}
        roughness={0.2}
        emissive="black"
        color="white"
        // wireframe={true}
      />
    </mesh>
  );
};
