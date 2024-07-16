import CardAutoPrincipal from "@/components/CardAutoPrincipal/index,";
import {
  ContainerCards,
  ContainerSearchResult,
  TitleResult,
} from "./searchResult.style";
import { Car } from "@/types/Car.type";

interface SectionSearchResultProps {
  data: Car[];
}

const SectionSearchResult: React.FC<SectionSearchResultProps> = ({ data }) => {
console.log( "data",data)
  return (
    <ContainerSearchResult>
      {/* <TitleResult>Resultados de tu búsqueda</TitleResult> */}
      <ContainerCards>
        {data?.map((car, index) => (
          <CardAutoPrincipal car={car} key={index} />
        ))}
      </ContainerCards>
    </ContainerSearchResult>
  );
};

export default SectionSearchResult;
