import GasIcon from "@/assets/svgs/GasAuto";
import KilometerLimitIcon from "@/assets/svgs/KilometerLimit";
import TypeAutoIcon from "@/assets/svgs/TypeAuto";
import UserIcon from "@/assets/svgs/UserIcon";
import {
  ContainerCard,
  ContainerCharacteristics,
  ContainerContent,
  ContainerImagePrincipal,
  ContainerImageTitle,
  ContainerPrice,
} from "./cardAuto.style";
import Image from "next/image";
import { Car } from "@/types/Car.type";

interface CardAutoProps {
  car: Car;
}

const CardAuto: React.FC<CardAutoProps> = ({ car }) => {
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
        <h2>{car?.name}</h2>
      </ContainerImageTitle>
      <ContainerCharacteristics>
        <div>
          <UserIcon />
          <p>{car?.countPerson}</p>{" "}
        </div>
        <div>
          <TypeAutoIcon />
          <p>{car?.typeChange}</p>
        </div>
        <div>
          <KilometerLimitIcon />
          <p>{car?.maxTankQuantity} L</p>
        </div>
        <div>
          <GasIcon />
          <p>{car?.fullType}</p>
        </div>
      </ContainerCharacteristics>
      <ContainerContent>
        <h3>{car?.subTitle}</h3>
        <p style={{ height: "50px" }}>
          {car?.description.length > 150
            ? car?.description.slice(0, 150) + "..."
            : car?.description}
        </p>
      </ContainerContent>
      <ContainerPrice>
        <p>Desde</p>
        <p>$ {car?.price}/ día</p>
      </ContainerPrice>
      {/* <div>
        <ButtonPrincipalContainer style={{ width: "100%", marginTop: "20px" }}>
          Reservar
        </ButtonPrincipalContainer>
      </div> */}
    </ContainerCard>
  );
};

export default CardAuto;
