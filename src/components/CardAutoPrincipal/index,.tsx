import GasIcon from "@/assets/svgs/GasAuto";
import KilometerLimitIcon from "@/assets/svgs/KilometerLimit";
import TypeAutoIcon from "@/assets/svgs/TypeAuto";
import UserIcon from "@/assets/svgs/UserIcon";
import { ButtonPrincipalContainer } from "@/ui/ButtonPrincipalUi/buttonPrincipal.style";
import {
  ContainerBottom,
  ContainerCard,
  ContainerCharacteristics,
  ContainerContent,
  ContainerImagePrincipal,
  ContainerImageTitle,
  ContainerPrice,
} from "./cardAutoPrincipal.style";
import Image from "next/image";

interface CardAutoPrincipalProps {
  urlImage?: string;
  countUser?: number;
  typeChange?: string;
  tankQuantity?: string;
  fullType?: string;
  title?: string;
  description?: string;
  precio?: string;
  name?: string;
}

const CardAutoPrincipal: React.FC<CardAutoPrincipalProps> = () => {
  return (
    <ContainerCard>
      <ContainerImageTitle>
        <ContainerImagePrincipal>
          <Image
            src={
              "https://res.cloudinary.com/dfifwhrxn/image/upload/v1697128986/test-web/sv2wvoq689rl7vsxtd3l.png"
            }
            alt=""
            fill
          />
        </ContainerImagePrincipal>
      </ContainerImageTitle>
      <ContainerContent >
        <h2>Toyota Etios</h2>
        <p>Características</p>
        <ContainerCharacteristics>
          <div>
            <UserIcon />
            <p>5</p>
          </div>
          <div>
            <TypeAutoIcon />
            <p>Manual</p>
          </div>
          <div>
            <KilometerLimitIcon />
            <p>270 a 562 L</p>
          </div>
          <div>
            <GasIcon />
            <p>Nafta</p>
          </div>
        </ContainerCharacteristics>

        <ContainerBottom>
          <ContainerPrice>

            <p>$ 13.400,00<br></br> / día</p>
          </ContainerPrice>
          <ButtonPrincipalContainer
            style={{ width: "50%",height:"50px", marginTop: "20px",padding:"4px" }}
          >
            Reservar
          </ButtonPrincipalContainer>
        </ContainerBottom>
      </ContainerContent>
    </ContainerCard>
  );
};

export default CardAutoPrincipal;
