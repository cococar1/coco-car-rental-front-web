import CheckIcon from "@/assets/svgs/checkIcon";
import { ContainerFeature } from "./style";

interface FeatureProps {
  text: string;
}

const Feature: React.FC<FeatureProps> = ({ text }) => {
  return (
    <ContainerFeature>
      <CheckIcon />
      <p>{text.length > 35 ? text.slice(0, 35) +"...": text}</p>
    </ContainerFeature>
  );
};

export default Feature;
