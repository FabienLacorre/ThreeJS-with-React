interface CustomDirectionalLightProps {
  color: string;
  position: [number, number, number];
}
export const CustomDirectionalLight = ({
  color,
  position,
}: CustomDirectionalLightProps) => {
  return <directionalLight color={color} position={position} />;
};
