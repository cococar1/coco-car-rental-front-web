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
        text="En Coco Car, proporcionamos alquiler de autos confiable y transparente. Tu satisfacción es nuestra prioridad."
        Button={<ButtonPrincipalUI>Conocenos</ButtonPrincipalUI>}
      />
      <SectionDescription />
      <SectionServices />
      <SectionReviewClients />
    </MainLayout>
  );
};

export default AboutPage;
