import Service from "@/components/service";
import { ContainerService } from "./services.style";
import SvgCalendar from "../../../public/svg/calendar.svg";

interface HomeServicesProps {}
const services = [
  {
    SVGAElement: "/svg/calendar.svg",
    tittle: "Descubre nuestra flexibilidad de fechas",
    description: "En cualquier momento en cualquier lugar",
  },
  {
    SVGAElement: "/svg/option.svg",
    tittle: "Elegí el vehículo que más se adapte a tus necesidades",
    description: "Descubrí las diferentes categorías",
  },
  {
    SVGAElement: "/svg/check.svg",
    tittle: "Realiza tu reserva de manera rápida y sencilla",
    description: "Coordinamos la entrega",
  },
];
const HomeServices: React.FC<HomeServicesProps> = () => {
  return (
    <ContainerService>
      {services.map((element, index) => (
        <Service
          key={index}
          SVGElement={element.SVGAElement}
          tittle={element.tittle}
          description={element.description}
        />
      ))}
    </ContainerService>
  );
};

export default HomeServices;
