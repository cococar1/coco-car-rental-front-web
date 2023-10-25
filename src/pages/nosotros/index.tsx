import SectionBanner from "@/containers/about/Banner";
import { MainLayout } from "@/layouts/MainLayout";

interface AboutPageProps {}

const AboutPage: React.FC<AboutPageProps> = () => {
  return (
    <MainLayout>
      <SectionBanner />
    </MainLayout>
  );
};

export default AboutPage;
