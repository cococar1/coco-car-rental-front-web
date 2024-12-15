import FilterPanel from "@/components/FilterPanel";
import { useRouter } from "next/router";
import SectionSearchResult from "@/containers/booking/search-result";
import { useBookingContext } from "@/context/BookingContext";
import { MainLayout } from "@/layouts/Main.layout";
import { ContainerPageBooking } from "@/styles/pages/booking,style";
import { useEffect } from "react";
import { useCarContext } from "@/context/CarContext";
import { LoaderUI } from "@/ui/LoaderUI";

interface FrequentQuestionsPageProps {}

const CarBookingPage: React.FC<FrequentQuestionsPageProps> = () => {
  const route = useRouter();
  const { setNewBooking } = useBookingContext();
  const {
    filter,
    setFilter,
    carsOptions: { data, loading },
    applyFilter,
  } = useCarContext();
  const query = route.query;
  useEffect(() => {
    console.log("queryyy");
    console.log(query);
    if (query.pickupDate || query.returnDate) {
      setFilter({
        ...filter,
        booking: {
          pickupDate: query.pickupDate ?? "",
          returnDate: query.returnDate ?? "",
        },
      });
      const firstPetition = {
        ...filter,
        booking: {
          pickupDate: query.pickupDate ?? "",
          returnDate: query.returnDate ?? "",
        },
      };
      console.log(
        "🚀 ~ file: index.tsx:40 ~ useEffect ~ firstPetition:",
        firstPetition
      );
      applyFilter(firstPetition as any);
    }
    if (filter.booking?.pickupDate && filter.booking?.returnDate) {
      applyFilter();
      setNewBooking({
        pickupDate: filter.booking?.pickupDate,
        returnDate: filter.booking?.returnDate,
      });
    }
  }, [query]);

  return (
    <MainLayout changeColorNavBar={true}>
      <ContainerPageBooking>
        <FilterPanel />
        {loading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "calc(100% - 300px)",
              padding: "0px 15px",
            }}
          >
            <LoaderUI></LoaderUI>
          </div>
        ) : (
          <SectionSearchResult data={data ?? []}></SectionSearchResult>
        )}
      </ContainerPageBooking>
    </MainLayout>
  );
};

export default CarBookingPage;
