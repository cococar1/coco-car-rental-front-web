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
import { Booking } from "@/types/Booking";
import { FormatDate } from "@/helpers/formatDate.helper";

interface CardBookingProps {
  booking: Booking;
}

const CardBooking: React.FC<CardBookingProps> = ({ booking }) => {
  return (
    <ContainerCardBooking>
      <ContainerImage>
        <Image
          src={booking.car?.image}
          width={400}
          height={400}
          alt=""
        ></Image>
      </ContainerImage>
      <ContainerInfo>
        <div>
          <span>{booking?.status.toLocaleUpperCase()}</span>
        </div>
        <div>
          <h1>{`${booking.car.brand} ${booking.car.licensePlate}`}</h1>
        </div>
        <div>
          <p>
            <span>{`${FormatDate(booking.pickupDate).replace(
              /-/g,
              "/"
            )}`}</span>
            -
            <span>{`${FormatDate(booking.returnDate).replace(
              /-/g,
              "/"
            )}`}</span>
          </p>
        </div>
        <div>
          <CashIcon /> <span>{booking.price}</span>
        </div>

        <ButtonContainerInfo>
          <div>
            <UserIcon />
            <p>{booking.car.car?.countPerson}</p>
          </div>
          <div>
            <TypeAutoIcon />
            <p>
              {booking.car.car?.typeChange &&
                booking.car.car.typeChange[0].toUpperCase() +
                  booking.car.car.typeChange.substring(1)}
            </p>
          </div>
          <div style={{marginLeft:"10px"}}>
            <KilometerLimitIcon />
            <p> {booking.car.car?.maxTankQuantity} L</p>
          </div>
          <div>
            <GasIcon />
            <p>{booking.car.car?.fullType}</p>
          </div>
        </ButtonContainerInfo>
      </ContainerInfo>
    </ContainerCardBooking>
  );
};

export default CardBooking;
