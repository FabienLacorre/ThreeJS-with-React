import { CustomBoxProps, CustomShapeType } from "./Types";
import { CustomMeshStandardMaterial } from "../Material/CustomMeshStandardMaterial";
import { CustomMesh } from "./Mesh";

export const CustomBox = (props: CustomBoxProps & CustomShapeType) => {
  return (
    <CustomMesh position={props.position}>
      <boxGeometry args={props.args} />
      <CustomMeshStandardMaterial />
    </CustomMesh>
  );
};
