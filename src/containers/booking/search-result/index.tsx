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
  return (
    <ContainerSearchResult>
      <TitleResult>Resultados de tu búsqueda</TitleResult>
      <ContainerCards>
        {data?.map((car, index) => (
          <CardAutoPrincipal
            countUser={car.countPerson}
            description={car.description}
            fullType={car.fullType}
            maxTankQuantity={car.maxTankQuantity}
            minTankQuantity={car.minTankQuantity}
            name={car.name}
            price={car.price}
            title={car.subTitle}
            urlImage={car.image}
            typeChange={car.typeChange}
            key={index}
          />
        ))}
      </ContainerCards>
    </ContainerSearchResult>
  );
};

export default SectionSearchResult;
