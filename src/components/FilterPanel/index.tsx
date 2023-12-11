import InpuntUI from "@/ui/InputUI";
import {
  ContainerCheckBoxScroll,
  ContainerDate,
  ContainerFeature,
  ContainerFilterPanel,
  ContainerModel,
} from "./filterPanel.style";
import CalendarIcon from "@/assets/svgs/calendarIcon";
import ClockIcon from "@/assets/svgs/clockIcon";
import SelectInputUI from "@/ui/SelectInputUI";
import { ButtonPrincipalUI } from "../../ui/ButtonPrincipalUi/index";
import CheckBoxUI from "@/ui/CheckBoxUI";

interface FilterPanelProps {}

const FilterPanel: React.FC<FilterPanelProps> = () => {
  return (
    <ContainerFilterPanel>
      <h2>Filtros</h2>
      <ContainerDate>
        <div>
          <InpuntUI
            stylesContainer={{ width: "60%" }}
            type={"date"}
            placeholder="Fecha de retiro"
            backgroundColor="#ffffff"
            SvgIcon={<CalendarIcon width={25} height={25} />}
          ></InpuntUI>
          <InpuntUI
            stylesContainer={{ width: "40%" }}
            //   stylesInput={{width:"30%"}}
            type={"time"}
            placeholder="Hora"
            backgroundColor="#ffffff"
            SvgIcon={<ClockIcon width={25} height={25} />}
          ></InpuntUI>
        </div>
        <div>
          <InpuntUI
            stylesContainer={{ width: "60%" }}
            type={"date"}
            placeholder="Fecha de entrega"
            backgroundColor="#ffffff"
            SvgIcon={<CalendarIcon width={25} height={25} />}
          ></InpuntUI>
          <InpuntUI
            stylesContainer={{ width: "40%" }}
            //   stylesInput={{width:"30%"}}
            type={"time"}
            placeholder="Hora"
            backgroundColor="#ffffff"
            SvgIcon={<ClockIcon width={25} height={25} />}
          ></InpuntUI>
        </div>
        <div>
          <SelectInputUI
            backgroundColor={"#ffffff"}
            width="100%"
            arrayOptions={[]}
            placeholder="Categoria del auto"
            stylesContainer={{ border: " 1px solid rgba(213, 221, 234, 0.47)" }}
          ></SelectInputUI>
        </div>
        <div>
          <ButtonPrincipalUI sx={{ width: "100%", fontSize: " 16px" }}>
            Actualizar
          </ButtonPrincipalUI>
        </div>
      </ContainerDate>
      <ContainerFeature>
        <h2>Caracteristicas</h2>
        <ContainerCheckBoxScroll>
          <CheckBoxUI name="Sedan"></CheckBoxUI>
          <CheckBoxUI name="Sedan"></CheckBoxUI>
          <CheckBoxUI name="Sedan"></CheckBoxUI>
          <CheckBoxUI name="Sedan"></CheckBoxUI>
          <CheckBoxUI name="Sedan"></CheckBoxUI>
          <CheckBoxUI name="Sedan"></CheckBoxUI>
          <CheckBoxUI name="Sedan"></CheckBoxUI>
          <CheckBoxUI name="Sedan"></CheckBoxUI>
          <CheckBoxUI name="Sedan"></CheckBoxUI>
          <CheckBoxUI name="Sedan"></CheckBoxUI>
          <CheckBoxUI name="Sedan"></CheckBoxUI>
          <CheckBoxUI name="Sedan"></CheckBoxUI>
          <CheckBoxUI name="Sedan"></CheckBoxUI>
          <CheckBoxUI name="SUV"></CheckBoxUI>{" "}
          <CheckBoxUI name="Wagon"></CheckBoxUI>{" "}
          <CheckBoxUI name="Sedan"></CheckBoxUI>{" "}
          <CheckBoxUI name="Pickup"></CheckBoxUI>{" "}
          <CheckBoxUI name="Sedan"></CheckBoxUI>{" "}
          <CheckBoxUI name="Sedan"></CheckBoxUI>{" "}
          <CheckBoxUI name="Crossover"></CheckBoxUI>{" "}
          <CheckBoxUI name="Sedan"></CheckBoxUI>{" "}
          <CheckBoxUI name="SUV"></CheckBoxUI>{" "}
          <CheckBoxUI name="Coupe"></CheckBoxUI>
        </ContainerCheckBoxScroll>
      </ContainerFeature>
      <ContainerModel>
        <h2>Modelo</h2>
        <SelectInputUI
          width="100%"
          arrayOptions={[]}
          backgroundColor="#ffffff"
          placeholder="Marca"
        ></SelectInputUI>
        <SelectInputUI
          width="100%"
          arrayOptions={[]}
          backgroundColor="#ffffff"
          placeholder="Moodelo"
        ></SelectInputUI>
      </ContainerModel>
    </ContainerFilterPanel>
  );
};

export default FilterPanel;
