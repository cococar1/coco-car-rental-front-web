import FilterPanel from "@/components/FilterPanel";
import SectionSearchResult from "@/containers/booking/search-result";
import { ALL_CAR } from "@/gql/cars/query";
import { MainLayout } from "@/layouts/MainLayout";
import { ContainerPageBooking } from "@/styles/pages/booking,style";
import { useQuery } from "@apollo/client";
import { useEffect } from "react";

interface FrequentQuestionsPageProps {}

const CarBookingPage: React.FC<FrequentQuestionsPageProps> = () => {
  const { data, loading } = useQuery(ALL_CAR);

  useEffect(() => {
    console.log(data);
  }, [data]);

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
