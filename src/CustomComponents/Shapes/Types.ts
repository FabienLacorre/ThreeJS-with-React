import { CustomMeshStandardMaterialProps } from "../Material/CustomMeshStandardMaterial";

export interface CustomMeshProps {
  position?: [number, number, number];
  children?: JSX.Element[];
  ref?: any;
}

/* args: radius , tube , radialSegments , tubularSegments */
export interface CustomTorusProps {
  args: [number, number, number, number];
}

/* args: radius , detail */
export interface CustomOctahedronProps {
  args: [number, number];
}

/* args: width , height , depth */
export interface CustomBoxProps {
  args: [number, number, number];
}

export type CustomShapeType = CustomMeshStandardMaterialProps & CustomMeshProps;
