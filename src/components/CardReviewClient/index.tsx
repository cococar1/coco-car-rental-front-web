import Image from "next/image";
import {
  ContainerCardReviewClient,
  ContainerImage,
  ElementCardReviewClient,
} from "./reviewClient.style";

import CommentIcon from "@/assets/svgs/commentIcon";
interface CardReviewClientProps {
  user: UserSimple;
  commemt: string;
}

interface UserSimple {
  name: string;
  profession: string;
  photo: string;
}
const CardReviewClient: React.FC<CardReviewClientProps> = ({
  user,
  commemt,
}) => {
  if (commemt.length > 120) {
 
    commemt = commemt.slice(0, 120) + "...";
  }
  return (
    <ContainerCardReviewClient>
      <ElementCardReviewClient>
        <ContainerImage>
         
        </ContainerImage>
        <div>
          <CommentIcon />
        </div>
      </ElementCardReviewClient>
      <ElementCardReviewClient>
        <h3>{user.name}</h3>
        <p>{user.profession}</p>
        <p>{commemt}</p>
      </ElementCardReviewClient>
    </ContainerCardReviewClient>
  );
};

export default CardReviewClient;
