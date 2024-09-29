import InputUI from "@/ui/InputUI";
import {
  ButtonFilterOption,
  ContainerCheckBoxScroll,
  ContainerContentElementCheckBook,
  ContainerDate,
  ContainerFeature,
  ContainerFilterPanel,
  ContainerFilterSecondary,
  ContainerInputYears,
  ContainerSimpleElement,
  LineYear,
  OptionFilter,
  TitleFilter,
} from "./filterPanel.style";
import CalendarIcon from "@/assets/svgs/calendarIcon";
import ClockIcon from "@/assets/svgs/clockIcon";
import SelectInputUI from "@/ui/SelectInputUI";
import { ButtonPrincipalUI } from "../../ui/ButtonPrincipalUi/index";
import CheckBoxUI from "@/ui/CheckBoxUI";
import { buildQueryString } from "@/helpers/filter.helpers.options";
import {
  getDateFromFinalDate,
  getTimeFromFinalDate,
} from "@/helpers/dateTime.helper";
import { ChangeEvent, useEffect, useState } from "react";
import { useCarContext } from "@/context/CarContext";
import { useRouter } from "next/router";
import { CarFilter, TypeChange } from "@/types/Car.type";
import { EventChange } from "@/types/general";
import FilterIcon from "@/assets/svgs/FilterIcon";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import useScreen from "@/hooks/useScreen";
import { capitalizeFirstLetter } from "@/helpers/capitalize";
import moment from "moment";
import { toast } from "react-toastify";

interface FilterPanelProps {}

