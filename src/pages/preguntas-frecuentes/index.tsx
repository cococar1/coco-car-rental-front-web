import { MainLayout } from "@/layouts/Main.layout";
import SectionBanner from "@/components/Banner/Banner";
import { ButtonPrincipalUI } from "@/ui/ButtonPrincipalUi";
import SectionAccodion from "@/containers/frequent-questions/accordion";
import Search from "@/components/Search";
import { FrequentQuestion } from "@/types/FrequentQuestion";
import { useState } from "react";
import { ContainerSectionSearch } from "@/styles/pages/frequentQuestion.style";

interface FrequentQuestionsPageProps {}

const data: Array<FrequentQuestion> = [
  {
    title: "What is OrionApp for?",
    content:
      "Innovator angel investor branding rockstar seed round growth hacking channels business-to-consumer user experience infographic. Business-to-consumer market gamification stock analytics MVP. Agile development low hanging fruit beta influencer.",
  },
  {
    title: "What is OrionApp for?",
    content:
      "Innovator angel investor branding rockstar seed round growth hacking channels business-to-consumer user experience infographic. Business-to-consumer market gamification stock analytics MVP. Agile development low hanging fruit beta influencer.",
  },
  {
    title: "What is OrionApp for?",
    content:
      "Innovator angel investor branding rockstar seed round growth hacking channels business-to-consumer user experience infographic. Business-to-consumer market gamification stock analytics MVP. Agile development low hanging fruit beta influencer.",
  },
  {
    title: "What is OrionApp for?",
    content:
      "Innovator angel investor branding rockstar seed round growth hacking channels business-to-consumer user experience infographic. Business-to-consumer market gamification stock analytics MVP. Agile development low hanging fruit beta influencer.",
  },
  {
    title: "What is OrionApp for?",
    content:
      "Innovator angel investor branding rockstar seed round growth hacking channels business-to-consumer user experience infographic. Business-to-consumer market gamification stock analytics MVP. Agile development low hanging fruit beta influencer.",
  },
  {
    title: "What is OrionApp for?",
    content:
      "Innovator angel investor branding rockstar seed round growth hacking channels business-to-consumer user experience infographic. Business-to-consumer market gamification stock analytics MVP. Agile development low hanging fruit beta influencer.",
  },
  {
    title: "What is OrionApp for?",
    content:
      "Innovator angel investor branding rockstar seed round growth hacking channels business-to-consumer user experience infographic. Business-to-consumer market gamification stock analytics MVP. Agile development low hanging fruit beta influencer.",
  },
];
const FrequentQuestionsPage: React.FC<FrequentQuestionsPageProps> = () => {
  const [dataFrequentQuestions, setDataFrequentQuestions] = useState(data);
  return (
    <MainLayout>
      <SectionBanner
        title="Preguntas frecuentes"
        text="Discover our car rental options with Rent a Car Select from a range of car options and local specials."
        Button={<ButtonPrincipalUI>Consulta</ButtonPrincipalUI>}
      />

      <ContainerSectionSearch>
        <h2>Podemos ayudarte</h2>
        <Search stylesContainer={{ width: "40%" }} />
      </ContainerSectionSearch>

      <SectionAccodion data={dataFrequentQuestions} />
    </MainLayout>
  );
};

export default FrequentQuestionsPage;
