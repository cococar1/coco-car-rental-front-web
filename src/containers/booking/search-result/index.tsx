import CardAutoPrincipal from "@/components/CardAutoPrincipal/index,";
import { ContainerCards, ContainerSearchResult, TitleResult } from "./searchResult.style";

interface SectionSearchResultProps {}

const SectionSearchResult: React.FC<SectionSearchResultProps> = () => {
  return (
    <ContainerSearchResult>
      <TitleResult>Resultados de tu búsqueda</TitleResult>
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
