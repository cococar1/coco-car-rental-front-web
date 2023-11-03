import { MainLayout } from "@/layouts/MainLayout";
import SectionBanner from "@/components/Banner/Banner";
import { ButtonPrincipalUI } from "@/ui/ButtonPrincipalUi";
import SectionAccodion from "@/containers/frequent-questions/accordion";

interface FrequentQuestionsPageProps {}

const FrequentQuestionsPage: React.FC<FrequentQuestionsPageProps> = () => {
  return (
    <MainLayout>
      <SectionBanner
        title="Preguntas frecuentes"
        text="Discover our car rental options with Rent a Car Select from a range of car options and local specials."
        Button={<ButtonPrincipalUI>Consulta</ButtonPrincipalUI>}
      />
      <SectionAccodion />
    </MainLayout>
  );
};

export default FrequentQuestionsPage;
