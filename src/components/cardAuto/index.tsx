import { ButtonPrincipalContainer } from "@/ui/ButtonPrincipalUi/buttonPrincipal.style";

interface CardAutoProps {
  urlImage: string;
  countUser: number;
  typeChange: string;
  tankQuantity: string;
  fullType: string;
  title: string;
  description: string;
  precio: string;
  name: string;
}

const CardAuto: React.FC<CardAutoProps> = () => {
  return (
    <div>
      <div>
        <img></img>
        <title>Toyota Etios</title>
      </div>
      <div></div>
      <div>
        <h2>Toyota Etios platinum, 5 puertas, Motor 1.5</h2>
        <p>
          Su reserva garantiza el modelo de auto que elija, sujeto a
          disponibilidad de la agencia
        </p>
      </div>
      <div>
        <p>Desde</p>
        <p>ARS 13.400,00 / día</p>
      </div>
      <ButtonPrincipalContainer>Reservar</ButtonPrincipalContainer>
    </div>
  );
};

export default CardAuto;
