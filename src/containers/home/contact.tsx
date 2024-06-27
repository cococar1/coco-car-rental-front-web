import { useState } from "react";
import InputUI from "@/ui/InputUI";
import {
  ContainerDescriptionContact,
  ContainerForm,
  ContainerImageFinal,
  ContainerSectionContact,
} from "./contact.style";
import TextAreaUI from "@/ui/TextAreaUI";
import { ButtonPrincipalUI } from "@/ui/ButtonPrincipalUi";
import { ContactInput } from "@/types/Contact.type";
import { useContactContext } from "@/context/ContactContext";
import { toast } from "react-toastify";
import { EventChange } from "@/types/general";
import Image from "next/image";

interface SectionContactProps {}

const SectionContact: React.FC<SectionContactProps> = () => {
  const [statusContact, setStatusContact] = useState({} as ContactInput);

  const { createContact } = useContactContext();

  const handleSubmitContact = () => {
    if (
      !statusContact.email &&
      !statusContact.subject &&
      !statusContact.content
    ) {
      return toast.error(`Se requiere llenar todos los datos`, {
        position: "bottom-right",
      });
    }
    createContact(statusContact, () => {
      setStatusContact({});
    });
  };
  return (
    <ContainerSectionContact>
      <ContainerDescriptionContact>
        <h2>¿Listo para empezar tu viaje en el auto perfecto?</h2>
        <p>
          Contáctanos ahora para obtener más detalles, resolver tus dudas y
          asegurar la reserva de tu auto ideal.
        </p>
        <ContainerImageFinal>
          <Image
            src={"/images/logo-without-background.png"}
            fill
            alt="Auto de alquiler en Argentina"
          />
        </ContainerImageFinal>
      </ContainerDescriptionContact>
      <ContainerForm>
        <InputUI
          type="email"
          value={statusContact.email ?? ""}
          onChange={(e: EventChange) => {
            setStatusContact({
              ...statusContact,
              email: e.target.value,
            });
          }}
          placeholder="E-mail "
          backgroundcolor="#ffffff"
          stylesInput={{
            fontSize: "16px",
            fontFamily: "Nunito Sans, sans-serif",
          }}
          stylesContainer={{
            padding: "20px 10px",
            // width: "400px !important",
            maxWidth: "100%",
            borderRadius: "0px",
            height: "30px",
            // border: "1px solid #AEB7C1",
          }}
          SvgIcon={<></>}
        />
        <InputUI
          type="text"
          value={statusContact.subject ?? ""}
          onChange={(e: EventChange) => {
            setStatusContact({
              ...statusContact,
              subject: e.target.value,
            });
          }}
          backgroundcolor="#ffffff"
          placeholder="Asunto"
          stylesInput={{
            fontSize: "16px",
            fontFamily: "Nunito Sans, sans-serif",
            // color:"#AEB7C1"
          }}
          stylesContainer={{
            // width: "400px !important",    padding:"20px 0px",

            maxWidth: "100%",
            padding: "20px 10px",
            borderRadius: "0px",
            height: "30px",
            // border: "1px solid #AEB7C1",
          }}
          SvgIcon={<></>}
        />
        <TextAreaUI
          placeholder="Escribe tu consulta aquí …"
          
          stylesContainer={{ width: "100%" }}
          value={statusContact.content ?? ""}
          onChange={(e: EventChange) => {
            setStatusContact({
              ...statusContact,
              content: e.target.value,
            });
          }}
          stylesInput={{
            // border: "1px solid #AEB7C1",
            padding: "10px 10px",
            width: "100%",
            borderRadius: "0px",
            marginLeft: "0px",
            maxWidth: "100%",
            minWidth: "100%",
            maxHeight: "100px",
            minHeight: "100px",
            fontSize: "16px",
            fontFamily: "Nunito Sans, sans-serif",
          }}
        />{" "}
        <ButtonPrincipalUI onClick={handleSubmitContact}>
          Enviar Consulta
        </ButtonPrincipalUI>
      </ContainerForm>
    </ContainerSectionContact>
  );
};

export default SectionContact;
