import InpuntUI from "@/ui/InputUI/indext";
import {
  ContainerBackground,
  ContainerButtonForm,
  ContainerFormHome,
  ContainerFormHomeInputs,
  ContainerMainFrom,
  ContainerMainFromImage,
  ContainerTextFormHome,
  FormHomeContainerColumn,
  FormHomeContainerSelect,
} from "./mainfrom.styles";
import CalendarIcon from "@/assets/svgs/calendarIcon";
import SelectInputUI from "@/ui/SelectInputUI";
import { ButtonPrincipalUI } from "@/ui/ButtonPrincipalUi";
interface MainFormProps {}
const optionsArray = [
  {
    id: "1",
    value: "Deportivo",
  },
  {
    id: "2",
    value: "clasico",
  },
];
const MainForm: React.FC<MainFormProps> = () => {
  return (
    <ContainerMainFrom>
      <ContainerMainFromImage></ContainerMainFromImage>
      <ContainerBackground></ContainerBackground>
      <ContainerFormHome>
        <ContainerTextFormHome>
          <h1>Alquiler de vehículos y servicio de expertos</h1>
          <p>
            Discover our car rental options with Rent a Car Select from a range
            of car options and local specials.
          </p>
        </ContainerTextFormHome>
        <ContainerFormHomeInputs>
          <FormHomeContainerColumn>
            <div>
              <InpuntUI
                type={"date"}
                backgroundColor="#ffffff"
                placeholder="Fecha de retiro"
                SvgIcon={<CalendarIcon width={25} height={25} />}
              ></InpuntUI>
              <InpuntUI
                type={"date"}
                placeholder="Fecha de entrega"
                backgroundColor="#ffffff"
                SvgIcon={<CalendarIcon width={25} height={25} />}
              ></InpuntUI>
            </div>
            <div>
              <InpuntUI
                type={"time"}
                placeholder="Hora"
                backgroundColor="#ffffff"
                SvgIcon={<CalendarIcon width={25} height={25} />}
              ></InpuntUI>
              <InpuntUI
                type={"time"}
                placeholder="Hora"
                backgroundColor="#ffffff"
                SvgIcon={<CalendarIcon width={25} height={25} />}
              ></InpuntUI>
            </div>
          </FormHomeContainerColumn>
          <FormHomeContainerSelect>
            <SelectInputUI
              backgroundColor="#ffffff"
              width="96%"
              arrayOptions={optionsArray}
            ></SelectInputUI>
          </FormHomeContainerSelect>
        </ContainerFormHomeInputs>
        <ContainerButtonForm>
          <ButtonPrincipalUI>Buscar</ButtonPrincipalUI>
        </ContainerButtonForm>
      </ContainerFormHome>
    </ContainerMainFrom>
  );
};

export default MainForm;
