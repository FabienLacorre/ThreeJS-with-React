import { CustomMeshStandardMaterialType } from "../../Types/CustomShapes";
import {
  DEFAULT_METALNESS,
  DEFAULT_ROUGHNESS,
  DEFAULT_WIREFRAME,
  DEFAULT_EMISSIVE,
  DEFAULT_COLOR
} from "./utils";

export const CustomMeshStandardMaterial = (
  props: CustomMeshStandardMaterialType
) => {
  return (
    <meshStandardMaterial
      metalness={props.metalness ?? DEFAULT_METALNESS}
      roughness={props.roughness ?? DEFAULT_ROUGHNESS}
      wireframe={props.wireframe ?? DEFAULT_WIREFRAME}
      emissive={DEFAULT_EMISSIVE}
      color={DEFAULT_COLOR}
    />
  );
};
