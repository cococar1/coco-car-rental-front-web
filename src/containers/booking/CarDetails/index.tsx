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

interface CarDetailsProps {}

const CarDetails: React.FC<CarDetailsProps> = () => {
  return (
    <ContainerCarDetail>
      <SectionImage>
        <ContainerImage>
          <Image
            src={
              "https://coco-car-rental.s3.us-east-2.amazonaws.com/cars/1704417572856-vdrive-blanco-1.jpg"
            }
            fill
            alt=""
          />
        </ContainerImage>
        <ContainerFeatures>
          <h2>Caracteristicas</h2>
          <ContainerFeaturesElements>
            {[
              "Aire acondicionado",
              "Kilometraje ilimitado",
              "Exención de responsabilidad por colisión con deducible de $2.300",
              "Protección contra robo con franquicia de $2.300",
            ].map((e, index) => (
              <Feature text={e} key={index} />
            ))}
          </ContainerFeaturesElements>
        </ContainerFeatures>
      </SectionImage>

      <SectionDetail>
        <h1>Toyota Etios</h1>
        <div>
          <h3>Detalles del vehiculo</h3>
          <DetailCar>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            corrupti accusantium molestias minima! Quasi blanditiis rem quae
            eius necessitatibus id omnis? Quod consequuntur vero esse similique
            voluptatibus illum error alias?
          </p>
        </DetailPrice>
      </SectionDetail>
    </ContainerCarDetail>
  );
};

export default CarDetails;
