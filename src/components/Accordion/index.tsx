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
  styleContainer?: React.CSSProperties;
  styleContent?: React.CSSProperties;
  styleIcon?: React.SVGProps<SVGSVGElement>;
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  content,
  styleContainer,
  styleContent,
  styleIcon,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <ContainerAccordion style={styleContainer ?? {}}>
      <DetailAccordion>
        <Summary
          onClick={() => {
            setOpen(!open);
          }}
        >
          <h3>{title}</h3>
          <ContainerIconArrow onClick={() => setOpen(!open)} open={open}>
            <ArrowIcon width={30} height={30} {...styleIcon}></ArrowIcon>
          </ContainerIconArrow>
        </Summary>
        <ContainerContent open={open} style={styleContent ?? {}}>
          {content}
        </ContainerContent>
      </DetailAccordion>
    </ContainerAccordion>
  );
};

export default Accordion;
