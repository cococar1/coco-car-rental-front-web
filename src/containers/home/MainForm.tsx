import {
  ContainerBackground,
  ContainerMainFrom,
  ContainerMainFromImage,
} from "./mainfrom.styles";

interface MainFormProps {}

const MainForm: React.FC<MainFormProps> = () => {
  return (
    <ContainerMainFrom>
      <ContainerMainFromImage></ContainerMainFromImage>
      <ContainerBackground></ContainerBackground>
    </ContainerMainFrom>
  );
};

export default MainForm;
