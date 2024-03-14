import CardBooking from "@/components/CardBooking";
import { InternalLayout } from "@/layouts/Internal.layout";
import { MainLayout } from "@/layouts/Main.layout";

interface AccountBookingPageProps {}

const AccountBookingPage: React.FC<AccountBookingPageProps> = () => {
  return (
    <MainLayout changeColorNavBar={true}>
      <InternalLayout>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <CardBooking />
          <CardBooking />
          <CardBooking />
          <CardBooking />
        </div>
      </InternalLayout>
    </MainLayout>
  );
};

export default AccountBookingPage;
