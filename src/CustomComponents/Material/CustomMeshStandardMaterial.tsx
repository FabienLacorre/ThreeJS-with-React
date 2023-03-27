import {
  DEFAULT_METALNESS,
  DEFAULT_ROUGHNESS,
  DEFAULT_WIREFRAME,
  DEFAULT_EMISSIVE,
  DEFAULT_COLOR,
} from "./utils";

export interface CustomMeshStandardMaterialProps {
  metalness?: number;
  roughness?: number;
  wireframe?: boolean;
}

export const CustomMeshStandardMaterial = (
  props: CustomMeshStandardMaterialProps
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
