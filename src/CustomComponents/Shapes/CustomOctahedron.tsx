import { useRef } from "react";
import { Mesh } from "three";
import { CustomShapeType } from "../../Types/CustomShapes";
import { CustomMeshStandardMaterial } from "../Material/CustomMeshStandardMaterial";

interface CustomOctahedronProps {
  // radius , detail
  args: [number, number];
}
export const CustomOctahedron = (
  props: CustomOctahedronProps & CustomShapeType
) => {
  const ref = useRef<Mesh>(null);

  return (
    <mesh ref={ref} position={[1, 2, 3]}>
      <octahedronGeometry args={props.args} />
      <CustomMeshStandardMaterial />
    </mesh>
  );
};
