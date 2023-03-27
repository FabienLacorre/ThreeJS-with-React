import { useRef } from "react";
import { Mesh } from "three";
import { CustomShapeType } from "../../Types/CustomShapes";
import { CustomMeshStandardMaterial } from "../Material/CustomMeshStandardMaterial";

interface CustomBoxProps {
  // width , height , depth
  args: [number, number, number];
}
export const CustomBox = (props: CustomBoxProps & CustomShapeType) => {
  const ref = useRef<Mesh>(null);

  return (
    <mesh ref={ref}>
      <boxGeometry args={props.args} />
      <CustomMeshStandardMaterial />
    </mesh>
  );
};
