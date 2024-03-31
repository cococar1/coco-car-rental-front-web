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

interface SectionContactProps {}

const SectionContact: React.FC<SectionContactProps> = () => {
  const [statusContact, setStatusContact] = useState({} as ContactInput);
  return (
    <ContainerContact>
      <ElementContact>
        <h2>Let’s collaborate and make an amazing project</h2>
        <ElementContainerText>
          <h3>Phone</h3>
          <p>+ 72 4500 1240</p>
        </ElementContainerText>
        <ElementContainerText>
          <h3>Address</h3>
          <p>123 Lorem Ipsum Street Jakarta, Indonesia</p>
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
          placeholder="E-mail address"
          backgroundcolor="#ffffff"
          stylesContainer={{
            padding: "20px 0px",
            // width: "400px !important",
            maxWidth: "100%",
            borderRadius: "0px",
            height: "30px",
            border: "1px solid #AEB7C1",
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
            border: "1px solid #AEB7C1",
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
            border: "1px solid #AEB7C1",
            width: "100%",
            borderRadius: "0px",
            marginLeft: "0px",
            maxWidth: "100%",
            minWidth: "100%",
            maxHeight: "100px",
            minHeight: "100px",
          }}
        />
        <ContainerButton>
          <ButtonPrincipalUI sx={{ borderRadius: "50px" }}>
            Enviar mensaje
          </ButtonPrincipalUI>
        </ContainerButton>
      </ElementContact>
    </ContainerContact>
  );
};

export default SectionContact;
