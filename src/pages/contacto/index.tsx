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
        text="Estamos aquí para ayudarte, contáctanos fácilmente hoy"
        Button={<></>}
      />
      <SectionContact></SectionContact>
    </MainLayout>
  );
};

export default ContactPage;
