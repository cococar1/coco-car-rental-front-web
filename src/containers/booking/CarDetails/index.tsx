import moment from "moment";
import Image from "next/image";
import {
  ContainerCarDetail,
  ContainerFeatures,
  ContainerFeaturesElements,
  ContainerImage,
  ContainerPrice,
  DetailBooking,
  DetailCar,
  DetailPrice,
  SectionDetail,
  SectionImage,
} from "./carDetails.style";
import Feature from "../../../components/Feature";
import UserIcon from "@/assets/svgs/UserIcon";
import TypeAutoIcon from "@/assets/svgs/TypeAuto";
import KilometerLimitIcon from "@/assets/svgs/KilometerLimit";
import GasIcon from "@/assets/svgs/GasAuto";
import { Car } from "@/types/Car.type";
import { Booking } from "@/types/Booking";
import { CreateBooking } from "../../../types/Booking";

interface CarDetailsProps {
  car: Car;
  booking: Booking | CreateBooking;
  styleContainer?: React.CSSProperties;
}

const CarDetails: React.FC<CarDetailsProps> = ({
  car,
  booking,
  styleContainer,
}) => {
  const days =
    moment(booking?.returnDate).diff(moment(booking?.pickupDate), "days") ?? 0;

  return (
    <ContainerCarDetail style={styleContainer ?? {}}>
      <SectionImage>
        <ContainerImage>
          <Image src={car.image} fill alt="" />
        </ContainerImage>
        <ContainerFeatures>
          <h2>Caracteristicas</h2>
          <ContainerFeaturesElements>
            {car.features?.map((e, index) => (
              <Feature text={e} key={index} />
            ))}
          </ContainerFeaturesElements>
        </ContainerFeatures>
      </SectionImage>

      <SectionDetail>
        <h1>{car.name}</h1>
        <div>
          <h3 style={{ fontSize: "18px", fontWeight: "bold" }}>
            Detalles del vehiculo
          </h3>
          <DetailCar>
            <div>
              <UserIcon />
              <p style={{ fontSize: "16px" }}>{car.countPerson}</p>
            </div>
            <div>
              <TypeAutoIcon />
              <p style={{ fontSize: "16px" }}>{car.typeChange}</p>
            </div>
            <div>
              <KilometerLimitIcon />
              <p style={{ fontSize: "16px" }}>{car.maxTankQuantity}</p>
            </div>
            <div>
              <GasIcon />
              <p style={{ fontSize: "16px" }}>{car.fullType}</p>
            </div>
          </DetailCar>
        </div>
        <DetailBooking>
          <h2
            style={{
              fontSize: "20px",
              marginBottom: "10px",
              fontWeight: "bold",
            }}
          >
            Detalles de la reserva
          </h2>
          <p style={{ fontSize: "16px" }}>
            {moment(booking?.pickupDate).format("ddd, D [de] MMM - h:mm A")}
          </p>
          <h3>{car.pickupTime}</h3>
          <p style={{ fontSize: "16px" }}>
            {moment(booking?.returnDate).format("ddd, D [de] MMM - h:mm A")}
          </p>
        </DetailBooking>
        <DetailPrice>
          <h2 style={{ fontSize: "20px", fontWeight: "bold" }}>
            Desglose del precio del coche
          </h2>
          <ContainerPrice>
            <p style={{ fontSize: "16px" }}>Cargo por alquiler de coche</p>{" "}
            <span>${car.price}</span>
          </ContainerPrice>
          <ContainerPrice>
            <p style={{ fontWeight: "bold", fontSize: "16px" }}>
              Precio por {days} días:
            </p>{" "}
            <span style={{ fontWeight: "bold", fontSize: "16px" }}>
              ${days * car.price}
            </span>
          </ContainerPrice>
          <p style={{ fontSize: "16px" }}>{car.description}</p>
        </DetailPrice>
      </SectionDetail>
    </ContainerCarDetail>
  );
};

export default CarDetails;
