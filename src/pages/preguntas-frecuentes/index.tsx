import { MainLayout } from "@/layouts/Main.layout";
import SectionBanner from "@/components/Banner/Banner";
import Search from "@/components/Search";
import { useState } from "react";
import { ContainerSectionSearch } from "@/styles/pages/frequentQuestion.style";
import { useFaqContext } from "@/context/FaqContext";
import SectionAccordions from "@/containers/frequent-questions/accordion";

interface FrequentQuestionsPageProps {}

const FrequentQuestionsPage: React.FC<FrequentQuestionsPageProps> = () => {
  const {
    faqOptions: { data },
  } = useFaqContext();

  const [search, setSearch] = useState<string>("");

  return (
    <MainLayout>
      <SectionBanner
        title="Preguntas frecuentes"
        text="Discover our car rental options with Rent a Car Select from a range of car options and local specials."
        Button={<></>}
      />

      <ContainerSectionSearch>
        <h2>Podemos ayudarte</h2>
        <Search value={search} setSearch={setSearch} />
      </ContainerSectionSearch>

      <SectionAccordions data={data ?? []} filterSearch={search} />
    </MainLayout>
  );
};

export default FrequentQuestionsPage;
