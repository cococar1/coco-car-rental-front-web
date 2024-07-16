import Accordion from "@/components/Accordion";
import {
  ContainerColumn,
  ContainerSectionAccordions,
} from "./frequentQuestions";
import React, { useEffect, useState } from "react";
import { FrequentQuestion } from "@/types/FrequentQuestion";
interface SectionAccordionProps {
  data: Array<FrequentQuestion>;
  filterSearch:string
  styles?: any;
}

interface DataAccordion {
  columnLeft: Array<FrequentQuestion>;
  columnRight: Array<FrequentQuestion>;
}

const SectionAccordions: React.FC<SectionAccordionProps> = ({
  data,
  filterSearch,
  styles
}: SectionAccordionProps) => {
  const [dataObject, setDataObject] = useState<DataAccordion>();


  const hasSearchFilter = Boolean(filterSearch);

  const filteredItems = React.useMemo(() => {
    let filteredFaq = [...data];

    if (hasSearchFilter) {
      filteredFaq = filteredFaq.filter((faq) =>
        faq.question.toLowerCase().includes(filterSearch.toLowerCase())
      );
    }

    return filteredFaq;
  }, [data, filterSearch, hasSearchFilter]);


  useEffect(() => {
    if (filteredItems) {
      setDataObject({
        columnRight: filteredItems.slice(0, Math.floor(filteredItems.length / 2)),
        columnLeft: filteredItems.slice(Math.floor(filteredItems.length / 2)),
      });
    }
  }, [filteredItems,data]);

  return (
    <ContainerSectionAccordions style={styles??{}}>
      <ContainerColumn>
        {dataObject?.columnLeft.map((element, index) => (
          <Accordion
            key={index}
            title={element.question}
            content={element.answer}
          />
        ))}
      </ContainerColumn>
      <ContainerColumn>
        {" "}
        {dataObject?.columnRight.map((element, index) => (
          <Accordion
            key={index}
            title={element.question}
            content={element.answer}
          />
        ))}
      </ContainerColumn>
    </ContainerSectionAccordions>
  );
};

export default SectionAccordions;
