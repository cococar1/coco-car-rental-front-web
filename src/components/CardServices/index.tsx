import {
  ContainerCardService,
  ContainerIcon,
  ContainerTextCardService,
} from "./cardServices.style";

interface CardServicesProps {
  SvgIcon: any;
  title: string;
  text: string;
}

const CardServices: React.FC<CardServicesProps> = ({
  SvgIcon,
  title,
  text,
}) => {
  return (
    <ContainerCardService>
      <ContainerTextCardService>
        <h2>{title}</h2>
        <p>{text}</p>
      </ContainerTextCardService>
      <ContainerIcon>{<SvgIcon />}</ContainerIcon>
  
    </ContainerCardService>
  );
};

export default CardServices;
