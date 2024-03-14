import { useEffect, useState } from "react";
import { ContainerInformation } from "./style";
import { User } from "@/types/user.type";
import EditableField from "@/components/EditableField";
import { useSession } from "next-auth/react";
import { useAuthContext } from "@/context/AuthContext";
import SelectInputUI from "@/ui/SelectInputUI";
import PhoneInput from "react-phone-input-2";

interface FormInfoPersonalProps {
  user: User;
  setUser: Function;
}

const FormInfoPersonal: React.FC<FormInfoPersonalProps> = ({
  user,
  setUser,
}) => {
  return (
    <ContainerInformation>
      <EditableField
        label="Nombre Completo"
        value={user?.fullName ?? ""}
        styleContainer={{ borderBottom: "1px solid #EFECF3" }}
        Input={
          <input
            type="text"
            value={user?.fullName ?? ""}
            onChange={(e) => {
              setUser({
                ...user,
                fullName: e.target.value,
              });
            }}
          />
        }
      ></EditableField>
      <EditableField
        label="Genero"
        value={user?.gender ?? ""}
        styleContainer={{ borderBottom: "1px solid #EFECF3" }}
        Input={
          <SelectInputUI
            arrayOptions={[
              { id: "MALE", value: "Masculino" },
              { id: "FEMALE", value: "Femenino" },
              { id: "OTHER", value: "otro" },
            ]}
            value={user?.gender ?? ""}
            onChange={({ target }: React.ChangeEvent<HTMLSelectElement>) => {
              setUser({
                ...user,
                gender: target.value,
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
        value={user?.email ?? ""}
        styleContainer={{ borderBottom: "1px solid #EFECF3" }}
        Input={
          <input
            type="email"
            value={user?.email ?? ""}
            onChange={(e) => {
              setUser({
                ...user,

                email: e.target.value,
              });
            }}
          />
        }
      ></EditableField>
      <EditableField
        label="Numero de Contacto"
        value={user?.phoneNumber ?? ""}
        styleContainer={{ borderBottom: "1px solid #EFECF3" }}
        Input={
          <PhoneInput
            country={"us"}
            value={user?.phoneNumber ?? ""}
            onChange={(phone) => {
              setUser({
                ...user,

                phoneNumber: phone,
              });
            }}
          />
        }
        //   styleContainer={{  }}
      ></EditableField>
      <EditableField
        label="Address"
        value={user?.address ?? ""}
        Input={
          <input
            type="text"
            value={user?.address ?? ""}
            onChange={(e) => {
              setUser({
                ...user,

                address: e.target.value
              });
            }}
          />
        }
      ></EditableField>{" "}
    </ContainerInformation>
  );
};

export default FormInfoPersonal;
