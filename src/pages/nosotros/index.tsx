import SectionBanner from "@/containers/about/Banner";
import SectionDescription from "@/containers/about/description";
import { MainLayout } from "@/layouts/MainLayout";

interface AboutPageProps {}

const AboutPage: React.FC<AboutPageProps> = () => {
  return (
    <MainLayout>
      <SectionBanner />
      <SectionDescription />
    </MainLayout>
  );
};

export default AboutPage;
