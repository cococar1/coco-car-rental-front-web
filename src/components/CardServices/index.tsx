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
      {/* <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 96C74.5097 96 96 74.5097 96 48C96 21.4903 74.5097 0 48 0C21.4903 0 0 21.4903 0 48C0 74.5097 21.4903 96 48 96Z" fill="white"/>
</svg> */}
    </ContainerCardService>
  );
};

export default CardServices;
