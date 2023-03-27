import { useRef } from "react";
import { Mesh } from "three";
import { CustomShapeType, CustomTorusProps } from "./Types";
import { CustomMeshStandardMaterial } from "../Material/CustomMeshStandardMaterial";
import { CustomMesh } from "./Mesh";

export const CustomTorus = (props: CustomTorusProps & CustomShapeType) => {
  const ref = useRef<Mesh>(null);

  return (
    <CustomMesh ref={ref} position={props.position}>
      <torusGeometry args={props.args} />
      <CustomMeshStandardMaterial />
    </CustomMesh>
  );
};
