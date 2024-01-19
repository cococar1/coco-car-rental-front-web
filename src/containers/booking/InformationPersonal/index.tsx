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
  useEffect(() => {
    console.log(newBooking);
  }, [newBooking, setNewBooking]);

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
            <input
              type="email"
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
          }
        ></EditableField>
        <EditableField
          label="Numero de Contacto"
          value={newBooking.client?.phoneNumber ?? ""}

          styleContainer={{ borderBottom: "1px solid #EFECF3" }}
          Input={
            <PhoneInput
              country={"us"}
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
          }
          //   styleContainer={{  }}
        ></EditableField>
        <EditableField
          label="Address"
          value="Jose Montenegro"
          Input={
            <input
              type="text"
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
      </ContainerInformation>
    </SectionInformationPersonal>
  );
};

export default InformationPersonal;
