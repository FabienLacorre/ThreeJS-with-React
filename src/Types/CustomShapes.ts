export interface CustomMeshStandardMaterialType {
  metalness?: number;
  roughness?: number;
  wireframe?: boolean;
}

export interface CustomMeshType {
  position?: [number, number, number];
}

export type CustomShapeType = CustomMeshStandardMaterialType & CustomMeshType;
