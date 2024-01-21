import FilterPanel from "@/components/FilterPanel";
import { useRouter } from "next/router";
import SectionSearchResult from "@/containers/booking/search-result";
import { useBookingContext } from "@/context/BookingContext";
import { ALL_CAR } from "@/gql/cars/query";
import { MainLayout } from "@/layouts/MainLayout";
import { ContainerPageBooking } from "@/styles/pages/booking,style";
import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { useCar } from "@/hooks/usCar";
import { useCarContext } from "@/context/CarContext";

interface FrequentQuestionsPageProps {}

const CarBookingPage: React.FC<FrequentQuestionsPageProps> = () => {
  const { data, loading } = useQuery(ALL_CAR);
  const route = useRouter();
  const { setNewBooking } = useBookingContext();
  const { filter, setFilter } = useCarContext();
  const query = route.query;
  useEffect(() => {
    if ((query as Object).hasOwnProperty("pickupDate")) {
      setFilter({
        ...query,
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

  return (
    <MainLayout changeColorNavBar={true}>
      <ContainerPageBooking>
        <FilterPanel></FilterPanel>
        <SectionSearchResult data={data?.cars ?? []}></SectionSearchResult>
      </ContainerPageBooking>
    </MainLayout>
  );
};

export default CarBookingPage;
