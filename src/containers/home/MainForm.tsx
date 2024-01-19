import { useRouter } from "next/router";
import InpuntUI from "@/ui/InputUI";
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
import ClockIcon from "@/assets/svgs/clockIcon";
import { ChangeEvent, useEffect, useState } from "react";
import {
  getDateFromFinalDate,
  getTimeFromFinalDate,
} from "@/helpers/dateTime.helper";
import Link from "next/link";
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
  const route = useRouter();
  const [filter, setFilter] = useState<any>({
    pickupDate: "T",
    returnDate: "T",
  });
  useEffect(() => {
    console.log("filter");
    console.log(filter);
  }, [filter, setFilter]);
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
                placeholder="Fecha de retiro"
                placeholderColor="#fff"
                backgroundColor="rgba(255, 255, 255, 0.25)"
                stylesContainer={{
                  border: "1px solid rgba(213, 221, 234, 0.47)",
                }}
                stylesInput={{
                  background: "transparent",
                  color: "#fff",
                }}
                value={getDateFromFinalDate(filter.pickupDate) ?? ""}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  const newDate = e.target.value;
                  const existingTime = getTimeFromFinalDate(filter.pickupDate);
                  setFilter({
                    ...filter,
                    pickupDate: `${newDate}T${existingTime}`,
                  });
                }}
                SvgIcon={<CalendarIcon width={25} height={25} />}
              ></InpuntUI>
              <InpuntUI
                type={"date"}
                placeholder="Fecha de entrega"
                placeholderColor="#fff"
                backgroundColor="rgba(255, 255, 255, 0.25)"
                stylesContainer={{
                  border: "1px solid rgba(213, 221, 234, 0.47)",
                }}
                stylesInput={{
                  background: "transparent",
                  color: "#fff",
                }}
                SvgIcon={<CalendarIcon width={25} height={25} />}
                value={getDateFromFinalDate(filter.returnDate) ?? ""}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  const newDate = e.target.value;
                  const existingTime = getTimeFromFinalDate(filter.returnDate);
                  setFilter({
                    ...filter,
                    returnDate: `${newDate}T${existingTime}`,
                  });
                }}
              ></InpuntUI>
            </div>
            <div>
              <InpuntUI
                type={"time"}
                placeholder="Hora"
                placeholderColor="#fff"
                backgroundColor="rgba(255, 255, 255, 0.25)"
                stylesContainer={{
                  border: "1px solid rgba(213, 221, 234, 0.47)",
                }}
                stylesInput={{
                  background: "transparent",
                  color: "#fff",
                }}
                SvgIcon={<ClockIcon width={25} height={25} />}
                value={getTimeFromFinalDate(filter.pickupDate) ?? ""}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  const newTime = e.target.value;
                  const existingDate = getDateFromFinalDate(filter.pickupDate);
                  setFilter({
                    ...filter,
                    pickupDate: `${existingDate}T${newTime}`,
                  });
                }}
              ></InpuntUI>
              <InpuntUI
                type={"time"}
                placeholder="Hora"
                placeholderColor="#fff"
                backgroundColor="rgba(255, 255, 255, 0.25)"
                stylesContainer={{
                  border: "1px solid rgba(213, 221, 234, 0.47)",
                }}
                stylesInput={{
                  background: "transparent",
                  color: "#fff",
                }}
                SvgIcon={<ClockIcon width={25} height={25} />}
                value={getTimeFromFinalDate(filter.returnDate) ?? ""}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  const newTime = e.target.value;
                  const existingDate = getDateFromFinalDate(filter.returnDate);
                  setFilter({
                    ...filter,
                    returnDate: `${existingDate}T${newTime}`,
                  });
                }}
              ></InpuntUI>
            </div>
          </FormHomeContainerColumn>
          <FormHomeContainerSelect>
            <SelectInputUI
              backgroundColor="rgba(255, 255, 255, 0.25)"
              stylesContainer={{
                border: "1px solid rgba(213, 221, 234, 0.47)",
              }}
              width="96%"
              placeholder="Categoria del auto"
              arrayOptions={optionsArray}
            ></SelectInputUI>
          </FormHomeContainerSelect>
        </ContainerFormHomeInputs>
        <ContainerButtonForm>
          {/* <Link
            href={
              filter.pickupDate != "T" || filter.pickupDate != "T"
                ? `/reservas?pickupDate=${filter.pickupDate}&returnDate=${filter.returnDate}`
                : "/reservas"
            }
          > */}
          <ButtonPrincipalUI
            onClick={() => {
              console.log(filter)
              if (filter.pickupDate != "T" || filter.returnDate != "T") {
                route.push(
                  `/reservas?pickupDate=${filter.pickupDate}&returnDate=${filter.returnDate}`
                );
              }
              if (filter.pickupDate != "T" && filter.pickupDate == "T") {
                route.push(`/reservas?pickupDate=${filter.pickupDate}`);
              }
              route.push(`/reservas`);
            }}
          >
            Buscar
          </ButtonPrincipalUI>
          {/* </Link> */}
        </ContainerButtonForm>
      </ContainerFormHome>
    </ContainerMainFrom>
  );
};

export default MainForm;
