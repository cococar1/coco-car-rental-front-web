import CardServices from "@/components/CardServices";
import {
  ContainerServices,
  ContainerText,
  ContainerTextServices,
  ContainerTitles,
  SectionServicesContainer,
} from "./services.style";
import SearchIcon from "@/assets/svgs/searchIcon";
import UsersIcon from "@/assets/svgs/usersIcon";
import DocumentIcon from "@/assets/svgs/documentIcon";

const servicesData = [
  {
    SvgIcon: SearchIcon,
    title: "Búsqueda personalizada ",
    text: "Nuestra búsqueda personalizada te permite encontrar el auto perfecto que se adapte a tus necesidades específicas. Filtra por características como modelo, tamaño, y más, para garantizar una experiencia de alquiler personalizada y satisfactoria.",
  },
  {
    SvgIcon: UsersIcon,
    title: "Confianza y transparencia ",
    text: "La confianza y la transparencia son nuestros pilares. Te garantizamos tarifas honestas y condiciones claras. Con nosotros, puedes estar seguro de que recibirás un servicio confiable y transparente en cada paso del proceso, para que puedas viajar con total tranquilidad y seguridad.",
  },
  {
    SvgIcon: DocumentIcon,
    title: "Reserva desde cualquier lugar",
    text: "Nuestra plataforma te permite hacer reservas rápidas y seguras desde la comodidad de tu hogar o mientras estás en movimiento. Ya sea desde tu computadora, tablet o teléfono, puedes acceder a nuestro sistema las 24 horas del día, los 7 días de la semana, para asegurar tu auto en cualquier momento.",
  },
];
interface SectionServicesProps {}

const SectionServices: React.FC<SectionServicesProps> = () => {
  return (
    <SectionServicesContainer>
      <ContainerTextServices>
        <ContainerTitles>
          <p>Servicios</p>
          <h2>¿Que hacemos por ti?</h2>
        </ContainerTitles>
        <ContainerText>
          <p>
            En Coco Car, nos esforzamos por ofrecerte la mejor experiencia de
            alquiler de autos posible. Desde la búsqueda personalizada hasta la
            transparencia en cada paso del proceso de reserva, estamos aquí para
            facilitar tu viaje. Tu comodidad y satisfacción son nuestra
            prioridad número uno
          </p>
        </ContainerText>
        <ContainerServices>
          {servicesData.map((e, index) => {
            return (
              <CardServices
                key={index}
                SvgIcon={e.SvgIcon}
                title={e.title}
                text={e.text}
              />
            );
          })}
        </ContainerServices>
      </ContainerTextServices>
    </SectionServicesContainer>
  );
};

export default SectionServices;
