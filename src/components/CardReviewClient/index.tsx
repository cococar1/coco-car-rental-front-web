import Image from "next/image";
import {
  ContainderCardReviewClient,
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
    console.log(commemt.length);
    commemt = commemt.slice(0, 120) + "...";
  }
  return (
    <ContainderCardReviewClient>
      <ElementCardReviewClient>
        <ContainerImage>
          <Image
            src={user.photo}
            alt={user.name}
            width={200}
            height={200}
          ></Image>
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
    </ContainderCardReviewClient>
  );
};

export default CardReviewClient;
