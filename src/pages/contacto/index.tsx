import { MainLayout } from "@/layouts/Main.layout";
import SectionBanner from "@/components/Banner/Banner";
import { ButtonPrincipalUI } from "@/ui/ButtonPrincipalUi";
import SectionContact from "@/containers/contact/Contact";

interface ContactPageProps {}

const ContactPage: React.FC<ContactPageProps> = () => {
  return (
    <MainLayout>
      <SectionBanner
        title="Contacto"
        text="Discover our car rental options with Rent a Car Select from a range of car options and local specials."
        Button={<ButtonPrincipalUI>Consulta</ButtonPrincipalUI>}
      />
      <SectionContact></SectionContact>
    </MainLayout>
  );
};

export default ContactPage;
