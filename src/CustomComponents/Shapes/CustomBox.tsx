import { useRef } from "react";
import { Mesh } from "three";
import { CustomBoxProps, CustomShapeType } from "./Types";
import { CustomMeshStandardMaterial } from "../Material/CustomMeshStandardMaterial";
import { CustomMesh } from "./Mesh";

export const CustomBox = (props: CustomBoxProps & CustomShapeType) => {
  const ref = useRef<Mesh>(null);

  return (
    <CustomMesh ref={ref}>
      <boxGeometry args={props.args} />
      <CustomMeshStandardMaterial />
    </CustomMesh>
  );
};
