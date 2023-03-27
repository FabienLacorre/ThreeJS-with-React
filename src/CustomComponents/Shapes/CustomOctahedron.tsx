import { useRef } from "react";
import { Mesh } from "three";
import { CustomOctahedronProps, CustomShapeType } from "./Types";
import { CustomMeshStandardMaterial } from "../Material/CustomMeshStandardMaterial";
import { CustomMesh } from "./Mesh";

export const CustomOctahedron = (
  props: CustomOctahedronProps & CustomShapeType
) => {
  const ref = useRef<Mesh>(null);

  return (
    <CustomMesh ref={ref}>
      <octahedronGeometry args={props.args} />
      <CustomMeshStandardMaterial />
    </CustomMesh>
  );
};
