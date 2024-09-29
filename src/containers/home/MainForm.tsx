import { useRouter } from "next/router";
import InputUI from "@/ui/InputUI";
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
import { CarFilter } from "@/types/Car.type";
import moment from "moment";
import { toast } from "react-toastify";
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
  const [filter, setFilter] = useState<CarFilter>({
    booking: {
      pickupDate: "T",
      returnDate: "T",
    },
  } as CarFilter);

  return (
    <ContainerMainFrom>
      <ContainerMainFromImage></ContainerMainFromImage>
      <ContainerBackground></ContainerBackground>
      <ContainerFormHome>
        <ContainerTextFormHome>
          <h1>¡Prepárate para tu próximo viaje desde aquí!</h1>
          <p>
            Encuentra tu auto ideal ingresando las fechas de tu viaje y
            seleccionando la categoría de los vehículos. ¡Reserva ahora y
            comienza tu aventura!
          </p>
        </ContainerTextFormHome>
        <ContainerFormHomeInputs>
          <FormHomeContainerColumn>
            <div>
              <InputUI
                type={"date"}
                placeholder="Fecha de retiro"
                placeholderColor="#fff"
                backgroundcolor="rgba(255, 255, 255, 0.25)"
                stylesContainer={{
                  border: "1px solid rgba(213, 221, 234, 0.47)",
                }}
                stylesInput={{
                  background: "transparent",
                  color: "#fff",
                }}
                value={getDateFromFinalDate(filter.booking.pickupDate) ?? ""}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  const newDate = e.target.value;
                  const existingTime = getTimeFromFinalDate(
                    filter.booking.pickupDate
                  );
                  setFilter({
                    ...filter,
                    booking: {
                      ...filter.booking,
                      pickupDate: `${newDate}T${existingTime}`,
                    },
                  });
                }}
                SvgIcon={<CalendarIcon width={25} height={25} />}
              ></InputUI>
              <InputUI
                type={"date"}
                placeholder="Fecha de entrega"
                placeholderColor="#fff"
                backgroundcolor="rgba(255, 255, 255, 0.25)"
                stylesContainer={{
                  border: "1px solid rgba(213, 221, 234, 0.47)",
                }}
                stylesInput={{
                  background: "transparent",
                  color: "#fff",
                }}
                SvgIcon={<CalendarIcon width={25} height={25} />}
                value={getDateFromFinalDate(filter.booking.returnDate) ?? ""}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  const newDate = e.target.value;
                  const existingTime = getTimeFromFinalDate(
                    filter.booking.returnDate
                  );

                  const returnDateTime = `${newDate}T${existingTime}`;
                  let initialDate = moment(
                    filter.booking.pickupDate.toString().split("T")[0]
                  ).format("YYYY-MM-DD");
                  let endDate = moment(
                    `${newDate}T${existingTime}`.split("T")[0]
                  ).format("YYYY-MM-DD");

                  if (endDate < initialDate) {
                    console.log("error");
                    setFilter({
                      ...filter,
                      booking: {
                        ...filter.booking,
                        returnDate: "",
                      },
                    });
                    toast.warning(`Usted seleccionó una fecha no válida`, {
                      position: "bottom-left",
                    });
                  } else {
                    setFilter({
                      ...filter,
                      booking: {
                        ...filter.booking,
                        returnDate: returnDateTime,
                      },
                    });
                  }
                }}
              ></InputUI>
            </div>
            <div>
              <InputUI
                type={"time"}
                placeholder="Hora"
                placeholderColor="#fff"
                backgroundcolor="rgba(255, 255, 255, 0.25)"
                stylesContainer={{
                  border: "1px solid rgba(213, 221, 234, 0.47)",
                }}
                stylesInput={{
                  background: "transparent",
                  color: "#fff",
                }}
                SvgIcon={<ClockIcon width={25} height={25} />}
                value={getTimeFromFinalDate(filter.booking.pickupDate) ?? ""}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  const newTime = e.target.value;
                  const existingDate = getDateFromFinalDate(
                    filter.booking.pickupDate
                  );
                  setFilter({
                    ...filter,
                    booking: {
                      ...filter.booking,
                      pickupDate: `${existingDate}T${newTime}`,
                    },
                  });
                }}
              ></InputUI>
              <InputUI
                type={"time"}
                placeholder="Hora"
                placeholderColor="#fff"
                backgroundcolor="rgba(255, 255, 255, 0.25)"
                stylesContainer={{
                  border: "1px solid rgba(213, 221, 234, 0.47)",
                }}
                stylesInput={{
                  background: "transparent",
                  color: "#fff",
                }}
                SvgIcon={<ClockIcon width={25} height={25} />}
                value={getTimeFromFinalDate(filter.booking.returnDate) ?? ""}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  const newTime = e.target.value;
                  const existingDate = getDateFromFinalDate(
                    filter.booking.returnDate
                  );
                  setFilter({
                    ...filter,
                    booking: {
                      ...filter.booking,
                      returnDate: `${existingDate}T${newTime}`,
                    },
                  });
                }}
              ></InputUI>
            </div>
          </FormHomeContainerColumn>
          {/* <FormHomeContainerSelect>
            <SelectInputUI
              value={""}
              backgroundColor="rgba(255, 255, 255, 0.25)"
              stylesContainer={{
                border: "1px solid rgba(213, 221, 234, 0.47)",
                width: "100%",
              }}
              width="96%"
              placeholder="Categoria del auto"
              arrayOptions={optionsArray}
            ></SelectInputUI>
          </FormHomeContainerSelect> */}
        </ContainerFormHomeInputs>
        <ContainerButtonForm>
          <ButtonPrincipalUI
            onClick={() => {
              if (
                filter.booking.pickupDate != "T" &&
                filter.booking.returnDate != "T"
              ) {
                return route.push(
                  `/reservas?pickupDate=${filter.booking.pickupDate}&returnDate=${filter.booking.returnDate}`
                );
              }
              if (
                filter.booking.pickupDate != "T" &&
                filter.booking.returnDate == "T"
              ) {
                return route.push(
                  `/reservas?pickupDate=${filter.booking.pickupDate}`
                );
              }
              route.push(`/reservas`);
            }}
          >
            Buscar
          </ButtonPrincipalUI>
        </ContainerButtonForm>
      </ContainerFormHome>
    </ContainerMainFrom>
  );
};

export default MainForm;
