import CardAdditional from "@/components/CardAdditional";
import { ContainerCards } from "./containerCards.style";
import { Extra } from "@/types/Extras.type";

interface ContainerCardsProps {
  data: Array<Extra>;
}

const SectionContainerCards: React.FC<ContainerCardsProps> = ({ data }) => {
  return (
      <ContainerCards>
        {data?.map((e, index) => (
          <CardAdditional
            key={index}
            type={e.type}
            date={e.createdAt}
            title={e.title}
            content={e.description}
          />
        ))}
      </ContainerCards>
  );
};

export default SectionContainerCards;
