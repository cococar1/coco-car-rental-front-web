import InternalNavigation from "@/components/internalNavigation";
import { InternalLayout } from "@/layouts/Internal.layout";
import { MainLayout } from "@/layouts/Main.layout";
import { ContainerPageAccount } from "@/styles/pages/account.style";
import InformationPersonal from "../../../containers/account/information-personal/index";

interface PersonalInformationPageProps {}

const PersonalInformationPage: React.FC<PersonalInformationPageProps> = () => {
  return (
    <MainLayout changeColorNavBar={true}>
      <InternalLayout>
        <InformationPersonal></InformationPersonal>
      </InternalLayout>
    </MainLayout>
  );
};

export default PersonalInformationPage;
