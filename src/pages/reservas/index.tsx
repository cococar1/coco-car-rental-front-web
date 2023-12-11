import CardAutoPrincipal from "@/components/CardAutoPrincipal/index,";
import FilterPanel from "@/components/FilterPanel";
import SectionSearchResult from "@/containers/booking/search-result";
import { MainLayout } from "@/layouts/MainLayout";
import { ContainerPageBooking } from "@/styles/pages/booking,style";

interface FrequentQuestionsPageProps {}

const CarBookingPage: React.FC<FrequentQuestionsPageProps> = () => {
  return (
    <MainLayout>
      <ContainerPageBooking>
        <FilterPanel></FilterPanel>
        <SectionSearchResult></SectionSearchResult>
      </ContainerPageBooking>
    </MainLayout>
  );
};

export default CarBookingPage;
