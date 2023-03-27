interface CustomAmbientLightProps {
    intensity: number;
  }
  export const CustomAmbientLight = ({ intensity }: CustomAmbientLightProps) => {
    return <ambientLight intensity={intensity} />;
  };