import InpuntUI from "@/ui/InputUI";
import {
  ContainerDescriptionContact,
  ContainerForm,
  ContainerSectionContact,
} from "./contact.style";
import TextAreaUI from "@/ui/TextAreaUI";
import { ButtonPrincipalUI } from "@/ui/ButtonPrincipalUi";

interface SectionContactProps {}

const SectionContact: React.FC<SectionContactProps> = () => {
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
          placeholder="Correo Electrónico"
          backgroundColor=""
          SvgIcon={<div></div>}
          stylesContainer={{
            width: "95%",
            border: "none",
            borderBottom: "1px solid #EDEDED;",
          }}
        />
        <InpuntUI
          type="text"
          placeholder="Número de teléfono"
          backgroundColor=""
          SvgIcon={<div></div>}
          stylesContainer={{
            width: "95%",
            border: "none",
            borderBottom: "1px solid #EDEDED;",
          }}
        />
        <TextAreaUI placeholder="Escribe tu consulta aquí"></TextAreaUI>
        <ButtonPrincipalUI>Enviar Consulta</ButtonPrincipalUI>
      </ContainerForm>
    </ContainerSectionContact>
  );
};

export default SectionContact;
