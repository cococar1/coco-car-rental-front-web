import Image from "next/image";
import { ContainerService } from "./service.style";

interface ServiceProps {
  //   SVGElement: React.ReactElement;
  SVGElement: string;

  tittle: string;
  description: string;
}

const Service: React.FC<ServiceProps> = ({
  SVGElement,
  tittle,
  description,
}: ServiceProps) => {
  return (
    <ContainerService>
      <div>
        <Image src={SVGElement} alt={SVGElement} width={60} height={60}></Image>
      </div>
      <h3>{tittle}</h3>
      <p>{description}</p>
    </ContainerService>
  );
};

export default Service;
