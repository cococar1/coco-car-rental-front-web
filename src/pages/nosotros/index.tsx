import SectionBanner from "@/components/Banner/Banner";
import SectionDescription from "@/containers/about/Description";
import SectionReviewClients from "@/containers/about/ReviewClients";
import SectionServices from "@/containers/about/Services";
import { MainLayout } from "@/layouts/Main.layout";
import { ButtonPrincipalUI } from "@/ui/ButtonPrincipalUi";

interface AboutPageProps {}

const AboutPage: React.FC<AboutPageProps> = () => {
  return (
    <MainLayout>
      <SectionBanner
        title="Sobre nosotros "
        text="Discover our car rental options with Rent a Car Select from a range of car options and local specials."
        Button={<ButtonPrincipalUI>Conocenos</ButtonPrincipalUI>}
      />
      <SectionDescription />
      <SectionServices />
      <SectionReviewClients />
    </MainLayout>
  );
};

export default AboutPage;
