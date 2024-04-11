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
      name: "Marilyn Vetrovs",
      profession: "Design Brand",
      photo:
        "https://res.cloudinary.com/dfifwhrxn/image/upload/v1698272960/test-web/trhulz1hlbmwm2wm46b0.jpg",
    },
    commemt:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium em sequi nesciunt",
  },
  {
    user: {
      name: "Ashlynn Ekstrom Bothman",
      profession: "Customer one",
      photo:
        "https://res.cloudinary.com/dfifwhrxn/image/upload/v1698272960/test-web/trhulz1hlbmwm2wm46b0.jpg",
    },
    commemt:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some",
  },
  {
    user: {
      name: "Zaire Carder",
      profession: "Customer two",
      photo:
        "https://res.cloudinary.com/dfifwhrxn/image/upload/v1698272960/test-web/trhulz1hlbmwm2wm46b0.jpg",
    },
    commemt:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
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
