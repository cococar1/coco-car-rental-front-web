import ContainerDetailData from "@/components/containerDetailData";
import {
  ContainerDetails,
  ContainerDetailsContent,
  DetailImageContent,
  DetailsContent,
} from "./details.style";
import DocumentIcon from "@/assets/svgs/documentIcon";
import SearchIcon from "@/assets/svgs/searchIcon";
import ConfigIcon from "@/assets/svgs/configIcon";
import InfoIcon from "@/assets/svgs/infoIcon";
import UsersIcon from "@/assets/svgs/usersIcon";
import CalculatorIcon from "@/assets/svgs/calculatorIcon";
import Image from "next/image";
import RoadLine from "/public/svg/road-line.svg";
import CardLine from "/public/svg/auto-line.svg";

interface DetailsProps {}
const arrayDataDetailIconLeft = [
  {
    title: "Propuesta de variedad de autos",
    description: "Amplia gama de vehículos para cada ocasión y presupuesto.",
    svgIcon: DocumentIcon,
    position: "left",
  },
  {
    title: "Búsqueda personalizada",
    description:
      "Nuestra poderosa búsqueda facilita la personalización de sus resultados para que solo vea los autos y las funciones que le interesan.",
    svgIcon: SearchIcon,
    position: "left",
  },
  {
    title: "Innovación contínua",
    description:
      "Nuestro equipo está constantemente desarrollando nuevas funciones que simplifican el proceso de reserva de automóviles.",
    svgIcon: ConfigIcon,
    position: "left",
  },
];

const arrayDataDetailIconRight = [
  {
    title: "Valores importantes",
    description:
      "Brindamos acceso a información clave como reseñas de clientes",
    svgIcon: InfoIcon,
    position: "right",
  },
  {
    title: "Mentalidad de consumidor primero",
    description:
      "Nos enfocamos en crear la experiencia más transparente y confiable para nuestros usuarios.",
    svgIcon: UsersIcon,
    position: "right",
  },
  {
    title: "Evaluación de reserva en línea",
    description:
      "Puede seleccionar días en los que usted requiere el automóvil y se hace una cotización automática de los costos del mismo.",
    svgIcon: CalculatorIcon,
    position: "right",
  },
];

const SectionDetails: React.FC<DetailsProps> = () => {
  return (
    <ContainerDetails>
      <h2>¿Qué distingue a Carplus?</h2>
      <ContainerDetailsContent>
        <DetailsContent>
          {arrayDataDetailIconLeft.map((e, index) => (
            <ContainerDetailData
              key={index}
              positionIcon={e.position}
              title={e.title}
              description={e.description}
              SvgIcon={e.svgIcon}
            />
          ))}
        </DetailsContent>
        <DetailImageContent>
          <Image src={RoadLine} alt="line" />

          <Image src={CardLine} alt="card line" className="auto" />
        </DetailImageContent>
        <DetailsContent>
          {arrayDataDetailIconRight.map((e, index) => (
            <ContainerDetailData
              key={index}
              positionIcon={e.position}
              title={e.title}
              description={e.description}
              SvgIcon={e.svgIcon}
            />
          ))}
        </DetailsContent>
      </ContainerDetailsContent>
    </ContainerDetails>
  );
};

export default SectionDetails;
