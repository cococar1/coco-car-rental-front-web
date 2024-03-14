import FilterPanel from "@/components/FilterPanel";
import { useRouter } from "next/router";
import SectionSearchResult from "@/containers/booking/search-result";
import { useBookingContext } from "@/context/BookingContext";
import { MainLayout } from "@/layouts/Main.layout";
import { ContainerPageBooking } from "@/styles/pages/booking,style";
import { useEffect } from "react";
import { useCarContext } from "@/context/CarContext";

interface FrequentQuestionsPageProps {}

const CarBookingPage: React.FC<FrequentQuestionsPageProps> = () => {
  const route = useRouter();
  const { setNewBooking } = useBookingContext();
  const {
    filter,
    setFilter,
    carsOptions: { data },
  } = useCarContext();
  const query = route.query;
  useEffect(() => {
    if ((query as Object).hasOwnProperty("booking")) {
      setFilter({
        booking: {
          ...query,
        },
      });
    }
    if (filter.pickupDate && filter.returnDate) {
      setNewBooking({
        pickupDate: filter.pickupDate,
        returnDate: filter.returnDate,
      });
    }

    // if (pickupDate && pickupDate != "T" && returnDate && returnDate != "T") {
    //   setFilter({
    //     ...filter,
    //     pickupDate,
    //     returnDate,
    //   });
    //   setNewBooking({
    //     pickupDate,
    //     returnDate,
    //   });
    // }
  }, [
    data,
    filter.pickupDate,
    filter.returnDate,
    query,
    setFilter,
    setNewBooking,
  ]);

  useEffect(()=>{
console.log("data carss reservas")
console.log(data)
  },[data])
  return (
    <MainLayout changeColorNavBar={true}>
      <ContainerPageBooking>
        <FilterPanel></FilterPanel>
        <SectionSearchResult data={data ?? []}></SectionSearchResult>
      </ContainerPageBooking>
    </MainLayout>
  );
};

export default CarBookingPage;
