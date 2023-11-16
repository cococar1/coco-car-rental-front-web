import ArrowIcon from "@/assets/svgs/ArrowIcon";
import { useState } from "react";
import {
  ContainerAccordion,
  ContainerContent,
  ContainerIconArrow,
  DetailAccordion,
  Summary,
} from "./accordion.style";

interface AccordionProps {
  title: string;
  content: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [open, setOpen] = useState(false);
  return (
    <ContainerAccordion>
      <DetailAccordion>
        <Summary
          onClick={() => {
            setOpen(!open);
          }}
        >
          <h3>{title}</h3>
          <ContainerIconArrow onClick={() => setOpen(!open)} open={open}>
            <ArrowIcon width={30} height={30}></ArrowIcon>
          </ContainerIconArrow>
        </Summary>
        <ContainerContent open={open}>{content}</ContainerContent>
      </DetailAccordion>
    </ContainerAccordion>
  );
};

export default Accordion;