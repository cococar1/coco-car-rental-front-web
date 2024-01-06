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
  minTankQuantity?: number;
  maxTankQuantity?: number;
  fullType?: string;
  title?: string;
  description?: string;
  price?: number;
  name?: string;
}

const CardAutoPrincipal: React.FC<CardAutoPrincipalProps> = ({
  urlImage,
  countUser,
  typeChange,
  minTankQuantity,
  maxTankQuantity,
  fullType,
  title,
  description,
  price,
  name,
}) => {
  return (
    <ContainerCard>
      <ContainerImageTitle>
        <ContainerImagePrincipal>
          <Image src={urlImage ?? ""} alt="" fill />
        </ContainerImagePrincipal>
      </ContainerImageTitle>
      <ContainerContent>
        <h2>{name}</h2>
        <p>Características</p>
        <ContainerCharacteristics>
          <div>
            <UserIcon />
            <p>{countUser}</p>
          </div>
          <div>
            <TypeAutoIcon />
            <p>{typeChange}</p>
          </div>
          <div>
            <KilometerLimitIcon />
            <p>
              {minTankQuantity} a {maxTankQuantity} L
            </p>
          </div>
          <div>
            <GasIcon />
            <p>{fullType}</p>
          </div>
        </ContainerCharacteristics>

        <ContainerBottom>
          <ContainerPrice>
            <p>
              $ {price}
              <br></br> / día
            </p>
          </ContainerPrice>
          <ButtonPrincipalContainer
            style={{
              width: "50%",
              height: "50px",
              marginTop: "20px",
              padding: "4px",
            }}
          >
            Reservar
          </ButtonPrincipalContainer>
        </ContainerBottom>
      </ContainerContent>
    </ContainerCard>
  );
};

export default CardAutoPrincipal;
