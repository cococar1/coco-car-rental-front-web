import InpuntUI from "@/ui/InputUI";
import {
  ContainerCheckBoxScroll,
  ContainerContentElementCheckBook,
  ContainerDate,
  ContainerFeature,
  ContainerFilterPanel,
  ContainerInputYears,
  ContainerSimpleElement,
  LineYear,
} from "./filterPanel.style";
import CalendarIcon from "@/assets/svgs/calendarIcon";
import ClockIcon from "@/assets/svgs/clockIcon";
import SelectInputUI from "@/ui/SelectInputUI";
import { ButtonPrincipalUI } from "../../ui/ButtonPrincipalUi/index";
import CheckBoxUI from "@/ui/CheckBoxUI";
import {
  buildQueryString,
  categoriesOptions,
  fuelTypes,
} from "@/helpers/filter.helpers.options";
import {
  getDateFromFinalDate,
  getTimeFromFinalDate,
} from "@/helpers/dateTime.helper";
import { ChangeEvent, useEffect } from "react";
import { useCarContext } from "@/context/CarContext";
import { useRouter } from "next/router";
import { CarFilter, TypeChange } from "@/types/Car.type";

interface FilterPanelProps {}

const FilterPanel: React.FC<FilterPanelProps> = () => {
  const { filter, setFilter, applyFilter } = useCarContext();

  const router = useRouter();

  const handleUpdateButton = () => {
    const result = buildQueryString(filter.booking);

    router.push(`/reservas?${result}`);
    applyFilter();
  };

  const handleSelectTypeChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    typeProperty: keyof CarFilter
  ) => {
    const checkboxName = event.target.name?.toString();

    console.log(filter);
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

  useEffect(() => {
    console.log("jcimeifmiemfiemfiemdiemdiemdiem");
    console.log(filter);
  }, [router]);
  return (
    <ContainerFilterPanel>
      <h2>Filtros</h2>
      <ContainerDate>
        <div>
          <InpuntUI
            stylesContainer={{ width: "60%" }}
            type={"date"}
            placeholder="Fecha de retiro"
            value={getDateFromFinalDate(filter.booking?.pickupDate) ?? ""}
            backgroundcolor="#ffffff"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              const newDate = e.target.value;
              const existingTime = getTimeFromFinalDate(
                filter.booking?.pickupDate ?? "T"
              );
              setFilter({
                ...filter,
                booking: {
                  ...filter.booking,
                  pickupDate: `${existingTime}T${newDate}`,
                },
              });
            }}
            SvgIcon={<CalendarIcon width={25} height={25} />}
          ></InpuntUI>
          <InpuntUI
            stylesContainer={{ width: "40%" }}
            value={getTimeFromFinalDate(filter.booking?.pickupDate) ?? ""}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              const newTime = e.target.value;
              console.log("hora de entrega");
              console.log(newTime);
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
          ></InpuntUI>
        </div>
        <div>
          <InpuntUI
            stylesContainer={{ width: "60%" }}
            type={"date"}
            placeholder="Fecha de entrega"
            backgroundcolor="#ffffff"
            value={getDateFromFinalDate(filter.booking?.returnDate) ?? ""}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              const newDate = e.target.value;
              const existingTime = getTimeFromFinalDate(
                filter.booking?.returnDate
              );
              setFilter({
                ...filter,
                booking: {
                  ...filter.booking,
                  returnDate: `${existingTime}T${newDate}`,
                },
              });
            }}
            SvgIcon={<CalendarIcon width={25} height={25} />}
          ></InpuntUI>
          <InpuntUI
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
          ></InpuntUI>
        </div>
        <div>
          <SelectInputUI
            backgroundColor={"#ffffff"}
            width="100%"
            value={""}
            arrayOptions={categoriesOptions}
            placeholder="Categoria del auto"
            stylesContainer={{ border: " 1px solid rgba(213, 221, 234, 0.47)" }}
          ></SelectInputUI>
        </div>
        <div>
          <ButtonPrincipalUI
            sx={{ width: "100%", fontSize: " 16px" }}
            onClick={handleUpdateButton}
          >
            Actualizar
          </ButtonPrincipalUI>
        </div>
      </ContainerDate>
      <ContainerFeature>
        <h2>Caracteristicas</h2>
        <ContainerCheckBoxScroll>
          {[
            { key: "aire acondicionado", value: "Aire acondicionado" },
            { key: "navegacion gps", value: "Navegación GPS" },
            { key: "asientos cuero", value: "Asientos de cuero" },
            {
              key: "sistema sonido_premium",
              value: "Sistema de sonido premium",
            },
            { key: "camara retroceso", value: "Cámara de retroceso" },
            { key: "techo solar", value: "Techo solar" },
            { key: "control cruise", value: "Control de crucero" },
            {
              key: "sistema seguridad",
              value: "Sistema de seguridad avanzado",
            },
            {
              key: "sistema parqueo autom",
              value: "Sistema de estacionamiento automático",
            },
          ].map((feature, index) => (
            <CheckBoxUI
              name={feature.key}
              key={index}
              onChange={(e) =>
                handleSelectTypeChange(e, "features" as keyof CarFilter)
              }
            />
          ))}
        </ContainerCheckBoxScroll>
      </ContainerFeature>
      <ContainerSimpleElement>
        <h2>Marca</h2>
        <SelectInputUI
          value={""}
          width="100%"
          arrayOptions={[
            { key: "toyota", value: "Toyota" },
            { key: "ford", value: "Ford" },
            { key: "honda", value: "Honda" },
            { key: "chevrolet", value: "Chevrolet" },
            { key: "nissan", value: "Nissan" },
            { key: "volkswagen", value: "Volkswagen" },
            { key: "bmw", value: "BMW" },
            { key: "mercedes_benz", value: "Mercedes-Benz" },
            { key: "audi", value: "Audi" },
            { key: "hyundai", value: "Hyundai" },
            { key: "kia", value: "Kia" },
            { key: "mazda", value: "Mazda" },
            { key: "subaru", value: "Subaru" },
            { key: "lexus", value: "Lexus" },
            { key: "tesla", value: "Tesla" },
          ]}
          backgroundColor="#ffffff"
          placeholder="Marca"
        ></SelectInputUI>
        {/* <SelectInputUI
          width="100%"
          arrayOptions={[]}
          backgroundColor="#ffffff"
          placeholder="Moodelo"
        ></SelectInputUI> */}
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
        <h2>Combustible</h2>
        <ContainerContentElementCheckBook>
          {fuelTypes.map((data, index) => (
            <CheckBoxUI
              name={data}
              key={index}
              onChange={(e) =>
                handleSelectTypeChange(e, "fullTypes" as keyof CarFilter)
              }
            />
          ))}
        </ContainerContentElementCheckBook>
      </ContainerSimpleElement>

      <ContainerSimpleElement>
        <h2>Transmisión</h2>
        <ContainerContentElementCheckBook>
          {Object.keys(TypeChange).map((key) => (
            <CheckBoxUI
              key={key}
              name={key}
              onChange={(e) =>
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
    </ContainerFilterPanel>
  );
};

export default FilterPanel;
