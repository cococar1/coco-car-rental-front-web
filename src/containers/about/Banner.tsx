import { ButtonPrincipalUI } from "@/ui/ButtonPrincipalUi";
import {
  BannerImage,
  ContainerBackground,
  ContainerTextAbout,
  SectionBannerContainer,
} from "./banner.style";

interface BannerProps {}

const SectionBanner: React.FC<BannerProps> = () => {
  return (
    <SectionBannerContainer>
      <BannerImage></BannerImage>
      <ContainerBackground></ContainerBackground>
      <ContainerTextAbout>
        <h1>Sobre Nosotros</h1>
        <p>
          Discover our car rental options with Rent a Car Select from a range of
          car options and local specials.
        </p>
        <div>
          <ButtonPrincipalUI>Conocenos</ButtonPrincipalUI>
        </div>
      </ContainerTextAbout>
    </SectionBannerContainer>
  );
};

export default SectionBanner;
