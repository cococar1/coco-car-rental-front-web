import InternalNavigation from "@/components/internalNavigation";
import { InternalLayout } from "@/layouts/Internal.layout";
import { MainLayout } from "@/layouts/Main.layout";
import { ContainerPageAccount } from "@/styles/pages/account.style";

interface AccountPageProps {}

const AccountPage: React.FC<AccountPageProps> = () => {
  return (
    <MainLayout changeColorNavBar={true}>
      <InternalLayout>
        <div></div>
      </InternalLayout>
    </MainLayout>
  );
};

export default AccountPage;
