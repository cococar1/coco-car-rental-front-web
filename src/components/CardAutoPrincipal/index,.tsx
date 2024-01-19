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
import { Car } from "@/types/Car.type";
import Link from "next/link";
import { useBookingContext } from "@/context/BookingContext";

interface CardAutoPrincipalProps {
  car: Car;
}
const CardAutoPrincipal: React.FC<CardAutoPrincipalProps> = ({ car }) => {
  const { newBooking, setNewBooking } = useBookingContext();

  return (
    <ContainerCard>
      <ContainerImageTitle>
        <ContainerImagePrincipal>
          <Image src={car.image ?? ""} alt="" fill />
        </ContainerImagePrincipal>
      </ContainerImageTitle>
      <ContainerContent>
        <h2>{car.name}</h2>
        <p>Características</p>
        <ContainerCharacteristics>
          <div>
            <UserIcon />
            <p>{car.countPerson}</p>
          </div>
          <div>
            <TypeAutoIcon />
            <p>{car.typeChange}</p>
          </div>
          <div>
            <KilometerLimitIcon />
            <p>{car.maxTankQuantity} L</p>
          </div>
          <div>
            <GasIcon />
            <p>{car.fullType}</p>
          </div>
        </ContainerCharacteristics>

        <ContainerBottom>
          <ContainerPrice>
            <p>$ {car.price}/ día</p>
          </ContainerPrice>
          <Link
            href={`/reservas/${car._id}?pickupDate=${newBooking.pickupDate}&returnDate=${newBooking.returnDate}`}
            style={{
              width: "50%",
              height: "50px",
              marginTop: "20px",
              padding: "4px",
            }}
            onClick={() => {
              setNewBooking({
                ...newBooking,
                car: car._id,
                pickupDate: "2022-01-01T12:00:00Z",
                returnDate: "2022-01-02T12:00:00Z",
              });
            }}
          >
            <ButtonPrincipalContainer>Reservar</ButtonPrincipalContainer>
          </Link>
        </ContainerBottom>
      </ContainerContent>
    </ContainerCard>
  );
};

export default CardAutoPrincipal;
