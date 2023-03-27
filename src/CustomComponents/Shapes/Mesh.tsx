import { CustomMeshProps } from "./Types";

export const CustomMesh = (props: CustomMeshProps) => {
  return <mesh position={props.position ?? [0, 0, 0]}>{props.children}</mesh>;
};
