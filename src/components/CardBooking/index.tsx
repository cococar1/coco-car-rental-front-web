import Image from "next/image";
import {
  ButtonContainerInfo,
  ContainerCardBooking,
  ContainerImage,
  ContainerInfo,
} from "./style";
import CashIcon from "@/assets/svgs/CashIcon";
import UserIcon from "@/assets/svgs/UserIcon";
import TypeAutoIcon from "@/assets/svgs/TypeAuto";
import KilometerLimitIcon from "@/assets/svgs/KilometerLimit";
import GasIcon from "@/assets/svgs/GasAuto";

interface CardBookingProps {}

const CardBooking: React.FC<CardBookingProps> = () => {
  return (
    <ContainerCardBooking>
      <ContainerImage>
        <Image
          src={
            "https://res.cloudinary.com/dfifwhrxn/image/upload/v1697128986/test-web/sv2wvoq689rl7vsxtd3l.png"
          }
          width={400}
          height={400}
          alt=""
        ></Image>
      </ContainerImage>
      <ContainerInfo>
        <div>
          <span>Pendiente</span>
        </div>
        <div>
          <h1>Carro ferrary d0dfd23</h1>
        </div>
        <div>
          <p>
            <span>2024/01/01</span>-<span>2024/02/02</span>
          </p>
        </div>
        <div>
          <CashIcon></CashIcon> <span>3232</span>
        </div>

        <ButtonContainerInfo>
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
            <p> 562 L</p>
          </div>
          <div>
            <GasIcon />
            <p>Nafta</p>
          </div>
        </ButtonContainerInfo>
      </ContainerInfo>
    </ContainerCardBooking>
  );
};

export default CardBooking;
