import CardBooking from "@/components/CardBooking";
import { useBookingContext } from "@/context/BookingContext";
import { InternalLayout } from "@/layouts/Internal.layout";
import { MainLayout } from "@/layouts/Main.layout";
import { Booking } from "@/types/Booking";
import { LoaderUI } from "@/ui/LoaderUI";

interface AccountBookingPageProps {}

const AccountBookingPage: React.FC<AccountBookingPageProps> = () => {
  const {
    bookingsOptions: { data: myBookings, loading },
  } = useBookingContext();

  console.log(myBookings);
  return (
    <MainLayout changeColorNavBar={true}>
      <InternalLayout>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            gap: "20px",
          }}
        >
          {loading ? (
            <LoaderUI />
          ) : (
            myBookings?.map((booking: Booking, index: number) => (
              <CardBooking key={index} booking={booking} />
            ))
          )}
        </div>
      </InternalLayout>
    </MainLayout>
  );
};

export default AccountBookingPage;
