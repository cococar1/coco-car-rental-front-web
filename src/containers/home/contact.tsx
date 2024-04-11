import { useState } from "react";
import InpuntUI from "@/ui/InputUI";
import {
  ContainerDescriptionContact,
  ContainerForm,
  ContainerSectionContact,
} from "./contact.style";
import TextAreaUI from "@/ui/TextAreaUI";
import { ButtonPrincipalUI } from "@/ui/ButtonPrincipalUi";
import { ContactInput } from "@/types/Contact.type";
import { useContactContext } from "@/context/ContactContext";

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
        <h2>Subscribe to Our Newsletter for Weekly Article Update.</h2>
        <p>
          We have organization-related blog so we can share our thought and
          rutinity in our blog that updated weekly. We will not spam you, we
          promise.
        </p>
      </ContainerDescriptionContact>
      <ContainerForm>
        <InpuntUI
          type="email"
          value={statusContact.email ?? ""}
          onChange={(e: EventChange) => {
            setStatusContact({
              ...statusContact,
              email: e.target.value,
            });
          }}
          placeholder="E-mail address"
          backgroundcolor="#ffffff"
          stylesContainer={{
            padding: "20px 0px",
            // width: "400px !important",
            maxWidth: "100%",
            borderRadius: "0px",
            height: "30px",
            // border: "1px solid #AEB7C1",
          }}
          SvgIcon={<></>}
        />
        <InpuntUI
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
          stylesContainer={{
            // width: "400px !important",    padding:"20px 0px",
            // padding: "20px 0px",
            maxWidth: "100%",
            padding: "20px 0px",
            borderRadius: "0px",
            height: "30px",
            // border: "1px solid #AEB7C1",
          }}
          SvgIcon={<></>}
        />
        <TextAreaUI
          placeholder="Your message here…"
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
            width: "100%",
            borderRadius: "0px",
            marginLeft: "0px",
            maxWidth: "100%",
            minWidth: "100%",
            maxHeight: "100px",
            minHeight: "100px",
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
