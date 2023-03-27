import { useRef } from "react";
import { Mesh } from "three";
import { CustomShapeType } from "../../Types/CustomShapes";
import { CustomMeshStandardMaterial } from "../Material/CustomMeshStandardMaterial";

interface CustomTorusProps {
  // radius , tube , radialSegments , tubularSegments
  args: [number, number, number, number];
}
export const CustomTorus = (props: CustomTorusProps & CustomShapeType) => {
  const ref = useRef<Mesh>(null);

  return (
    <mesh ref={ref}>
      <torusGeometry args={props.args} />
      <CustomMeshStandardMaterial />
    </mesh>
  );
};
