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
    text: "Certe, inquam, pertinax non recusandae itaque earum motus et quale sit aut officiis debitis aut in sanguinem suum tam crudelis fuisse, nihil molestiae non quo ignorare vos arbitrer.",
  },
  {
    SvgIcon: UsersIcon,
    title: "Búsqueda personalizada ",
    text: "Certe, inquam, pertinax non recusandae itaque earum motus et quale sit aut officiis debitis aut in sanguinem suum tam crudelis fuisse, nihil molestiae non quo ignorare vos arbitrer.",
  },
  {
    SvgIcon: DocumentIcon,
    title: "Reserva desde cualquier lugar",
    text: "Certe, inquam, pertinax non recusandae itaque earum motus et quale sit aut officiis debitis aut in sanguinem suum tam crudelis fuisse, nihil molestiae non quo ignorare vos arbitrer.",
  },
];
interface SectionServicesProps {}

const SectionServices: React.FC<SectionServicesProps> = () => {
  return (
    <SectionServicesContainer>
      <ContainerTextServices>
        <ContainerTitles>
          <p>Sercicios</p>
          <h2>¿Que hacemos por ti?</h2>
        </ContainerTitles>
        <ContainerText>
          <p>
            At vero eos censes aut dolores eos, qui studiose antiqua
            persequeris, claris et ultimum bonorum, quod summum malum et,
            quantum possit, a philosophis compluribus permulta dicantur, cur nec
            me ab illo inventore veritatis et quasi naturalem atque natum sit, a
            se esse albam, dulce mel.
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
