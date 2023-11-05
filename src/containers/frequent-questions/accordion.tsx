import Accordion from "@/components/Accordion";
import {
  ContainerColumn,
  ContainerSectionAccordions,
} from "./frequentQuestions";
import { useEffect, useState } from "react";
import { FrequentQuestion } from "@/types/FrequentQuestion";
interface SectionAccodionProps {
  data: Array<FrequentQuestion>;
}

interface DataAccordion {
  columnLeft: Array<FrequentQuestion>;
  columnRight: Array<FrequentQuestion>;
}

const SectionAccordions: React.FC<SectionAccodionProps> = ({
  data,
}: SectionAccodionProps) => {
  const [dataObject, setDataObject] = useState<DataAccordion>();

  useEffect(() => {
    if (data) {
      setDataObject({
        columnLeft: data.slice(0, Math.floor(data.length / 2)),
        columnRight: data.slice(Math.floor(data.length / 2)),
      });
    }
  }, [data]);
  return (
    <ContainerSectionAccordions>
      <ContainerColumn>
        {dataObject?.columnLeft.map((element, index) => (
          <Accordion
            key={index}
            title={element.title}
            content={element.content}
          />
        ))}
      </ContainerColumn>
      <ContainerColumn>
        {" "}
        {dataObject?.columnRight.map((element, index) => (
          <Accordion
            key={index}
            title={element.title}
            content={element.content}
          />
        ))}
      </ContainerColumn>
    </ContainerSectionAccordions>
  );
};

export default SectionAccordions;
