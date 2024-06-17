import { MainLayout } from "@/layouts/Main.layout";
import SectionBanner from "@/components/Banner/Banner";
import { ButtonPrincipalUI } from "@/ui/ButtonPrincipalUi";
import Search from "@/components/Search";
import { FrequentQuestion } from "@/types/FrequentQuestion";
import { useEffect, useState } from "react";
import { ContainerSectionSearch } from "@/styles/pages/frequentQuestion.style";
import { useFaqContext } from "@/context/FaqContext";
import SectionAccordions from "@/containers/frequent-questions/accordion";

interface FrequentQuestionsPageProps {}

/*
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
*/
const FrequentQuestionsPage: React.FC<FrequentQuestionsPageProps> = () => {
  const {faqOptions:{
    data
  }}= useFaqContext()

  const [search,setSearch] = useState<string>("");

  return (
    <MainLayout>
      <SectionBanner
        title="Preguntas frecuentes"
        text="Discover our car rental options with Rent a Car Select from a range of car options and local specials."
        Button={<></>}
      />

      <ContainerSectionSearch>
        <h2>Podemos ayudarte</h2>
        <Search  value={search} setSearch={setSearch}/>
      </ContainerSectionSearch>

      <SectionAccordions data={data??[]} filterSearch={search} />
    </MainLayout>
  );
};

export default FrequentQuestionsPage;
