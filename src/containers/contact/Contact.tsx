import InpuntUI from "@/ui/InputUI";
import {
  ContainerButton,
  ContainerContact,
  ContainerIconNetwork,
  ElementContact,
  ElementContainerText,
} from "./contact.style";
import SelectInputUI from "@/ui/SelectInputUI";
import TextAreaUI from "@/ui/TextAreaUI";
import { ButtonPrincipalUI } from "@/ui/ButtonPrincipalUi";
import FacebookIcon from "@/assets/svgs/facebookIcon";
import InstagramIcon from "@/assets/svgs/instagramIcon";
import TwitterIcon from "@/assets/svgs/twitterIcon";
import { WrapperIconNetworks } from "./contact.style";
import { useState } from "react";
import { ContactInput } from "@/types/Contact.type";
import { EventChange } from "@/types/general";
import { useContactContext } from "@/context/ContactContext";
import { toast } from "react-toastify";

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
    <ContainerContact>
      <ElementContact>
        <h2>¿Listo para tu próxima aventura sobre ruedas?</h2>
        <p>
          ¡Contáctanos hoy mismo para resolver tus dudas y reservar tu auto
          ideal! Estamos aquí para ayudarte en cada paso del camino
        </p>
        <ElementContainerText>
          <h3>Teléfono</h3>
          <p style={{ color: "#E96F45" }}>+ 72 4500 1240</p>
        </ElementContainerText>
        <ElementContainerText>
          <h3>Dirección</h3>
          <p>Mendoza, Argentina</p>
        </ElementContainerText>
        <WrapperIconNetworks>
          <ContainerIconNetwork>
            <FacebookIcon />
          </ContainerIconNetwork>
          <ContainerIconNetwork>
            <InstagramIcon />
          </ContainerIconNetwork>
          <ContainerIconNetwork>
            <TwitterIcon />
          </ContainerIconNetwork>
        </WrapperIconNetworks>
      </ElementContact>
      <ElementContact>
        <InpuntUI
          type="email"
          value={statusContact.email ?? ""}
          onChange={(e: EventChange) => {
            setStatusContact({
              ...statusContact,
              email: e.target.value,
            });
          }}
          placeholder="Correo electrónico"
          backgroundcolor="#ffffff"
          stylesContainer={{
            padding: "20px 0px",
            // width: "400px !important",
            maxWidth: "100%",
            borderRadius: "0px",
            height: "30px",
            border: "0px solid #AEB7C1",
            borderBottom: "1px solid #EDEDED",
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
            border: "0px solid #AEB7C1",
            borderBottom: "1px solid #EDEDED",
          }}
          SvgIcon={<></>}
        />
        <TextAreaUI
          placeholder="Escribe tu consulta aquí"
          stylesContainer={{ width: "100%" }}
          value={statusContact.content ?? ""}
          onChange={(e: EventChange) => {
            setStatusContact({
              ...statusContact,
              content: e.target.value,
            });
          }}
          stylesInput={{
            fontSize:"16px",
            width: "100%",
            borderRadius: "0px",
            marginLeft: "0px",
            maxWidth: "100%",
            minWidth: "100%",
            maxHeight: "100px",
            minHeight: "100px",
            border: "0px solid #AEB7C1",
            borderBottom: "1px solid #EDEDED",
          }}
        />
        <ContainerButton>
          <ButtonPrincipalUI
            sx={{ borderRadius: "50px" }}
            onClick={handleSubmitContact}
          >
            Enviar mensaje
          </ButtonPrincipalUI>
        </ContainerButton>
      </ElementContact>
    </ContainerContact>
  );
};

export default SectionContact;
