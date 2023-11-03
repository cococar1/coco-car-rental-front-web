import ArrowIcon from "@/assets/svgs/ArrowIcon";
import { useState } from "react";
import {
  ContainerAccordion,
  ContainerIconArrow,
  DetailAccordion,
} from "./accordion.style";

interface AccordionProps {}

const Accordion: React.FC<AccordionProps> = () => {
  const [open, setOpen] = useState(false);
console.log(open)
  return (
    <ContainerAccordion>
      <ContainerIconArrow onClick={() => setOpen(!open)} open={open}>
        <ArrowIcon width={30} height={30}></ArrowIcon>
      </ContainerIconArrow>
      <DetailAccordion open={open}>
        <summary  onClick={() => setOpen(!open)}>What is OrionApp for?</summary>
        <p>
          Innovator angel investor branding rockstar seed round growth hacking
          channels business-to-consumer user experience infographic.
          Business-to-consumer market gamification stock analytics MVP. Agile
          development low hanging fruit beta influencer.
        </p>
      </DetailAccordion>
    </ContainerAccordion>
  );
};

export default Accordion;
