import CardAutoPrincipal from "@/components/CardAutoPrincipal/index,";
import { ContainerCards, ContainerSearchResult } from "./searchResult.style";

interface SectionSearchResultProps {}

const SectionSearchResult: React.FC<SectionSearchResultProps> = () => {
  return (
    <ContainerSearchResult>
      <p>Resultados de tu búsqueda</p>
      <ContainerCards>
        <CardAutoPrincipal></CardAutoPrincipal>
        <CardAutoPrincipal></CardAutoPrincipal>
        <CardAutoPrincipal></CardAutoPrincipal>
        <CardAutoPrincipal></CardAutoPrincipal>
        <CardAutoPrincipal></CardAutoPrincipal>
        <CardAutoPrincipal></CardAutoPrincipal>
        <CardAutoPrincipal></CardAutoPrincipal>
        <CardAutoPrincipal></CardAutoPrincipal>
        <CardAutoPrincipal></CardAutoPrincipal>
        <CardAutoPrincipal></CardAutoPrincipal>
        <CardAutoPrincipal></CardAutoPrincipal>
      </ContainerCards>
    </ContainerSearchResult>
  );
};

export default SectionSearchResult;
