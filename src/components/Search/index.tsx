import InpuntUI from "@/ui/InputUI";
import { ContainerSearch } from "./search.style";
import SearchIcon from "@/assets/svgs/searchIcon";
import { ButtonPrincipalUI } from "@/ui/ButtonPrincipalUi";
import { ChangeEvent } from "react";

interface SearchProps {
  stylesContainer?: React.CSSProperties;
  setSearch:(e:string)=>void
  value: string
}

const Search: React.FC<SearchProps> = ({ stylesContainer,setSearch,value }) => {
  return (
    <ContainerSearch style={stylesContainer ? stylesContainer : {}}>
      {" "}
      <InpuntUI
            value={value}

        SvgIcon={<SearchIcon color="#AEB7C1"></SearchIcon>}
        type="text"
        backgroundcolor="#ffffff"
        placeholder="Busca tu pregunta"
        positionIcon={"LEFT"}
        stylesContainer={{ border: "none", width: "100%" }}
        stylesInput={{ marginLeft: "20px", color: "#0000000", width: "100% " }}
        placeholderColor="#B4B4B4"
        onChange={(e:any)=>{setSearch(e.target.value)}}
        
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
