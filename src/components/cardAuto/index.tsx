import GasIcon from "@/assets/svgs/GasAuto";
import KilometerLimitIcon from "@/assets/svgs/KilometerLimit";
import TypeAutoIcon from "@/assets/svgs/TypeAuto";
import UserIcon from "@/assets/svgs/UserIcon";
import { ButtonPrincipalContainer } from "@/ui/ButtonPrincipalUi/buttonPrincipal.style";
import {
  ContainerCard,
  ContainerCharacteristics,
  ContainerContent,
  ContainerImagePrincipal,
  ContainerImageTitle,
  ContainerPrice,
} from "./cardAuto.style";
import Image from "next/image";

interface CardAutoProps {
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

const CardAuto: React.FC<CardAutoProps> = () => {
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
        <h2>Toyota Etios</h2>
      </ContainerImageTitle>
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
      <ContainerContent>
        <h3>Toyota Etios platinum, 5 puertas, Motor 1.5</h3>
        <p>
          Su reserva garantiza el modelo de auto que elija, sujeto a
          disponibilidad de la agencia
        </p>
      </ContainerContent>
      <ContainerPrice>
        <p>Desde</p>
        <p>ARS 13.400,00 / día</p>
      </ContainerPrice>
      <div>
        <ButtonPrincipalContainer style={{ width: "100%", marginTop: "20px" }}>
          Reservar
        </ButtonPrincipalContainer>
      </div>
    </ContainerCard>
  );
};

export default CardAuto;
