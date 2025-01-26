import CardReviewClient from "@/components/CardReviewClient";
import {
  ReviewClientText,
  ReviewClientsContainer,
  SectionReviewClientsContainer,
} from "./reviewClients.style";

interface SectionReviewClientsProps {}

const dataReviewClients = [
  {
    user: {
      name: "Leonardo ",
      profession: "",
      photo:
        "https://res.cloudinary.com/dfifwhrxn/image/upload/v1698272960/test-web/trhulz1hlbmwm2wm46b0.jpg",
    },
    commemt:
      "Excelente servicio. Puntualidad en los horarios programados de entrega y devolución y ademas un vehículo en excelentes condiciones. Totalmente recomendado.",
  },
  {
    user: {
      name: "Juan Manuel Pérez",
      profession: "",
      photo:
        "https://res.cloudinary.com/dfifwhrxn/image/upload/v1698272960/test-web/trhulz1hlbmwm2wm46b0.jpg",
    },
    commemt:
      "Una opción muy accesible y adaptable a las necesidades de cada uno. Muy conforme con las prestaciones. ",
  },
  {
    user: {
      name: "Paula González",
      profession: "",
      photo:
        "https://res.cloudinary.com/dfifwhrxn/image/upload/v1698272960/test-web/trhulz1hlbmwm2wm46b0.jpg",
    },
    commemt:
      "Dejo una excelente referencia de esta empresa; puntualidad, confort y accesibilidad. 100% recomendada.",
  },
];
const SectionReviewClients: React.FC<SectionReviewClientsProps> = () => {
  return (
    <SectionReviewClientsContainer>
      <h2>Nuestros Clientes</h2>
      <ReviewClientText>
        Valoramos cada experiencia y nos enorgullece ofrecer un servicio
        excepcional que supera las expectativas.
      </ReviewClientText>
      <ReviewClientsContainer>
        {dataReviewClients.map((review, index) => {
          return (
            <CardReviewClient
              key={index}
              user={review.user}
              commemt={review.commemt}
            />
          );
        })}
      </ReviewClientsContainer>
    </SectionReviewClientsContainer>
  );
};

export default SectionReviewClients;
