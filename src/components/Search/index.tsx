import InpuntUI from "@/ui/InputUI/indext";
import { ContainerSearch } from "./search.style";
import SearchIcon from "@/assets/svgs/searchIcon";
import { ButtonPrincipalUI } from "@/ui/ButtonPrincipalUi";

interface SearchProps {
  stylesContainer?: React.CSSProperties;
}

const Search: React.FC<SearchProps> = ({ stylesContainer }) => {
  return (
    <ContainerSearch style={stylesContainer ? stylesContainer : {}}>
      {" "}
      <InpuntUI
        SvgIcon={<SearchIcon color="#AEB7C1"></SearchIcon>}
        type="text"
        backgroundColor="#ffffff"
        placeholder="Busca tu pregunta"
        positionIcon={"LEFT"}
        stylesContainer={{ border: "none", width: "100%" }}
        stylesInput={{ marginLeft: "20px", color: "#0000000", width: "100% " }}
        placeholderColor="#B4B4B4"
      ></InpuntUI>
      <ButtonPrincipalUI
        sx={{
          borderRadius: "50px",
          padding: "10px",
          width: "140px",
          background: "#EE6F43",
        }}
      >
        Search
      </ButtonPrincipalUI>
    </ContainerSearch>
  );
};

export default Search;