const FilterPanel: React.FC<FilterPanelProps> = () => {
  const {
    filter,
    setFilter,
    applyFilter,
    brandFilter,
    fullTypesFilter,
    categoryFilter,
    featureFilterOptions: { data: featuresFilter },
  } = useCarContext();

  const [stateViewFilter, setStateViewFilter] = useState(true);

  const { width } = useScreen();
  console.log(width);
  const router = useRouter();
  useEffect(() => {
    if (width <= 1024) {
      setStateViewFilter(false);
    } else {
      setStateViewFilter(true);
    }
  }, [width]);

  const handleUpdateButton = () => {
    const result = buildQueryString(filter.booking);

    applyFilter();
    router.push(`/reservas?${result}`);
  };

  const handleSelectTypeChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    typeProperty: keyof CarFilter
  ) => {
    const checkboxName = event.target.name?.toString().toLocaleLowerCase();

    if (checkboxName && filter[typeProperty]?.includes(checkboxName)) {
      setFilter({
        ...filter,
        [typeProperty]: filter[typeProperty].filter(
          (e: string) => e != checkboxName
        ),
      });
    } else {
      setFilter({
        ...filter,
        [typeProperty]: filter[typeProperty]
          ? [...filter[typeProperty], checkboxName]
          : [checkboxName],
      });
    }
  };

  return (
    <ContainerFilterPanel>
      <TitleFilter>Filtros</TitleFilter>
      <ContainerDate>
        <div>
          <InputUI
            stylesContainer={{ width: "60%" }}
            type={"date"}
            placeholder="Fecha de retiro"
            value={getDateFromFinalDate(filter.booking?.pickupDate) ?? ""}
            backgroundcolor="#ffffff"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              const newDate = e.target.value;
              const existingTime = getTimeFromFinalDate(
                filter.booking?.pickupDate ?? ""
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
            stylesContainer={{ width: "40%" }}
            value={getTimeFromFinalDate(filter.booking?.pickupDate) ?? ""}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              const newTime = e.target.value;

              const existingDate = getDateFromFinalDate(
                filter.booking?.pickupDate
              );
              setFilter({
                ...filter,
                booking: {
                  ...filter.booking,
                  pickupDate: `${existingDate}T${newTime}`,
                },
              });
            }}
            //   stylesInput={{width:"30%"}}
            type={"time"}
            placeholder="Hora"
            backgroundcolor="#ffffff"
            SvgIcon={<ClockIcon width={25} height={25} />}
          ></InputUI>
        </div>
        <div>
          <InputUI
            stylesContainer={{ width: "60%" }}
            type={"date"}
            placeholder="Fecha de entrega"
            backgroundcolor="#ffffff"
            value={getDateFromFinalDate(filter.booking?.returnDate) ?? ""}
            onChange={(e: EventChange) => {
              const newDate = e.target.value;
              const existingTime = getTimeFromFinalDate(
                filter.booking?.returnDate
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
            SvgIcon={<CalendarIcon width={25} height={25} />}
          ></InputUI>
          <InputUI
            stylesContainer={{ width: "40%" }}
            //   stylesInput={{width:"30%"}}
            type={"time"}
            placeholder="Hora"
            backgroundcolor="#ffffff"
            value={getTimeFromFinalDate(filter.booking?.returnDate) ?? ""}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              const newTime = e.target.value;
              const existingDate = getDateFromFinalDate(
                filter.booking?.returnDate
              );
              setFilter({
                ...filter,
                booking: {
                  ...filter.booking,
                  returnDate: `${existingDate}T${newTime}`,
                },
              });
            }}
            SvgIcon={<ClockIcon width={25} height={25} />}
          ></InputUI>
        </div>
        <div>
          <SelectInputUI
            value={(filter.brand = "" ? "todos" : filter.brand)}
            width="100%"
            styleSelect={{ color: "#333" }}
            arrayOptions={brandFilter}
            backgroundColor="#ffffff"
            onChange={(e: EventChange) => {
              console.log(e.target.value);
              if (e.target.value.toLocaleLowerCase() == "todos") {
                if (filter.hasOwnProperty("brand")) {
                  const { brand, ...rest } = filter;
                  setFilter({
                    ...rest,
                  });
                }
              } else {
                setFilter({
                  ...filter,
                  brand: e.target.value,
                });
              }
            }}
            placeholder="Marca"
            stylesContainer={{
              border: " 1px solid rgba(213, 221, 234, 0.47)",
            }}
          ></SelectInputUI>
        </div>
        <div>
          <ButtonPrincipalUI
            sx={{ width: "100%", fontSize: " 16px", marginTop: "10px" }}
            onClick={handleUpdateButton}
          >
            Actualizar
          </ButtonPrincipalUI>
        </div>
      </ContainerDate>
      <OptionFilter>
        <ButtonFilterOption
          onClick={() => {
            setStateViewFilter(!stateViewFilter);
          }}
        >
          <FilterIcon />
          filter
        </ButtonFilterOption>
      </OptionFilter>
      {stateViewFilter && (
        <ContainerFilterSecondary>
          <ContainerFeature>
            <h2 style={{ margin: "10px 0px" }}>Caracteristicas</h2>
            <ContainerCheckBoxScroll>
              {featuresFilter &&
                featuresFilter.map((feature, index) => (
                  <CheckBoxUI
                    name={capitalizeFirstLetter(feature)}
                    key={index}
                    onChange={(e: EventChange) =>
                      handleSelectTypeChange(e, "features" as keyof CarFilter)
                    }
                  />
                ))}
            </ContainerCheckBoxScroll>
          </ContainerFeature>
          <ContainerSimpleElement>
            <h2 style={{ margin: "10px 0px" }}>Modelo</h2>

            <SelectInputUI
              backgroundColor={"#ffffff"}
              width="100%"
              value={(filter.model = "" ? "todos" : filter.model)}
              styleSelect={{ color: "#333" }}
              arrayOptions={categoryFilter}
              placeholder="Modelo del auto"
              stylesContainer={{
                border: " 1px solid rgba(213, 221, 234, 0.47)",
              }}
              onChange={(e: EventChange) => {
                console.log(e.target.value);
                if (e.target.value.toLocaleLowerCase() == "todos") {
                  if (filter.hasOwnProperty("model")) {
                    const { model, ...rest } = filter;
                    setFilter({
                      ...rest,
                    });
                  }
                } else {
                  setFilter({
                    ...filter,
                    model: e.target.value,
                  });
                }
              }}
            ></SelectInputUI>
          </ContainerSimpleElement>
          {/* 
      <ContainerSimpleElement>
        <h2>Año</h2>
        <ContainerInputYears>
          <SelectInputUI
            arrayOptions={[]}
            placeholder="All"
            value={""}
            width="45%"
            backgroundColor="#ffffff"
          ></SelectInputUI>
          <LineYear></LineYear>
          <SelectInputUI
            arrayOptions={[]}
            placeholder="All"
            value={""}
            width="45%"
            backgroundColor="#ffffff"
          ></SelectInputUI>
        </ContainerInputYears>
      </ContainerSimpleElement> */}
          {/* <ContainerSimpleElement>
        <h2>Tipo de</h2>
        <ContainerContentElementCheckBook>
          <CheckBoxUI name="AWD/4WD"></CheckBoxUI>
          <CheckBoxUI name="Front Wheel Drive"></CheckBoxUI>
          <CheckBoxUI name="Rear Wheel Drive"></CheckBoxUI>
        </ContainerContentElementCheckBook>
      </ContainerSimpleElement> */}
          <ContainerSimpleElement>
            <h2 style={{ margin: "10px 0px" }}>Combustible</h2>
            <ContainerContentElementCheckBook>
              {fullTypesFilter &&
                fullTypesFilter.map((data, index) => (
                  <CheckBoxUI
                    name={data}
                    key={index}
                    onChange={(e: EventChange) =>
                      handleSelectTypeChange(e, "fullTypes" as keyof CarFilter)
                    }
                  />
                ))}
            </ContainerContentElementCheckBook>
          </ContainerSimpleElement>

          <ContainerSimpleElement>
            <h2 style={{ margin: "10px 0px" }}>Transmisión</h2>
            <ContainerContentElementCheckBook>
              {Object.keys(TypeChange).map((key) => (
                <CheckBoxUI
                  key={key}
                  name={capitalizeFirstLetter(key)}
                  onChange={(e: EventChange) =>
                    handleSelectTypeChange(e, "typeChange" as keyof CarFilter)
                  }
                ></CheckBoxUI>
              ))}
              {/* <CheckBoxUI
            name="Automatico"
            onChange={(e) =>
              handleSelectTypeChange(e, "typeChange" as keyof CarFilter)
            }
          ></CheckBoxUI>
          <CheckBoxUI
            name="Manual"
            onChange={(e) =>
              handleSelectTypeChange(e, "typeChange" as keyof CarFilter)
            }
          ></CheckBoxUI> */}
            </ContainerContentElementCheckBook>
          </ContainerSimpleElement>

          {/* <ContainerSimpleElement>
        <h2>Milaeage</h2>
        <SelectInputUI
          value={""}
          arrayOptions={[]}
          placeholder="Any"
          width="100%"
          backgroundColor="#ffffff"
        ></SelectInputUI>
      </ContainerSimpleElement> */}
        </ContainerFilterSecondary>
      )}{" "}
    </ContainerFilterPanel>
  );
};

export default FilterPanel;
