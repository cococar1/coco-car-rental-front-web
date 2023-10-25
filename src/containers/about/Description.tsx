import Image from "next/image";
import {
  ContainerTextDescription,
  SectionDescriptionContainer,
} from "./description.style";
import AboutDescriptionImage from "../../../public/images/about-description.png";
interface SectionDescriptionProps {}

const SectionDescription: React.FC<SectionDescriptionProps> = () => {
  return (
    <SectionDescriptionContainer>
      <div>
        <Image src={AboutDescriptionImage} alt="about description" />
      </div>
      <ContainerTextDescription>
        <div>
          <p>Sobre nosotros</p>
          <h2>Strategy. Design. Content. Technology Development </h2>
        </div>
        <p>
          At vero eos censes aut dolores eos, qui studiose antiqua persequeris,
          claris et ultimum bonorum, quod summum malum et, quantum possit, a
          philosophis compluribus permulta dicantur, cur nec me ab illo
          inventore veritatis et quasi naturalem atque natum sit, a se esse
          albam, dulce mel.
        </p>
      </ContainerTextDescription>
    </SectionDescriptionContainer>
  );
};

export default SectionDescription;
