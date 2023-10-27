import SectionBanner from "@/containers/about/Banner";
import SectionDescription from "@/containers/about/Description";
import SectionReviewClients from "@/containers/about/ReviewClients";
import SectionServices from "@/containers/about/Services";
import { MainLayout } from "@/layouts/MainLayout";

interface AboutPageProps {}

const AboutPage: React.FC<AboutPageProps> = () => {
  return (
    <MainLayout>
      <SectionBanner />
      <SectionDescription />
      <SectionServices />
      <SectionReviewClients/>
    </MainLayout>
  );
};

export default AboutPage;
