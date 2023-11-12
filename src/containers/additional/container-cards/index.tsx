import CardAdditional from "@/components/CardAdditional";
import { ContainerCards } from "./containerCards.style";

interface ContainerCardsProps {
  data: Array<any>;
}

const SectionContainerCards: React.FC<ContainerCardsProps> = ({ data }) => {
  return (
    <ContainerCards>
      {data?.map((e, index) => (
        <CardAdditional
          key={index}
          type={e.type}
          date={e.date}
          title={e.title}
          content={e.content}
        />
      ))}
    </ContainerCards>
  );
};

export default SectionContainerCards;
