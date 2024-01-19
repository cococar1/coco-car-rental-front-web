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

interface CarDetailsProps {
  car: Car;
}

const CarDetails: React.FC<CarDetailsProps> = ({ car }) => {
  return (
    <ContainerCarDetail>
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
          <h3>Detalles del vehiculo</h3>
          <DetailCar>
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
              <p>{car.maxTankQuantity}</p>
            </div>
            <div>
              <GasIcon />
              <p>{car.fullType}</p>
            </div>
          </DetailCar>
        </div>
        <DetailBooking>
          <h2>Detalles de la reserva</h2>
          <p>
            Vie, 12 de enero -<span> 10:00 a.m.</span>
          </p>
          <h3>Aeropuerto de Mendoza</h3>
          <p>
            Vie, 12 de enero -<span> 10:00 a.m.</span>
          </p>
        </DetailBooking>
        <DetailPrice>
          <h2>Desglose del precio del coche</h2>
          <ContainerPrice>
            <p>Cargo por alquiler de coche</p> <span>$152,96</span>
          </ContainerPrice>
          <ContainerPrice>
            <p style={{ fontWeight: "bold" }}>Precio por 3 días:</p>{" "}
            <span style={{ fontWeight: "bold" }}>$152,96</span>
          </ContainerPrice>
          <p>
            {car.description}
          </p>
        </DetailPrice>
      </SectionDetail>
    </ContainerCarDetail>
  );
};

export default CarDetails;
