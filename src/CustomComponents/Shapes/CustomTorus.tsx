import { CustomShapeType, CustomTorusProps } from "./Types";
import { CustomMeshStandardMaterial } from "../Material/CustomMeshStandardMaterial";
import { CustomMesh } from "./Mesh";

export const CustomTorus = (props: CustomTorusProps & CustomShapeType) => {
  return (
    <CustomMesh position={props.position}>
      <torusGeometry args={props.args} />
      <CustomMeshStandardMaterial />
    </CustomMesh>
  );
};
