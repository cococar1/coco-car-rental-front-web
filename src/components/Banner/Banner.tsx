// import { ButtonPrincipalUI } from "@/ui/ButtonPrincipalUi";
import {
  BannerImage,
  ContainerBackground,
  ContainerTextAbout,
  SectionBannerContainer,
} from "./banner.style";

interface BannerProps {
  title: string;
  text: string;
  Button: any;
}

const Banner: React.FC<BannerProps> = ({ title, text, Button }) => {
  return (
    <SectionBannerContainer>
      <BannerImage></BannerImage>
      <ContainerBackground></ContainerBackground>
      <ContainerTextAbout>
        <h1>{title}</h1>
        <p>{text}</p>
        <div>{Button}</div>
      </ContainerTextAbout>
    </SectionBannerContainer>
  );
};

export default Banner;
