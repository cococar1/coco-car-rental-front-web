import Image from "next/image";
import {
  ContainerTextDescription,
  SectionDescriptionContainer,
} from "./description.style";
import AboutDescriptionImage from "../../../public/images/about-description.png";
interface SectionDescriptionProps {}

const SectionDescription: React.FC<SectionDescriptionProps> = () => {
  return (
    <SectionDescriptionContainer>
      <div>
        <Image src={AboutDescriptionImage} alt="about description" />
      </div>
      <ContainerTextDescription>
        <div>
          <p>Nosotros</p>
          <h2 style={{color:"#313E50"}}> Explora Mendoza con Coco Car: Tu Compañero de Viaje.</h2>
        </div>
        <p style={{color:"#313E50"}}>
          "En nuestra empresa, nos dedicamos a proporcionarte el servicio ideal
          para alquilar tu auto en línea de manera sencilla en la Provincia de
          Mendoza. Con Coco Car, podrás explorar impresionantes paisajes, rutas
          y lugares con la comodidad que mereces. Te ofrecemos tarifas
          competitivas y condiciones excepcionales en el alquiler de autos
          modernos. Desde el año 2006, nos hemos destacado por nuestra atención
          al cliente y el compromiso con la calidad, asegurando que cada paso de
          tu viaje sea memorable y satisfactorio."
        </p>
      </ContainerTextDescription>
    </SectionDescriptionContainer>
  );
};

export default SectionDescription;
