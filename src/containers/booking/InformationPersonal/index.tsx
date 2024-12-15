import {
  ContainerInformation,
  SectionInformationPersonal,
} from "./informationPersona.style";
import EditableField from "../../../components/EditableField/index";
import SelectInputUI from "@/ui/SelectInputUI";
import PhoneInput from "react-phone-input-2";
import Accordion from "@/components/Accordion";
import { useBookingContext } from "@/context/BookingContext";
import { useEffect } from "react";

interface InformationPersonalProps {}

const InformationPersonal: React.FC<InformationPersonalProps> = () => {
  const { newBooking, setNewBooking } = useBookingContext();

  return (
    <SectionInformationPersonal>
      <h2>Información personal</h2>
      <ContainerInformation>
        <EditableField
          label="Nombre Completo"
          value={newBooking.client?.fullName ?? ""}
          styleContainer={{ borderBottom: "1px solid #EFECF3" }}
          Input={
            <input
              type="text"
              style={{
                padding: "8px",
                fontSize: "14px",
                border: "1px solid #CACACA",
                borderRadius: "5px",
                width: "50%",
              }}
              value={newBooking.client?.fullName ?? ""}
              onChange={(e) => {
                setNewBooking({
                  ...newBooking,
                  client: {
                    ...newBooking.client,
                    fullName: e.target.value,
                  },
                });
              }}
            />
          }
        ></EditableField>
        <EditableField
          label="Genero"
          value={newBooking.client?.gender ?? ""}
          styleContainer={{ borderBottom: "1px solid #EFECF3" }}
          Input={
            <SelectInputUI
              styleSelect={{
                border: "1px solid #CACACA",
                borderRadius: "5px",
                width: "51%",
                padding: "8px",
                marginLeft: "-10px",
              }}
              arrayOptions={[
                { id: "MALE", value: "Masculino" },
                { id: "FEMALE", value: "Femenino" },
                { id: "OTHER", value: "otro" },
              ]}
              value={newBooking.client?.gender ?? ""}
              onChange={({ target }: React.ChangeEvent<HTMLSelectElement>) => {
                setNewBooking({
                  ...newBooking,
                  client: {
                    ...newBooking.client,
                    gender: target.value,
                  },
                });
              }}
              placeholder="Select"
              width="100%"
              backgroundColor="#fff"
              stylesContainer={{ color: "#000" }}
            />
          }
        ></EditableField>{" "}
        <EditableField
          label="Email"
          value={newBooking.client?.email ?? ""}
          styleContainer={{ borderBottom: "1px solid #EFECF3" }}
          Input={
            <div style={{ width: "100%" }}>
              <input
                type="email"
                style={{
                  padding: "6px",
                  fontSize: "14px",
                  border: "1px solid #CACACA",
                  borderRadius: "5px",
                  width: "50%",
                  marginTop: "8px" 
                }}
                value={newBooking.client?.email ?? ""}
                onChange={(e) => {
                  setNewBooking({
                    ...newBooking,
                    client: {
                      ...newBooking.client,
                      email: e.target.value,
                    },
                  });
                }}
              />
            </div>
          }
        ></EditableField>
        <EditableField
          label="Numero de Contacto"
          value={newBooking.client?.phoneNumber ?? ""}
          styleContainer={{ borderBottom: "1px solid #EFECF3" }}
          Input={
            <div style={{marginTop: "8px" }}>
              <PhoneInput
                inputStyle={{ width: "50%" }}
                country={"ar"}
                value={newBooking.client?.phoneNumber ?? ""}
                onChange={(phone) => {
                  setNewBooking({
                    ...newBooking,
                    client: {
                      ...newBooking.client,
                      phoneNumber: phone,
                    },
                  });
                }}
              />
            </div>
          }
          //   styleContainer={{  }}
        ></EditableField>
        <EditableField
          styleContainer={{ borderBottom: "1px solid #EFECF3" }}
          label="Dirección"
          value={newBooking.client?.address ?? ""}
          Input={
            <input
              type="text"
              style={{
                padding: "6px",
                fontSize: "14px",
                border: "1px solid #CACACA",
                borderRadius: "5px",
                width: "50%",
                marginTop: "6px",
              }}
              value={newBooking.client?.address ?? ""}
              onChange={(e) => {
                setNewBooking({
                  ...newBooking,
                  client: {
                    ...newBooking.client,
                    address: e.target.value,
                  },
                });
              }}
            />
          }
        ></EditableField>{" "}
        <EditableField
          label="Lugar de recogida"
          value={newBooking.pickupLocation ?? ""}
          Input={
            <SelectInputUI
              styleSelect={{
                border: "1px solid #CACACA",
                borderRadius: "5px",
                width: "51%",
                padding: "8px",
                marginLeft: "-10px",
              }}
              arrayOptions={[
                { id: "AREOPUERTO", value: "Aeropuerto" },
                {
                  id: "AXION DE PETI Y GUTIERREZ",
                  value: " axion de peti y Gutiérrez",
                },
                { id: "TERMINAL DE OMNIBUS", value: "Terminal de ómnibus" },
              ]}
              value={newBooking.pickupLocation ?? ""}
              onChange={({ target }: React.ChangeEvent<HTMLSelectElement>) => {
                setNewBooking({
                  ...newBooking,
                  pickupLocation: target.value,
                });
              }}
              placeholder="Select"
              width="100%"
              backgroundColor="#fff"
              stylesContainer={{ color: "#000" }}
            />
          }
        ></EditableField>{" "}
      </ContainerInformation>
    </SectionInformationPersonal>
  );
};

export default InformationPersonal;
